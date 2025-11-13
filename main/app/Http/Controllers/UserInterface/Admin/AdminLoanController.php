<?php

namespace App\Http\Controllers\UserInterface\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\Loan;
use App\Models\Transaction;
use App\Models\Account;
use App\Http\Controllers\Controller;

class AdminLoanController extends Controller
{
    public function index()
    {
        // Get loans grouped by status
        $ongoing = Loan::where('status', 'ONGOING')->with(['member', 'purpose'])->get();
        $disbursed = Loan::where('status', 'DISBURSED')->with(['member', 'purpose'])->get();
        $overdue = Loan::where('status', 'OVERDUE')->with(['member', 'purpose'])->get();
        $paid = Loan::where('status', 'PAID')->with(['member', 'purpose'])->get();
        $pending = Loan::where('status', 'PENDING')->with(['member', 'purpose'])->get();
        $approved = Loan::where('status', 'APPROVED')->with(['member', 'purpose'])->get();
        $rejected = Loan::where('status', 'REJECTED')->with(['member', 'purpose'])->get();

        // Format loans for display - keep the nested structure
        $loansByStatus = [
            'ongoing' => $ongoing,
            'disbursed' => $disbursed,
            'overdue' => $overdue,
            'paid' => $paid,
            'pending' => $pending,
            'approved' => $approved,
            'rejected' => $rejected,
        ];

        // Calculate total results for search display
        $totalResults = $ongoing->count() + $disbursed->count() + $overdue->count() +
            $paid->count() + $pending->count() + $approved->count() + $rejected->count();

        return Inertia::render('admin/loans', [
            'loansByStatus' => $loansByStatus,
            'totalResults' => $totalResults,
        ]);
    }
}
