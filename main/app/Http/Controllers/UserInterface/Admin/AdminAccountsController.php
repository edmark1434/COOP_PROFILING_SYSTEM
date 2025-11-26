<?php

namespace App\Http\Controllers\UserInterface\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Transaction;
use App\Models\Loan;
class AdminAccountsController extends Controller
{
    public function index()
    {
        $accounts = Account::with(['member'])->where('member_id',null)->where('name', '!=', 'Retained Earnings')->get();
        $ShareCapitalAccountsBalance = Account::with(['member'])->whereNotNull('member_id')->where('type','Equity')->sum('balance');
        foreach ($accounts as $acc) {
            match($acc->name) {
                'Share Capital Total' => $acc->balance = $ShareCapitalAccountsBalance,
                'Loan Receivable' => $acc->balance ?? 0,
                'Interest Income' => $acc->balance ?? 0,
                'Dividends Payable' => $acc->balance ?? 0,
                // 'Retained Earnings' => $acc->balance ?? 0, // to be computed
                'Coop Cash' => $acc->balance ?? 0,
                default => null,
            };
        }

        return Inertia::render('admin/accounts', [
            'accounts' => $accounts,
        ]);
    }
    public function accountId($id)
    {
        $acc = Account::findOrFail($id);
        $type = $acc->name;
        $query = Transaction::with(['member', 'user'])->orderBy('created_at', 'desc');

        // ====================================================
        // 1. APPLY FILTERS BASED ON ACCOUNT ID (NO MAPPING YET)
        // ====================================================
        if ($id == 1) {
            // Share Capital Total
            $query->whereIn('type', [
                'Share Capital Contribution',
                'Dividend Reinvestment'
            ]);
        }

        if ($id == 2) {
            // Loan Receivable
            $query->whereIn('type', [
                'Loan Disbursement',
                'Loan Payment'
            ]);
        }

        if ($id == 3) {
            // Interest Income
            $query->where('type', 'Loan Payment'); // then apply 5% later
        }

        if ($id == 4) {
            // Dividends Payable
            $query->whereIn('type', [
                'Loan Payment',
                'Dividend Credit',
                'Dividend Reinvestment'
            ]);
        }
        // if ($id == 5) {
        //     // Retained Earnings → HIDE → no transactions
        //     $query->whereRaw('1 = 0'); // always empty
        // }
        if ($id == 6) {
            // Coop Cash
            $query->whereIn('type', [
                'Share Capital Contribution',
                'Loan Disbursement',
                'Loan Payment',
                'Dividend Credit',
            ]);
        }

        // ====================================================
        // 2. NOW GET THE FILTERED RESULTS
        // ====================================================
        $transactions = $query->get();

        // ====================================================
        // 3. APPLY THE FULL MEMBER/USER MAPPING
        // ====================================================
        $transactions = $transactions->map(function ($t) use ($id) {

            // Build full name
            $fullName = 'No member linked';
            $first = $t->member->first_name ?? '';
            $middle = $t->member->middle_name ?? '';
            $last = $t->member->last_name ?? '';
            $suffix = $t->member->suffix ?? '';

            if ($t->member) {
                $fullName = trim(implode(' ', array_filter([$first, $middle, $last, $suffix])));
            }
            // Calculate amount
            $amount = is_numeric($t->amount) ? (float)$t->amount : 0.00;
            return [
                'id' => $t->id,
                'type' => $t->type ?? 'UNKNOWN',
                'date' => $t->created_at ? date('c', strtotime($t->created_at)) : null,
                'amount' => $amount,

                'member' => [
                    'first_name' => $first,
                    'middle_name' => $middle,
                    'last_name' => $last,
                    'suffix' => $suffix,
                    'full_name' => $fullName,
                ],

                'user' => [
                    'name' => $t->user->name ?? 'System'
                ]
            ];
        });

        return Inertia::render('admin/account-view', [
            'transactions' => $transactions,
            'acc_id' => $id,
            'type' => $type
        ]);
    }
}
