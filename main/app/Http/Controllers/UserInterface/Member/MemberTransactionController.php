<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\Transaction;
use Inertia\Inertia;
use Carbon\Carbon;

class MemberTransactionController extends Controller
{
    public function index(Request $request)
    {
        // Get current authenticated member
        $member = auth()->user()->member;
        
        if (!$member) {
            return redirect()->route('dashboard')
                ->with('error', 'Member profile not found.');
        }
        
        // Get filter parameters
        $search = $request->input('search', '');
        $orderBy = $request->input('order_by', 'date');
        $orderDirection = $request->input('order_direction', 'desc');
        
        // Build query
        $query = Transaction::where('member_id', $member->id)
                    ->with(['user', 'member']);
        
        // Apply search filter
        if ($search) {
            $query->where(function($q) use ($search) {
                $q->where('type', 'LIKE', "%{$search}%")
                  ->orWhere('ref_no', 'LIKE', "%{$search}%")
                  ->orWhere('amount', 'LIKE', "%{$search}%");
            });
        }
        
        // Apply ordering
        switch ($orderBy) {
            case 'type':
                $query->orderBy('type', $orderDirection);
                break;
            case 'amount':
                $query->orderBy('amount', $orderDirection);
                break;
            case 'date':
            default:
                $query->orderBy('created_at', $orderDirection);
                break;
        }
        
        // Get transactions
        $transactions = $query->get()->map(function ($transaction) {
            // Parse created_at properly
            $date = Carbon::parse($transaction->created_at);
            
            return [
                'id' => $transaction->id,
                'ref_no' => $transaction->ref_no,
                'type' => $transaction->type,
                'amount' => $transaction->amount,
                'created_at' => $date->format('F j, Y · g:i A'),
                'created_at_raw' => $transaction->created_at,
                'member' => [
                    'first_name' => $transaction->member->first_name,
                    'middle_name' => $transaction->member->middle_name ?? '',
                    'last_name' => $transaction->member->last_name,
                    'suffix' => $transaction->member->suffix ?? '',
                    'full_name' => trim(
                        $transaction->member->first_name . ' ' . 
                        ($transaction->member->middle_name ? $transaction->member->middle_name . ' ' : '') . 
                        $transaction->member->last_name . 
                        ($transaction->member->suffix ? ' ' . $transaction->member->suffix : '')
                    )
                ],
                'user' => $transaction->user ? [
                    'name' => $transaction->user->name
                ] : null
            ];
        });

        return Inertia::render('member/my-transactions', [
            'transactions' => $transactions,
            'filters' => [
                'search' => $search,
                'order_by' => $orderBy,
                'order_direction' => $orderDirection,
            ]
        ]);
    }
}