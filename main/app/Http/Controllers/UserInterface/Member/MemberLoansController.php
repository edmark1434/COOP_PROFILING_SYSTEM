<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Loan;
use App\Models\Member;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
        
        // Get current loans - case insensitive check
        $currentLoans = Loan::with(['purpose'])
            ->where('member_id', $user->member_id)
            ->where(function($query) {
                $query->where(DB::raw('LOWER(status)'), 'ongoing')
                      ->orWhere(DB::raw('LOWER(status)'), 'pending')
                      ->orWhere(DB::raw('LOWER(status)'), 'approved')
                      ->orWhere(DB::raw('LOWER(status)'), 'disbursed');
            })
            ->orderBy('id', 'desc')
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
                    'purpose' => [
                        'name' => $loan->purpose->name ?? 'General Loan',
                    ],
                    'type' => $loan->purpose->name ?? 'General Loan',
                    'remarks' => $loan->remarks,
                    'application_date' => 'Recent',
                ];
            });

        // Get previous loans - case insensitive check
        $previousLoans = Loan::with(['purpose'])
            ->where('member_id', $user->member_id)
            ->where(function($query) {
                $query->where(DB::raw('LOWER(status)'), 'paid')
                      ->orWhere(DB::raw('LOWER(status)'), 'rejected')
                      ->orWhere(DB::raw('LOWER(status)'), 'overdue');
            })
            ->orderBy('id', 'desc')
            ->get()
            ->map(function ($loan) {
                return [
                    'id' => $loan->id,
                    'type' => $loan->purpose->name ?? 'General Loan',
                    'amount' => number_format($loan->amount, 2),
                    'application_date' => $loan->created_at ? $loan->created_at->format('F j, Y') : 'Date not available',
                ];
            });

        return Inertia::render('member/my-loans', [
            'currentLoans' => $currentLoans,
            'previousLoans' => $previousLoans,
        ]);
    }
}