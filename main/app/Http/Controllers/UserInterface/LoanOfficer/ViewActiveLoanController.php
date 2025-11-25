<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CommonLogic;
use App\Models\Loan;
use App\Models\Member;
use App\Models\User;
use App\Models\AuditLog;
use App\Models\Installment;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ViewActiveLoanController extends Controller
{
    public function loanDetails($id)
    {
        $loanDetail = Loan::with(['purpose'])->find($id);

        if (!$loanDetail) {
            return redirect()->route('loan-officer.active-loans');
        }

        // Only allow viewing ongoing loans
        if (strtolower($loanDetail->status) !== 'ongoing') {
            return redirect()->route('loan-officer.active-loans')
                ->with('error', 'You can only view ongoing loans.');
        }

        $member = Member::with(['accounts', 'user'])->find($loanDetail->member_id);

        if (!$member) {
            return redirect()->route('loan-officer.active-loans');
        }

        $user = User::where('member_id', $member->id)->first();

        $auditLogLoan = AuditLog::whereIn('type', ['Loan Approved', 'Loan Rejected'])
            ->where('description', 'LIKE', '%Loan ID: ' . $id . '%')
            ->with(['user'])
            ->get();

        $processBy = $auditLogLoan->first()?->user?->name ?? "Staff";

        $name = $member->first_name . " " . $member->last_name;
        $initial = CommonLogic::getInitials($name);

        $installment = Installment::where('loan_id', $loanDetail->id)->get();

        // Sorted Installments
        $installmentDateAsc = Installment::where('loan_id', $loanDetail->id)
            ->orderBy('due_date', 'asc')
            ->get();

        $installmentDateDesc = Installment::where('loan_id', $loanDetail->id)
            ->orderBy('due_date', 'desc')
            ->get();

        // Get next unpaid installment
        $newDueDate = Installment::where('loan_id', $loanDetail->id)
            ->where('status', '!=', 'Paid')
            ->orderBy('due_date', 'asc')
            ->first();

        // If no unpaid installments, get the last one
        if (!$newDueDate) {
            $newDueDate = Installment::where('loan_id', $loanDetail->id)
                ->orderBy('due_date', 'desc')
                ->first();
        }

        // Paid Installments - Convert to array with values()
        $installmentPaid = $installment->where('status', 'Paid')->values();
        $installmentPaidSum = $installmentPaid->sum('amount');

        // TRANSACTIONS
        $transaction = Transaction::where('member_id', $loanDetail->member_id)->get();

        // Sorted Transactions
        $transactionDateAsc = Transaction::where('member_id', $loanDetail->member_id)
            ->orderBy('created_at', 'asc')
            ->get();

        $transactionDateDesc = Transaction::where('member_id', $loanDetail->member_id)
            ->orderBy('created_at', 'desc')
            ->get();

        $transactionTypeAsc = Transaction::where('member_id', $loanDetail->member_id)
            ->orderBy('type', 'asc')
            ->get();

        $transactionTypeDesc = Transaction::where('member_id', $loanDetail->member_id)
            ->orderBy('type', 'desc')
            ->get();

        $memberName = trim(
            ($member->first_name ?? "") . " " .
            ($member->middle_name ?? "") . " " .
            ($member->last_name ?? "") . " " .
            ($member->suffix ?? "")
        );

        // FIX: Use the correct Inertia render path
        return Inertia::render('loan-officer/loan-view-active', [
            'prop' => [
                'id' => $loanDetail->id,
                'name' => $memberName,
                'memId' => $member->id,
                'memStatus' => $member->status ?? 'Unknown'
            ],
            'loanDetail' => $loanDetail,
            'member' => [
                'id' => $member->id,
                'shareCapital' => $member->accounts->first()->balance ?? 0,
                'dateJoined' => $member->join_date,
                'email' => $user->email ?? '',
                'contact' => $member->contact_num,
                'status' => $member->status ?? 'Unknown',
                'initial' => $initial,
                'processBy' => $processBy,
            ],
            'installments' => $installment,
            'installmentPaid' => $installmentPaid,
            'installmentPaidSum' => $installmentPaidSum,
            'installmentDateAsc' => $installmentDateAsc,
            'installmentDateDesc' => $installmentDateDesc,
            'transactions' => $transaction,
            'transactionDateAsc' => $transactionDateAsc,
            'transactionDateDesc' => $transactionDateDesc,
            'transactionTypeAsc' => $transactionTypeAsc,
            'transactionTypeDesc' => $transactionTypeDesc,
            'newDueDate' => $newDueDate
        ]);
    }
}
