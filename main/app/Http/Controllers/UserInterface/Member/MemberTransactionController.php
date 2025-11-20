<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\Transaction;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

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
        
        // Get filter parameters with defaults
        $search = $request->input('search', '');
        $orderBy = $request->input('order_by', 'created_at');
        $orderDirection = $request->input('order_direction', 'desc');
        $type = $request->input('type', '');
        $dateFrom = $request->input('date_from', '');
        $dateTo = $request->input('date_to', '');
        $perPage = $request->input('per_page', 10);
        
        // Build query
        $query = Transaction::where('member_id', $member->id)
                    ->with(['user', 'member']);
        
        // Apply search filter
        if ($search) {
            $query->where(function($q) use ($search) {
                $q->where('type', 'LIKE', "%{$search}%")
                  ->orWhere('ref_no', 'LIKE', "%{$search}%")
                  ->orWhere('amount', 'LIKE', "%{$search}%")
                  ->orWhereHas('member', function($q) use ($search) {
                      $q->where('first_name', 'LIKE', "%{$search}%")
                        ->orWhere('middle_name', 'LIKE', "%{$search}%")
                        ->orWhere('last_name', 'LIKE', "%{$search}%");
                  });
            });
        }
        
        // Apply type filter
        if ($type && in_array($type, Transaction::TYPES)) {
            $query->where('type', $type);
        }
        
        // Apply date range filter
        if ($dateFrom) {
            $query->whereDate('created_at', '>=', $dateFrom);
        }
        
        if ($dateTo) {
            $query->whereDate('created_at', '<=', $dateTo);
        }
        
        // Apply ordering
        $allowedOrderColumns = ['type', 'amount', 'created_at', 'ref_no'];
        $orderBy = in_array($orderBy, $allowedOrderColumns) ? $orderBy : 'created_at';
        $orderDirection = in_array(strtolower($orderDirection), ['asc', 'desc']) ? $orderDirection : 'desc';
        
        $query->orderBy($orderBy, $orderDirection);
        
        // Get paginated transactions
        $paginator = $query->paginate($perPage);
        
        // Transform transactions
        $transactions = $paginator->through(function ($transaction) {
            $date = Carbon::parse($transaction->created_at);
            
            return [
                'id' => $transaction->id,
                'ref_no' => $transaction->ref_no,
                'type' => $transaction->type,
                'amount' => (float) $transaction->amount,
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

        // Get transaction summary stats
        $summary = $this->getTransactionSummary($member->id, $dateFrom, $dateTo, $type);

        return Inertia::render('member/my-transactions', [
            'transactions' => $transactions,
            'filters' => [
                'search' => $search,
                'order_by' => $orderBy,
                'order_direction' => $orderDirection,
                'type' => $type,
                'date_from' => $dateFrom,
                'date_to' => $dateTo,
                'per_page' => $perPage,
            ],
            'summary' => $summary,
            'transaction_types' => Transaction::TYPES,
        ]);
    }

    /**
     * Get transaction summary statistics
     */
    private function getTransactionSummary($memberId, $dateFrom = null, $dateTo = null, $type = null)
    {
        $query = Transaction::where('member_id', $memberId);
        
        // Apply same filters as main query
        if ($dateFrom) {
            $query->whereDate('created_at', '>=', $dateFrom);
        }
        
        if ($dateTo) {
            $query->whereDate('created_at', '<=', $dateTo);
        }
        
        if ($type && in_array($type, Transaction::TYPES)) {
            $query->where('type', $type);
        }
        
        return [
            'total_transactions' => $query->count(),
            'total_amount' => (float) $query->sum('amount'),
            'average_amount' => (float) $query->avg('amount') ?? 0,
            'type_breakdown' => $query->clone()
                ->select('type', DB::raw('COUNT(*) as count'), DB::raw('SUM(amount) as total'))
                ->groupBy('type')
                ->get()
                ->mapWithKeys(function ($item) {
                    return [$item->type => [
                        'count' => $item->count,
                        'total' => (float) $item->total
                    ]];
                })->toArray(),
        ];
    }

    /**
     * Export transactions to CSV
     */
    public function export(Request $request)
    {
        $member = auth()->user()->member;
        
        if (!$member) {
            return redirect()->back()->with('error', 'Member profile not found.');
        }
        
        // Apply same filters as index method
        $search = $request->input('search', '');
        $type = $request->input('type', '');
        $dateFrom = $request->input('date_from', '');
        $dateTo = $request->input('date_to', '');
        
        $query = Transaction::where('member_id', $member->id)
                    ->with(['user', 'member']);
        
        // Apply filters (same logic as index)
        if ($search) {
            $query->where(function($q) use ($search) {
                $q->where('type', 'LIKE', "%{$search}%")
                  ->orWhere('ref_no', 'LIKE', "%{$search}%")
                  ->orWhere('amount', 'LIKE', "%{$search}%");
            });
        }
        
        if ($type && in_array($type, Transaction::TYPES)) {
            $query->where('type', $type);
        }
        
        if ($dateFrom) {
            $query->whereDate('created_at', '>=', $dateFrom);
        }
        
        if ($dateTo) {
            $query->whereDate('created_at', '<=', $dateTo);
        }
        
        $transactions = $query->orderBy('created_at', 'desc')->get();
        
        $fileName = 'transactions-' . date('Y-m-d') . '.csv';
        
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $fileName . '"',
        ];
        
        $callback = function() use ($transactions) {
            $file = fopen('php://output', 'w');
            
            // Add CSV headers
            fputcsv($file, ['Date', 'Reference No', 'Type', 'Amount', 'Processed By']);
            
            // Add data rows
            foreach ($transactions as $transaction) {
                fputcsv($file, [
                    $transaction->created_at->format('Y-m-d H:i:s'),
                    $transaction->ref_no,
                    $transaction->type,
                    $transaction->amount,
                    $transaction->user->name ?? 'System'
                ]);
            }
            
            fclose($file);
        };
        
        return response()->stream($callback, 200, $headers);
    }
}