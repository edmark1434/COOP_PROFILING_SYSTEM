<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Transaction;
use App\Models\Loan;
use App\Models\Account;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class MemberOverviewController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        // Check if user has member profile (will return an empty page for overview)
        if (!$user->member_id) {
            return Inertia::render('member/overview', [
                'recentTransactions' => [],
                'currentLoans' => [],
                'statistics' => [
                    'total_transactions' => 0,
                    'total_amount' => 0,
                    'active_loans' => 0,
                    'total_loan_amount' => 0,
                    'delinquency_rate' => 0,
                ],
                'member' => [
                    'first_name' => '',
                    'middle_name' => '',
                    'last_name' => '',
                    'suffix' => '',
                    'full_name' => '',
                    'contact_num' => '',
                    'status' => '',
                    'join_date' => '',
                    'id_coop' => '',
                    'email' => '',
                    'share_capital' => 0,
                    'delinquency_rate' => 0,
                ],
            ]);
        }
        
        // EAGER LOAD ACCOUNTS RELATIONSHIP like in admin controller
        $member = Member::with(['accounts'])->find($user->member_id);
        
        if (!$member) {
            return Inertia::render('member/overview', [
                'recentTransactions' => [],
                'currentLoans' => [],
                'statistics' => [
                    'total_transactions' => 0,
                    'total_amount' => 0,
                    'active_loans' => 0,
                    'total_loan_amount' => 0,
                    'delinquency_rate' => 0,
                ],
                'member' => [
                    'first_name' => '',
                    'middle_name' => '',
                    'last_name' => '',
                    'suffix' => '',
                    'full_name' => '',
                    'contact_num' => '',
                    'status' => '',
                    'join_date' => '',
                    'id_coop' => '',
                    'email' => '',
                    'share_capital' => 0,
                    'delinquency_rate' => 0,
                ],
            ]);
        }
        
        // Get recent transactions
        $recentTransactions = Transaction::with(['user', 'member'])
            ->where('member_id', $user->member_id)
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get()
            ->map(function ($transaction) {
                $date = Carbon::parse($transaction->created_at);

                return [
                    'id' => $transaction->id,
                    'ref_no' => $transaction->ref_no,
                    'type' => $transaction->type,
                    'amount' => (float) $transaction->amount,
                    'created_at' => $date->format('F j, Y · g:i A'),
                    'created_at_raw' => $transaction->created_at,
                ];
            });
        
        // Get current/active loans - CASE INSENSITIVE STATUS CHECK
        $currentLoans = Loan::with(['purpose'])
            ->where('member_id', $user->member_id)
            ->where(function($query) {
                $query->where(DB::raw('LOWER(status)'), 'ongoing')
                      ->orWhere(DB::raw('LOWER(status)'), 'pending')
                      ->orWhere(DB::raw('LOWER(status)'), 'approved')
                      ->orWhere(DB::raw('LOWER(status)'), 'disbursed');

            })
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get()
            ->map(function ($loan) {
                $date = Carbon::parse($loan->created_at);

                return [
                    'id' => $loan->id,
                    'type' => $loan->purpose->name ?? $loan->type ?? 'General Loan',
                    'amount' => number_format($loan->amount, 2),
                    'application_date' => $loan->created_at,
                    'status' => $loan->status,
                ];
            });

        // Calculate statistics - CASE INSENSITIVE STATUS CHECKS
        $totalTransactions = Transaction::where('member_id', $user->member_id)->count();
        $totalTransactionAmount = Transaction::where('member_id', $user->member_id)->sum('amount');
        
        // Active loans count - case insensitive
        $activeLoansCount = Loan::where('member_id', $user->member_id)
            ->where(function($query) {
                $query->where(DB::raw('LOWER(status)'), 'ongoing')
                      ->orWhere(DB::raw('LOWER(status)'), 'pending')
                      ->orWhere(DB::raw('LOWER(status)'), 'approved')
                      ->orWhere(DB::raw('LOWER(status)'), 'disbursed');
            })
            ->count();
            
        // Total loan amount for active loans - case insensitive
        $totalLoanAmount = Loan::where('member_id', $user->member_id)
            ->where(function($query) {
                $query->where(DB::raw('LOWER(status)'), 'ongoing')
                      ->orWhere(DB::raw('LOWER(status)'), 'pending')
                      ->orWhere(DB::raw('LOWER(status)'), 'approved')
                      ->orWhere(DB::raw('LOWER(status)'), 'disbursed');
            })
            ->sum('amount');

        // Calculate delinquency rate - CASE INSENSITIVE
        $totalLoans = Loan::where('member_id', $user->member_id)->count();
        $delinquentLoans = Loan::where('member_id', $user->member_id)
            ->where(DB::raw('LOWER(status)'), 'overdue')
            ->count();
        
        $delinquencyRate = $totalLoans > 0 ? ($delinquentLoans / $totalLoans) * 100 : 0;

        // Format join date
        $joinDate = $member->join_date ? Carbon::parse($member->join_date)->format('F j, Y') : 'Not specified';
        
        // Get share capital like in admin controller - using the accounts relationship
        $shareCapital = $member->accounts->first() ? $member->accounts->first()->balance : 0;
        
        // Get user email
        $email = $user->email;
        
        return Inertia::render('member/overview', [
            'recentTransactions' => $recentTransactions,
            'currentLoans' => $currentLoans,
            'statistics' => [
                'total_transactions' => $totalTransactions,
                'total_amount' => (float) $totalTransactionAmount,
                'active_loans' => $activeLoansCount,
                'total_loan_amount' => (float) $totalLoanAmount,
                'delinquency_rate' => round($delinquencyRate, 2),
            ],
            'member' => [
                'first_name' => $member->first_name,
                'middle_name' => $member->middle_name,
                'last_name' => $member->last_name,
                'suffix' => $member->suffix,
                'full_name' => trim(
                    $member->first_name . ' ' . 
                    ($member->middle_name ? $member->middle_name . ' ' : '') . 
                    $member->last_name . 
                    ($member->suffix ? ' ' . $member->suffix : '')
                ),
                'contact_num' => $member->contact_num,
                'status' => $member->status,
                'join_date' => $joinDate,
                'id_coop' => $member->id_coop,
                'email' => $email,
                'share_capital' => (float) $shareCapital,
                'delinquency_rate' => round($delinquencyRate, 2),
            ],
        ]);
    }
}