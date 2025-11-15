<?php

namespace App\Http\Controllers\UserInterface\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Loan;
class AdminAccountsController extends Controller
{
    public function index()
    {
        $accounts = Account::with(['member'])->where('member_id',null)->get();
        $ShareCapitalAccountsBalance = Account::with(['member'])->whereNotNull('member_id')->where('type','Equity')->sum('balance');
        foreach ($accounts as $acc) {
            match($acc->name) {
                'Share Capital Total' => $acc->balance = $ShareCapitalAccountsBalance,
                'Loan Receivable' => $acc->balance ?? 0,
                'Interest Income' => $acc->balance ?? 0,
                'Dividends Payable' => $acc->balance ?? 0,
                'Retained Earnings' => $acc->balance ?? 0, // to be computed
                'Coop Cash' => $acc->balance ?? 0,
                default => null,
            };
        }

        return Inertia::render('admin/accounts', [
            'accounts' => $accounts,
        ]);
    }
}