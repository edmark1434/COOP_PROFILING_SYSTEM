<?php

namespace App\Http\Controllers\UserInterface\Admin;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\Loan;
use App\Models\Transaction;
use App\Models\Account;
use App\Http\Controllers\Controller;

class AdminOverviewController extends Controller
{
    public function index()
    {
        $inactiveStatus = ['PAID','REJECTED','PENDING'];
        //members
        $memberCount = Member::count();
        $newMembersToday = Member::whereDate('join_date',today())->count();
        //loans
        $loans = Loan::WhereNotIn('status',$inactiveStatus)->with(['member','purpose'])->get();
        $loanCount = count($loans);
        $newLoanToday = Loan::whereNotIn('status',$inactiveStatus)->whereDate('created_at',today())->count();
        //transactions
        $transactions = Transaction::with(['member','user'])->get();
        $transactionCount = count($transactions);
        $newTransactionToday = Transaction::whereDate('created_at',today())->count();
        //share capital
        $shareCapital = Account::where('type','EQUITY')->sum('balance');
        $newShareCapitalToday = Transaction::where('type','SHARE_CAPITAL_CONTRIBUTION')->whereDate('created_at','<=',today())->count();
        //return to interface overview
        return Inertia::render('admin/overview',[
            'memberCount' => $memberCount,
            'loanCount' => $loanCount,
            'transactionCount' => $transactionCount,
            'loans' => $loans,
            'shareCapital' => $shareCapital,
            'transactions' => $transactions,
            'newMembersToday' => $newMembersToday,
            'newLoanToday' => $newLoanToday,
            'newTransactionToday' => $newTransactionToday,
            'newShareCapitalToday' => $newShareCapitalToday,
        ]);
    }   
}
