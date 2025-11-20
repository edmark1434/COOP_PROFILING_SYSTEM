<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Loan;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ActiveLoansController extends Controller
{
    public function index(Request $request)
    {
        // Get query parameters
        $search = $request->input('search', '');
        $orderBy = $request->input('orderBy', 'name');
        $orderDirection = $request->input('orderDirection', 'desc');

        // Start query for ONGOING loans
        $query = Loan::where('loans.status', 'Ongoing')
            ->with(['member', 'purpose']);

        // Apply search filter
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->whereHas('member', function ($memberQuery) use ($search) {
                    $memberQuery->where('first_name', 'like', "%{$search}%")
                        ->orWhere('middle_name', 'like', "%{$search}%")
                        ->orWhere('last_name', 'like', "%{$search}%")
                        ->orWhereRaw("CONCAT(first_name, ' ', last_name) like ?", ["%{$search}%"])
                        ->orWhereRaw("CONCAT(first_name, ' ', middle_name, ' ', last_name) like ?", ["%{$search}%"]);
                })->orWhereHas('purpose', function ($purposeQuery) use ($search) {
                    $purposeQuery->where('name', 'like', "%{$search}%");
                });
            });
        }

        // Apply sorting
        switch ($orderBy) {
            case 'name':
                $query->join('members', 'loans.member_id', '=', 'members.id')
                    ->orderBy('members.first_name', $orderDirection)
                    ->orderBy('members.last_name', $orderDirection)
                    ->select('loans.*');
                break;
            case 'date':
                $query->orderBy('loans.created_at', $orderDirection);
                break;
            case 'type':
                $query->join('loan_purposes', 'loans.purpose_id', '=', 'loan_purposes.id')
                    ->orderBy('loan_purposes.name', $orderDirection)
                    ->select('loans.*');
                break;
            case 'amount':
                $query->orderBy('loans.amount', $orderDirection);
                break;
            default:
                $query->orderBy('loans.created_at', 'desc');
        }

        // Get the loans
        $loans = $query->get();

        return Inertia::render('loan-officer/active-loans', [
            'loans' => $loans,
            'filters' => [
                'search' => $search,
                'orderBy' => $orderBy,
                'orderDirection' => $orderDirection,
            ],
        ]);
    }
}
