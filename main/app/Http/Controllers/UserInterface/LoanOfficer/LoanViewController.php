<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Loan;
use Illuminate\Http\Request;
use Carbon\Carbon;

class LoanViewController extends Controller
{
    public function show($id)
    {
        // Fetch the loan with its relationships including nested relationships
        $loan = Loan::with([
            'member' => function($query) {
                $query->with([
                    'user', // Get the user for email
                    'accounts' => function($query) {
                        $query->where('type', 'Equity')
                            ->orWhere('type', 'like', '%share capital%');
                    }
                ]);
            },
            'purpose'
        ])->findOrFail($id);

        // Transform the data to include account information
        $loanData = $loan->toArray();

        // Add user email to member data
        if ($loan->member->user) {
            $loanData['member']['email'] = $loan->member->user->email;
        } else {
            $loanData['member']['email'] = null;
        }

        // Add account data (share capital and status from Account model)
        if ($loan->member->accounts->isNotEmpty()) {
            // Use the first account (assuming it's filtered to share capital accounts)
            $shareCapitalAccount = $loan->member->accounts->first();

            // Ensure balance is properly cast to float and handle null
            $balance = $shareCapitalAccount->balance;

            // Convert to float, handling null/empty values
            if ($balance === null || $balance === '') {
                $loanData['member']['share_capital'] = 0.00;
            } else {
                $loanData['member']['share_capital'] = (float) $balance;
            }

            $loanData['member']['account_status'] = $shareCapitalAccount->status;
        } else {
            $loanData['member']['share_capital'] = 0.00;
            $loanData['member']['account_status'] = null;
        }

        // Calculate delinquency rate for the member
        // Formula: (number of overdue loans / total number of loans) * 100
        $totalLoans = Loan::where('member_id', $loan->member_id)->count();
        $overdueLoans = Loan::where('member_id', $loan->member_id)
            ->where('status', 'OVERDUE')
            ->count();

        if ($totalLoans > 0) {
            $loanData['member']['delinquency_rate'] = round(($overdueLoans / $totalLoans) * 100, 2);
        } else {
            $loanData['member']['delinquency_rate'] = 0;
        }

        return Inertia::render('loan-officer/loan-view', [
            'loan' => $loanData,
        ]);
    }

    public function approve($id)
    {
        $loan = Loan::findOrFail($id);

        // Update loan status to APPROVED
        $loan->update([
            'status' => 'APPROVED'
        ]);

        return redirect()->route('loan-officer.loan-applications')
            ->with('success', 'Loan approved successfully');
    }

}
