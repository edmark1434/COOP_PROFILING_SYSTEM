<?php

namespace App\Http\Controllers\UserInterface\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Account;

class AdminAccountsController extends Controller
{
    public function index()
    {
        $accounts = Account::with(['member'])
            ->orderBy('type')
            ->orderBy('name')
            ->get()
            ->map(fn ($account) => [
                'id' => $account->id,
                'type' => $account->type ?? 'UNCATEGORIZED',
                'title' => $account->name ?? 'Untitled Account',
                'amount' => is_numeric($account->balance) ? (float) $account->balance : 0.00,
                'member_name' => $account->member->full_name ?? 'General Account',
            ]);

        return Inertia::render('admin/accounts', [
            'accounts' => $accounts,
        ]);
    }
}