<?php

namespace App\Http\Controllers\UserInterface\Teller;

use Inertia\Inertia;
use App\Models\Transaction;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TellerTransactionsController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        // Get all transactions for the logged-in teller
        $transactions = Transaction::with(['member'])
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($transaction) {
                // Get member full name
                $member = $transaction->member;
                $fullName = $member->first_name;
                if ($member->middle_name) {
                    $fullName .= ' ' . $member->middle_name;
                }
                $fullName .= ' ' . $member->last_name;
                if ($member->suffix) {
                    $fullName .= ' ' . $member->suffix;
                }
                
                // Format dates
                $createdAt = Carbon::parse($transaction->created_at);
                
                return [
                    'id' => $transaction->id,
                    'type' => $transaction->type,
                    'date' => $createdAt->format('F j, Y \\· g:i A'),
                    'member' => $fullName,
                    'amount' => '₱ ' . number_format($transaction->amount, 2),
                    'raw_amount' => (float) $transaction->amount, 
                    'created_at' => $createdAt->toISOString(),
                ];
            });

        // Define transaction types directly
        $transactionTypes = [
            'Share Capital Contribution',
            'Loan Disbursement', 
            'Loan Payment',
            'Dividend Reinvestment',
            'Dividend Credit'
        ];

        return Inertia::render('teller/transactions', [
            'transactions' => $transactions,
            'transactionTypes' => $transactionTypes,
        ]);
    }
}