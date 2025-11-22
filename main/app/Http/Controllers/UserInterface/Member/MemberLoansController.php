<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CommonLogic;
use App\Models\Loan;
use App\Models\Member;
use App\Models\AuditLog;
use App\Models\Installment;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MemberLoansController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if (!$user->member_id) {
            return Inertia::render('member/my-loans', [
                'currentLoans' => [],
                'previousLoans' => [],
            ]);
        }

        $member = Member::find($user->member_id);
        if (!$member) {
            return Inertia::render('member/my-loans', [
                'currentLoans' => [],
                'previousLoans' => [],
            ]);
        }

        // Current loans
        $currentLoans = Loan::with('purpose')
            ->where('member_id', $member->id)
            ->whereIn(DB::raw('LOWER(status)'), [
                'ongoing', 'pending', 'approved', 'disbursed'
            ])
            ->orderByDesc('id')
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
                    'type' => $loan->purpose->name ?? 'General Loan',
                    'remarks' => $loan->remarks,
                    'application_date' => $loan->created_at?->format('F j, Y'),
                ];
            });

        // Previous loans
        $previousLoans = Loan::with('purpose')
            ->where('member_id', $member->id)
            ->whereIn(DB::raw('LOWER(status)'), [
                'paid', 'rejected', 'overdue',
            ])
            ->orderByDesc('id')
            ->get()
            ->map(function ($loan) {
                return [
                    'id' => $loan->id,
                    'type' => $loan->purpose->name ?? 'General Loan',
                    'amount' => number_format($loan->amount, 2),
                    'application_date' => $loan->created_at?->format('F j, Y'),
                ];
            });

        return Inertia::render('member/my-loans', [
            'currentLoans' => $currentLoans,
            'previousLoans' => $previousLoans,
        ]);
    }

    public function loanDetails($id)
    {
        $user = Auth::user();

        if (!$user->member_id) {
            return redirect()->route('member.my-loans')
                ->with('error', 'Member profile not found.');
        }

        $member = Member::find($user->member_id);

        if (!$member) {
            return redirect()->route('member.my-loans')
                ->with('error', 'Member profile not found.');
        }

        // Fetch loan
        $loan = Loan::with('purpose')->find($id);

        if (!$loan) {
            return redirect()->route('member.my-loans')
                ->with('error', 'Loan not found.');
        }

        // Security check — ensure the loan is theirs
        if ((int)$loan->member_id !== (int)$member->id) {
            return redirect()->route('member.my-loans')
                ->with('error', 'You do not have permission to view this loan.');
        }

        // Member full name + initials
        $memberName = trim(
            ($member->first_name . ' ' . ($member->middle_name ?? '') . ' ' . $member->last_name . ' ' . ($member->suffix ?? ''))
        );

        $initial = CommonLogic::getInitials($memberName);

        // Installments
        $installments = Installment::where('loan_id', $loan->id)->get();
        $installmentPaid = $installments->where('status', 'Paid')->values();

        $installmentPaidSum = $installmentPaid->sum('amount');

        $installmentDateAsc = Installment::where('loan_id', $loan->id)->orderBy('due_date')->get();
        $installmentDateDesc = Installment::where('loan_id', $loan->id)->orderBy('due_date', 'desc')->get();

        // Next installment (or last if fully paid)
        $newDueDate = Installment::where('loan_id', $loan->id)
            ->where('status', '!=', 'Paid')
            ->orderBy('due_date')
            ->first();
        if (!$newDueDate) {
            $newDueDate = Installment::where('loan_id', $loan->id)
                ->orderBy('due_date', 'desc')
                ->first();
        }

        // Transactions - remove loan_id filter since it doesn't exist
        $transactions = Transaction::where('member_id', $member->id)
            ->get();

        $transactionDateAsc = Transaction::where('member_id', $member->id)
            ->orderBy('created_at')
            ->get();

        $transactionDateDesc = Transaction::where('member_id', $member->id)
            ->orderBy('created_at', 'desc')
            ->get();

        $transactionTypeAsc = Transaction::where('member_id', $member->id)
            ->orderBy('type')
            ->get();

        $transactionTypeDesc = Transaction::where('member_id', $member->id)
            ->orderBy('type', 'desc')
            ->get();

        // Audit log
        $auditLogLoan = AuditLog::whereIn('type', ['Loan Approved', 'Loan Rejected'])
            ->where('description', 'LIKE', '%Loan ID: '.$id.'%')
            ->with('user')
            ->first();

        $processBy = $auditLogLoan?->user?->name ?? "Staff";

        return Inertia::render('member/loan-view', [
            'prop' => [
                'id' => $loan->id,
                'name' => $memberName,
                'memId' => $member->id,
                'memStatus' => $member->accounts->first()->status ?? 'Unknown'
            ],
            'loanDetail' => $loan,
            'member' => [
                'id' => $member->id,
                'shareCapital' => $member->accounts->first()->balance ?? 0,
                'dateJoined' => $member->join_date,
                'email' => $user->email ?? '',
                'contact' => $member->contact_num,
                'status' => $member->accounts->first()->status ?? 'Unknown',
                'initial' => $initial,
                'processBy' => $processBy,
            ],
            'installments' => $installments,
            'installmentPaid' => $installmentPaid,
            'installmentPaidSum' => $installmentPaidSum,
            'installmentDateAsc' => $installmentDateAsc,
            'installmentDateDesc' => $installmentDateDesc,
            'transactions' => $transactions,
            'transactionDateAsc' => $transactionDateAsc,
            'transactionDateDesc' => $transactionDateDesc,
            'transactionTypeAsc' => $transactionTypeAsc,
            'transactionTypeDesc' => $transactionTypeDesc,
            'newDueDate' => $newDueDate
        ]);
    }
}
