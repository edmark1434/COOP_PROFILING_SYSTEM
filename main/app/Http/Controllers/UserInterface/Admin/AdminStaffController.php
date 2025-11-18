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
        // Get staff
        $staff = User::where('is_member', false)
                    ->where('is_admin', false) 
                    ->where(function($query) {
                        $query->where('is_teller', true)
                              ->orWhere('is_loan_officer', true);
                    })->get();
        
        // Sort by name (ascending)
        $nameAsc = User::where('is_member', false)
                      ->where('is_admin', false)
                      ->where(function($query) {
                          $query->where('is_teller', true)
                                ->orWhere('is_loan_officer', true);
                      })->orderBy('name', 'asc')->get();
        
        // Sort by name (descending)
        $nameDesc = User::where('is_member', false)
                       ->where('is_admin', false)
                       ->where(function($query) {
                           $query->where('is_teller', true)
                                 ->orWhere('is_loan_officer', true);
                       })->orderBy('name', 'desc')->get();
        
        // Sort by role type
        $typeAsc = User::where('is_member', false)
                      ->where('is_admin', false)
                      ->where(function($query) {
                          $query->where('is_teller', true)
                                ->orWhere('is_loan_officer', true);
                      })->get()->sortBy(function($user) {
            return $this->getRolePriority($user);
        });
        
        $typeDesc = User::where('is_member', false)
                       ->where('is_admin', false)
                       ->where(function($query) {
                           $query->where('is_teller', true)
                                 ->orWhere('is_loan_officer', true);
                       })->get()->sortByDesc(function($user) {
            return $this->getRolePriority($user);
        });
        
        // Sort by date
        $dateAsc = User::where('is_member', false)
                      ->where('is_admin', false)
                      ->where(function($query) {
                          $query->where('is_teller', true)
                                ->orWhere('is_loan_officer', true);
                      })->orderBy('email_verified_at', 'asc')->get();
        
        $dateDesc = User::where('is_member', false)
                       ->where('is_admin', false)
                       ->where(function($query) {
                           $query->where('is_teller', true)
                                 ->orWhere('is_loan_officer', true);
                       })->orderBy('email_verified_at', 'desc')->get();

        return Inertia::render('admin/staff', [
            'staff' => $staff,
            'nameAsc' => $nameAsc,
            'nameDesc' => $nameDesc,
            'typeAsc' => $typeAsc->values(),
            'typeDesc' => $typeDesc->values(),
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
}