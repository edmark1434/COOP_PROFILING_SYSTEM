<?php

namespace App\Http\Controllers\UserInterface\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Transaction;

class AdminTransactionsController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with(['member', 'user'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($t) {
                // Build full name from member fields
                $fullName = 'No member linked';
                $firstName = '';
                $middleName = '';
                $lastName = '';
                $suffix = '';

                if ($t->member) {
                    $firstName = $t->member->first_name ?? '';
                    $middleName = $t->member->middle_name ?? '';
                    $lastName = $t->member->last_name ?? '';
                    $suffix = $t->member->suffix ?? '';

                    // Build full name properly
                    $fullName = trim(implode(' ', [
                        $firstName,
                        $middleName,
                        $lastName,
                        $suffix
                    ]));
                }

                return [
                    'id' => $t->id,
                    'type' => $t->type ?? 'UNKNOWN',
                    'date' => $t->created_at
                        ? date('c', strtotime($t->created_at)) // ISO 8601 format
                        : null,
                    'amount' => is_numeric($t->amount) ? (float) $t->amount : 0.00,
                    'member' => [
                        'first_name' => $firstName,
                        'middle_name' => $middleName,
                        'last_name' => $lastName,
                        'suffix' => $suffix,
                        'full_name' => $fullName,
                    ],
                    'user' => [
                        'name' => $t->user->name ?? 'System',
                    ],
                ];
            });

        return Inertia::render('admin/transactions', [
            'transactions' => $transactions,
        ]);
    }
}