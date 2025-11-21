<?php

namespace App\Http\Controllers\UserInterface\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\CommonLogic;

class AdminStaffController extends Controller
{
    public function index()
    {
        $id = auth()->id(); // authenticated user ID

        // ---- Base staff query (reusable) ----
        $baseQuery = User::where('is_member', false)
            ->where('status', 'Active')       // Make sure staff is active
            ->where('id', '!=', $id)          // Exclude authenticated user
            ->where(function ($query) {
                $query->where('is_teller', true)
                    ->orWhere('is_loan_officer', true)
                    ->orWhere('is_admin', true);
            });

        // Get all staff
        $staff = $baseQuery->get();

        // Sort by name ascending
        $nameAsc = (clone $baseQuery)
            ->orderBy('name', 'asc')
            ->get();

        // Sort by name descending
        $nameDesc = (clone $baseQuery)
            ->orderBy('name', 'desc')
            ->get();

        // Sort by role priority ascending
        $typeAsc = (clone $baseQuery)
            ->get()
            ->sortBy(fn($user) => $this->getRolePriority($user))
            ->values();

        // Sort by role priority descending
        $typeDesc = (clone $baseQuery)
            ->get()
            ->sortByDesc(fn($user) => $this->getRolePriority($user))
            ->values();

        // Sort by email verification (date added)
        $dateAsc = (clone $baseQuery)
            ->orderBy('email_verified_at', 'asc')
            ->get();

        $dateDesc = (clone $baseQuery)
            ->orderBy('email_verified_at', 'desc')
            ->get();

        return Inertia::render('admin/staff', [
            'staff' => $staff,
            'nameAsc' => $nameAsc,
            'nameDesc' => $nameDesc,
            'typeAsc' => $typeAsc,
            'typeDesc' => $typeDesc,
            'dateAsc' => $dateAsc,
            'dateDesc' => $dateDesc,
        ]);
    }

    private function getRolePriority(User $user)
    {
        if ($user->is_loan_officer) return 2;
        if ($user->is_teller) return 1;
        return 0;
    }
    public function viewStaffId($id)
    {
        $user = User::with('auditLogs')->find($id);
        if(!$user) return redirect()->route('admin.staff');
        $role = match(true) {
            $user->is_admin => 'admin',
            $user->is_member => 'member',
            $user->is_teller => 'teller',
            $user->is_loan_officer => 'loan-officer',
            default => null,
        };
        if(!in_array($role,['admin','teller','loan-officer'])){
            return redirect()->route('admin.staff');
        }
        // Eager load audit logs
        $user->load('auditLogs');
        session(['changeRoleId'=>$user->id]);
        // Sort audit logs for frontend
        $userAuditLogsTypeAsc = $user->auditLogs->sortBy('type')->values();
        $userAuditLogsTypeDesc = $user->auditLogs->sortByDesc('type')->values();
        $userAuditLogsDateAsc = $user->auditLogs->sortBy('created_at')->values();
        $userAuditLogsDateDesc = $user->auditLogs->sortByDesc('created_at')->values();
        $initials = CommonLogic::getInitials($user->name);
        return Inertia::render('admin/staff-profile', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'type' => $role,
                'status' => $user->status ?? 'Active',
                'email' => $user->email,
                'created_at' => $user->created_at,
                'initial' => $initials
            ],
            'DateAsc' => $userAuditLogsDateAsc,
            'DateDesc' => $userAuditLogsDateDesc,
            'typeAsc' => $userAuditLogsTypeAsc,
            'typeDesc' => $userAuditLogsTypeDesc
        ]);
    }
    public function redirectChangeRole(){
        $id = session('changeRoleId');
        return redirect()->route('admin.staffRoleChangeForm.get', $id);
    }
    
    public function suspendStaff(){
        $id = session('changeRoleId');
        User::where('id', $id)->update([
            'status' => "Inactive"
        ]);
        return redirect()->route('admin.staff');
    }
}
