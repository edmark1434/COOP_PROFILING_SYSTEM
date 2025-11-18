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
                    'accounts' // Get accounts for share capital and status
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
            // Assuming the first account or you can filter by type
            $shareCapitalAccount = $loan->member->accounts->first();
            $loanData['member']['share_capital'] = $shareCapitalAccount->balance;
            $loanData['member']['account_status'] = $shareCapitalAccount->status;
        } else {
            $loanData['member']['share_capital'] = null;
            $loanData['member']['account_status'] = null;
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
