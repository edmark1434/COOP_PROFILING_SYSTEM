<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Loan;
use App\Models\Member;
use Illuminate\Support\Facades\Auth;

class MemberLoansController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        // If user doesn't have a member_id, they can't have loans
        if (!$user->member_id) {
            \Log::info('User has no member_id associated');
            return Inertia::render('member/my-loans', [
                'currentLoans' => [],
                'previousLoans' => [],
            ]);
        }
        
        // Get the member record
        $member = Member::find($user->member_id);
        
        if (!$member) {
            \Log::info('Member record not found for member_id: ' . $user->member_id);
            return Inertia::render('member/my-loans', [
                'currentLoans' => [],
                'previousLoans' => [],
            ]);
        }
        
        \Log::info('Found member: ' . $member->first_name . ' ' . $member->last_name);
        
        // Get current loans (ongoing and pending) - KEEP SAME: type + status
        $currentLoans = Loan::with(['purpose'])
            ->where('member_id', $user->member_id)
            ->whereIn('status', ['ONGOING', 'PENDING', 'APPROVED', 'DISBURSED', 'OVERDUE'])
            ->orderBy('id', 'desc')
            ->get()
            ->map(function ($loan) use ($member) {
                return [
                    'id' => $loan->id,
                    'member' => [
                        'first_name' => $member->first_name,
                        'middle_name' => $member->middle_name,
                        'last_name' => $member->last_name,
                        'suffix' => $member->suffix,
                    ],
                    'status' => ucfirst(strtolower($loan->status)),
                    'amount' => number_format($loan->amount, 2),
                    'purpose' => [
                        'name' => $loan->purpose->name ?? 'General Loan',
                    ],
                    'type' => $loan->purpose->name ?? 'General Loan',
                    'remarks' => $loan->remarks,
                    'application_date' => 'Recent',
                ];
            });

        // Get previous loans (completed, paid, or rejected) - CHANGE: type + date only
        $previousLoans = Loan::with(['purpose'])
            ->where('member_id', $user->member_id)
            ->whereIn('status', ['PAID', 'REJECTED'])
            ->orderBy('id', 'desc')
            ->get()
            ->map(function ($loan) {
                return [
                    'id' => $loan->id,
                    'type' => $loan->purpose->name ?? 'General Loan',
                    'amount' => number_format($loan->amount, 2),
                    'application_date' => $loan->created_at ? $loan->created_at->format('F j, Y') : 'Date not available',
                    // Remove status, member info, remarks for previous loans
                ];
            });

        return Inertia::render('member/my-loans', [
            'currentLoans' => $currentLoans,
            'previousLoans' => $previousLoans,
        ]);
    }
}