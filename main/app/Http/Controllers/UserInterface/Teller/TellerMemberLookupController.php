<?php

namespace App\Http\Controllers\UserInterface\Teller;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CommonLogic;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Loan;
use App\Models\Transaction;

class TellerMemberLookupController extends Controller
{
    public function index()
    {
        // Get members for the combobox dropdown
        $members = Member::select('id', 'first_name', 'last_name', 'middle_name')
            ->orderBy('first_name')
            ->get()
            ->map(function ($member) {
                return [
                    'id' => (string)$member->id, // Explicitly cast to string
                    'name' => $member->first_name . ' ' . $member->last_name,
                ];
            });

        return Inertia::render('teller/member-lookup', [
            'members' => $members,
        ]);
    }

    public function memberProfile($id)
    {
        // Ensure the ID is numeric
        if (!is_numeric($id)) {
            return redirect()->route('teller.memberLookup')
                ->with('error', 'Invalid member ID');
        }

        $member = Member::with(['accounts','user'])->find($id);
        
        if(!$member) {
            return redirect()->route('teller.memberLookup')
                ->with('error', 'Member not found');
        }

        $user = $member->user;

        $name = $member->first_name . " " . $member->last_name;
        $initial = CommonLogic::getInitials($name);
        $inactiveStatus = ['PAID','REJECTED','PENDING'];
        
        // Calculate delinquency rate
        $delinquencyRate = $this->calculateDelinquencyRate($id);

        // Log what we're sending to frontend
        \Log::info("Sending to frontend - Member: {$member->id}, Delinquency Rate: {$delinquencyRate}%");

        // BASE QUERIES (same as admin but for teller view)
        $transactionsBase = Transaction::with(['member','user'])
            ->where('member_id', $id);

        $loansBase = Loan::with(['member','purpose'])
            ->whereNotIn('loans.status', $inactiveStatus)
            ->where('loans.member_id', $id);

        // Sort by Member Name
        $transactionsAscName = $transactionsBase->clone()
            ->join('members', 'transactions.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'asc')
            ->select('transactions.*')
            ->get();

        $transactionsDescName = $transactionsBase->clone()
            ->join('members', 'transactions.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'desc')
            ->select('transactions.*')
            ->get();

        // Sort by Type
        $transactionsAscType = $transactionsBase->clone()
            ->orderBy('type', 'asc')
            ->get();

        $transactionsDescType = $transactionsBase->clone()
            ->orderBy('type', 'desc')
            ->get();

        // Sort by Date
        $transactionsAscDate = $transactionsBase->clone()
            ->orderBy('created_at', 'asc')
            ->get();

        $transactionsDescDate = $transactionsBase->clone()
            ->orderBy('created_at', 'desc')
            ->get();

        // Sort by Member Name
        $loansAscName = $loansBase->clone()
            ->join('members', 'loans.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'asc')
            ->select('loans.*')
            ->get();

        $loansDescName = $loansBase->clone()
            ->join('members', 'loans.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'desc')
            ->select('loans.*')
            ->get();

        // Sort by Purpose Type
        $loansAscType = $loansBase->clone()
            ->join('loan_purposes', 'loans.purpose_id', '=', 'loan_purposes.id')
            ->orderBy('loan_purposes.name', 'asc')
            ->select('loans.*')
            ->get();

        $loansDescType = $loansBase->clone()
            ->join('loan_purposes', 'loans.purpose_id', '=', 'loan_purposes.id')
            ->orderBy('loan_purposes.name', 'desc')
            ->select('loans.*')
            ->get();

        // Sort by Date
        $loansAscDate = $loansBase->clone()
            ->orderBy('created_at', 'asc')
            ->get();
        $loansDescDate = $loansBase->clone()
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('teller/member-profile', [
            'member'=> [
                'id' => $member->id,
                'first_name' => $member->first_name,
                'last_name' => $member->last_name,
                'middle_name' => $member->middle_name,
                'suffix' => $member->suffix,
                'shareCapital' => $member->accounts->first()->balance ?? 0,
                'dateJoined' => $member->join_date,
                'email' => $user->email ?? '',
                'contact' => $member->contact_num,
                'status' => $member->accounts->first()->status ?? 'unknown',
                'initial' => $initial
            ],
            'delinquencyRate' => $delinquencyRate,
            'transactionsAscName' => $transactionsAscName,
            'transactionsDescName' => $transactionsDescName,
            'transactionsAscType' => $transactionsAscType,
            'transactionsDescType' => $transactionsDescType,
            'transactionsAscDate' => $transactionsAscDate,
            'transactionsDescDate' => $transactionsDescDate,

            'loansAscName' => $loansAscName,
            'loansDescName' => $loansDescName,
            'loansAscType' => $loansAscType,
            'loansDescType' => $loansDescType,
            'loansAscDate' => $loansAscDate,
            'loansDescDate' => $loansDescDate,
        ]);
    }

    /**
     * Calculate delinquency rate using the formula: (number of overdue loans / total loans) × 100
     * Text should be red if >= 10%
     */
    private function calculateDelinquencyRate($memberId)
    {
        try {
            // Use exact status match for 'Overdue'
            $totalLoans = Loan::where('member_id', $memberId)->count();
            
            if ($totalLoans == 0) {
                \Log::info("No loans found for member $memberId - delinquency rate: 0%");
                return 0;
            }
            
            $overdueLoans = Loan::where('member_id', $memberId)
                ->where('status', 'Overdue') // Exact match for 'Overdue'
                ->count();
            
            $delinquencyRate = ($overdueLoans / $totalLoans) * 100;
            $roundedRate = round($delinquencyRate, 1);
            
            \Log::info("Delinquency Rate Calculation - Member: $memberId, Total Loans: $totalLoans, Overdue: $overdueLoans, Rate: $roundedRate%");
            
            return $roundedRate;
            
        } catch (\Exception $e) {
            \Log::error("Error calculating delinquency rate for member $memberId: " . $e->getMessage());
            return 0;
        }
    }

    /**
     * Get members with delinquency rate 10% or above
     */
    public function getDelinquentMembers($minRate = 10)
    {
        $delinquentMembers = \DB::table('members as m')
            ->leftJoin('loans as l', 'm.id', '=', 'l.member_id')
            ->select(
                'm.id',
                'm.first_name',
                'm.last_name',
                'm.contact_num',
                'm.join_date',
                'm.status as member_status',
                \DB::raw('COUNT(l.id) as total_loans'),
                \DB::raw('SUM(CASE WHEN l.status = "Overdue" THEN 1 ELSE 0 END) as overdue_loans'),
                \DB::raw('CASE 
                    WHEN COUNT(l.id) = 0 THEN 0
                    ELSE ROUND((SUM(CASE WHEN l.status = "Overdue" THEN 1 ELSE 0 END) * 100.0 / COUNT(l.id)), 1)
                END as delinquency_rate')
            )
            ->groupBy('m.id', 'm.first_name', 'm.last_name', 'm.contact_num', 'm.join_date', 'm.status')
            ->havingRaw('
                CASE 
                    WHEN COUNT(l.id) = 0 THEN 0
                    ELSE ROUND((SUM(CASE WHEN l.status = "Overdue" THEN 1 ELSE 0 END) * 100.0 / COUNT(l.id)), 1)
                END >= ?', [$minRate])
            ->orderBy('delinquency_rate', 'DESC')
            ->get();

        return $delinquentMembers;
    }
}