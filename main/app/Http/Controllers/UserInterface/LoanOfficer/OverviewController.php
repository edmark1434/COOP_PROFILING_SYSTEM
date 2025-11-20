<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Loan;
use Illuminate\Http\Request;
use Carbon\Carbon;

class OverviewController extends Controller
{
    public function index()
    {
        // Get start of current week (Monday)
        $startOfWeek = Carbon::now()->startOfWeek();

        // Get loans for each status with member and purpose relationships
        $pendingLoans = Loan::where('status', 'Pending')
            ->with(['member', 'purpose'])
            ->get();

        $approvedLoans = Loan::where('status', 'Approved')
            ->with(['member', 'purpose'])
            ->get();

        $ongoingLoans = Loan::where('status', 'Ongoing')
            ->with(['member', 'purpose'])
            ->get();

        $overdueLoans = Loan::where('status', 'Overdue')
            ->with(['member', 'purpose'])
            ->get();

        // Count loans created this week for each status
        $pendingThisWeek = Loan::where('status', 'Pending')
            ->where('created_at', '>=', $startOfWeek)
            ->count();

        $approvedThisWeek = Loan::where('status', 'Approved')
            ->where('created_at', '>=', $startOfWeek)
            ->count();

        $ongoingThisWeek = Loan::where('status', 'Ongoing')
            ->where('created_at', '>=', $startOfWeek)
            ->count();

        $overdueThisWeek = Loan::where('status', 'Overdue')
            ->where('created_at', '>=', $startOfWeek)
            ->count();

        // Prepare stats for overview cards
        $stats = [
            'pending' => [
                'count' => $pendingLoans->count(),
                'thisWeek' => $pendingThisWeek
            ],
            'approved' => [
                'count' => $approvedLoans->count(),
                'thisWeek' => $approvedThisWeek
            ],
            'ongoing' => [
                'count' => $ongoingLoans->count(),
                'thisWeek' => $ongoingThisWeek
            ],
            'overdue' => [
                'count' => $overdueLoans->count(),
                'thisWeek' => $overdueThisWeek
            ],
        ];

        // Get recent loan applications (PENDING status)
        $recentApplications = Loan::where('status', 'Pending')
            ->with(['member', 'purpose'])
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        // Get active loans (ONGOING status)
        $activeLoans = Loan::where('status', 'Ongoing')
            ->with(['member', 'purpose'])
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        return Inertia::render('loan-officer/overview', [
            'stats' => $stats,
            'recentApplications' => $recentApplications,
            'activeLoans' => $activeLoans,
        ]);
    }
}
