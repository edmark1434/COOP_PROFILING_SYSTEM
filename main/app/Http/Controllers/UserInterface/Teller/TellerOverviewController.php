<?php

namespace App\Http\Controllers\UserInterface\Teller;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\LedgerEntry;
use App\Models\Member;
use App\Models\Account;
use App\Models\Setting;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TellerOverviewController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        $startOfWeek = Carbon::now()->startOfWeek(); 
        $endOfWeek = Carbon::now()->endOfWeek();     
        $user = Auth::user();
        
        // Get transactions from this week for the logged-in teller
        $transactionsThisWeek = Transaction::where('user_id', $user->id)
            ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
            ->get();
            
        $transactionCountThisWeek = $transactionsThisWeek->count();
        
        // Calculate transaction type breakdown for description
        if ($transactionCountThisWeek > 0) {
            $transactionTypeBreakdown = $transactionsThisWeek->groupBy('type')
                ->map(function ($transactions, $type) use ($transactionCountThisWeek) {
                    $percentage = round(($transactions->count() / $transactionCountThisWeek) * 100, 1);
                    return [
                        'type' => $type,
                        'count' => $transactions->count(),
                        'percentage' => $percentage
                    ];
                })
                ->values();
            
            $mostFrequentType = $transactionTypeBreakdown->sortByDesc('count')->first();
            $transactionDescription = "with {$mostFrequentType['percentage']}% on " . strtolower($mostFrequentType['type']);
        } else {
            $transactionDescription = 'No transactions this week';
        }
        
        // Cash on hand from Coop Cash account (ID 6) - Shared across all tellers
        $cashAccount = Account::find(6); 
        $cashAccountBalance = $cashAccount ? $cashAccount->balance : 0;
        
        // Starting cash from settings or use default
        $startingCashSetting = Setting::where('key', 'starting_cash')->first();
        $startingCash = $startingCashSetting ? floatval($startingCashSetting->value) : 0;
        
        // Calculate cash in/out based on transaction types for this teller THIS WEEK
        $cashInThisWeek = 0;
        $cashOutThisWeek = 0;
        
        // Define transaction types for calculations
        $cashInTypes = ['SHARE CAPITAL CONTRIBUTION', 'LOAN PAYMENT', 'DIVIDEND CREDIT', 'DIVIDEND REINVESTMENT'];
        $cashOutTypes = ['LOAN DISBURSEMENT'];
        
        foreach ($transactionsThisWeek as $transaction) {
            $type = strtoupper($transaction->type);
            
            if (in_array($type, $cashInTypes)) {
                $cashInThisWeek += $transaction->amount;
            } elseif (in_array($type, $cashOutTypes)) {
                $cashOutThisWeek += $transaction->amount;
            }
        }
        
        // Cash in breakdown for description
        if ($cashInThisWeek > 0) {
            $cashInBreakdown = $transactionsThisWeek->filter(function ($transaction) use ($cashInTypes) {
                    return in_array(strtoupper($transaction->type), $cashInTypes);
                })
                ->groupBy('type')
                ->map(function ($transactions, $type) {
                    $typeTotal = $transactions->sum('amount');
                    return [
                        'type' => $type,
                        'amount' => $typeTotal,
                    ];
                })
                ->values();
            
            $mostFrequentCashIn = $cashInBreakdown->sortByDesc('amount')->first();
            if ($mostFrequentCashIn) {
                $percentage = round(($mostFrequentCashIn['amount'] / $cashInThisWeek) * 100, 1);
                $cashInDescription = "with {$percentage}% from " . strtolower($mostFrequentCashIn['type']) . "s";
            } else {
                $cashInDescription = 'No cash in this week';
            }
        } else {
            $cashInDescription = 'No cash in this week';
        }
        
        // Cash out description
        $disbursementCount = $transactionsThisWeek
            ->filter(function ($transaction) {
                return strtoupper($transaction->type) === 'LOAN DISBURSEMENT';
            })
            ->count();
        
        if ($disbursementCount > 0) {
            $cashOutDescription = "from {$disbursementCount} loan disbursements";
        } else {
            $cashOutDescription = 'No cash out this week';
        }
        
        // Get this week's transactions for display
        $weekTransactions = Transaction::with(['member'])
            ->where('user_id', $user->id) 
            ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($transaction) {
                // Get member full name
                $member = $transaction->member;
                $fullName = $member->first_name;
                if ($member->middle_name) {
                    $fullName .= ' ' . $member->middle_name;
                }
                $fullName .= ' ' . $member->last_name;
                if ($member->suffix) {
                    $fullName .= ' ' . $member->suffix;
                }
                
                // Format date as "October 3, 2025" (without time)
                $date = $transaction->created_at;
                if (is_string($date)) {
                    $formattedDate = Carbon::parse($date)->format('F j, Y');
                } else {
                    $formattedDate = $date->format('F j, Y');
                }
                
                return [
                    'id' => $transaction->id,
                    'type' => $transaction->type,
                    'date' => $formattedDate,
                    'member' => $fullName,
                    'amount' => '₱ ' . number_format($transaction->amount, 2),
                    'raw_amount' => $transaction->amount,
                ];
            });

        // Format week range for display
        $weekRange = $startOfWeek->format('M j') . ' - ' . $endOfWeek->format('M j, Y');

        return Inertia::render('teller/overview', [
            'transactionsThisWeek' => $transactionCountThisWeek,
            'transactionDescription' => $transactionDescription,
            'cashOnHand' => '₱ ' . number_format($cashAccountBalance, 2),
            'startingCash' => '₱ ' . number_format($startingCash, 2),
            'cashInThisWeek' => '₱ ' . number_format($cashInThisWeek, 2),
            'cashInDescription' => $cashInDescription,
            'cashOutThisWeek' => '₱ ' . number_format($cashOutThisWeek, 2),
            'cashOutDescription' => $cashOutDescription,
            'weekTransactions' => $weekTransactions,
            'weekTransactionCount' => $weekTransactions->count(),
            'weekRange' => $weekRange,
        ]);
    }
}