<?php

namespace App\Http\Controllers\UserInterface\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\Loan;
use App\Models\Transaction;
use App\Models\Account;
use App\Models\User;
use App\Models\AuditLog;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CommonLogic;
use Illuminate\Support\Facades\DB;

class AdminLoanController extends Controller
{
    public function index()
    {
        // Get loans grouped by status (case sensitive)
        $ongoing = Loan::where(DB::raw('LOWER(status)'), 'ongoing')->with(['member', 'purpose'])->get();
        $disbursed = Loan::where(DB::raw('LOWER(status)'), 'disbursed')->with(['member', 'purpose'])->get();
        $overdue = Loan::where(DB::raw('LOWER(status)'), 'overdue')->with(['member', 'purpose'])->get();
        $paid = Loan::where(DB::raw('LOWER(status)'), 'paid')->with(['member', 'purpose'])->get();
        $pending = Loan::where(DB::raw('LOWER(status)'), 'pending')->with(['member', 'purpose'])->get();
        $approved = Loan::where(DB::raw('LOWER(status)'), 'approved')->with(['member', 'purpose'])->get();
        $rejected = Loan::where(DB::raw('LOWER(status)'), 'rejected')->with(['member', 'purpose'])->get();

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
    public function loanDetails($id){
        $loanDetail = Loan::with(['purpose'])->find($id);
        if(!$loanDetail) return redirect()->route('admin.loans');

        $member = Member::with(['accounts','user'])->find($loanDetail->member_id);
        $user = User::where('member_id',$member->id)->first();
        $auditLogLoan = AuditLog::whereIn('type', ['Loan Approved', 'Loan Rejected'])
        ->where('description', 'LIKE', '%Loan ID: ' . $id . '%')
        ->with(['user'])
        ->get();
        $processBy = $auditLogLoan->first()?->user?->name ?? "Staff";

        $name = $member->first_name . " " . $member->last_name;
        $initial = CommonLogic::getInitials($name);
        return Inertia::render('admin/loan-view', [
            'loanId' => [
                'id' => $loanDetail->id,
            ],
            'loanDetail' => $loanDetail,
            'member'=> [
                'id' => $member->id,
                'shareCapital' => $member->accounts->first()->balance,
                'dateJoined' => $member->join_date,
                'email' => $user->email,
                'contact' => $member->contact_num,
                'status' => $member->accounts->first()->status,
                'initial' => $initial,
                'processBy' => $processBy
            ],
        ]);
    }
}
