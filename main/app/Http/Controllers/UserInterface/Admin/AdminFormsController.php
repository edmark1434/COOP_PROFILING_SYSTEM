<?php

namespace App\Http\Controllers\UserInterface\Admin;
use App\Http\Controllers\CommonLogic;
use App\Models\AuditLog;
use App\Models\BiometricData;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminFormsController extends Controller
{
    public function staffAddFormGet()
    {
        session()->forget('form');
        return Inertia::render('admin/forms/add-staff',[]);
    }
    public function staffAddFormPost(Request $request)
    {
        $user = User::query()->where('email', $request->email)->first();

        if ($user) {
            if ($user->is_teller || $user->is_loan_officer || $user->is_admin) {
                return back()->withErrors(['email' => 'This email already belongs to a staff account.']);
            }

            if ($user->name != $request->fullName) {
                return back()->withErrors(['fullName' => 'This name does not match with the account connected to the given email.']);
            }
        }

        $validated = $request->validate([
            'fullName' => 'required|string|min:1',
            'email' => 'required|string|email',
            'role' => 'required|string|min:1',
        ]);

        session()->put('form.type', 'add-staff');
        session()->put('form.data', $validated);
        return redirect()->route('admin.registerStaffFingerprint.get');
    }

    public function registerStaffFingerprintGet()
    {
        $name = session('form.data.fullName');
        $initials = CommonLogic::getInitials($name);
        return Inertia::render('admin/forms/register-staff-finger',[
            'staffName' => $name,
            'initials' => $initials,
        ]);
    }
    public function registerStaffFingerprintPost(Request $request)
    {
        $template = $request->input('template');
        session()->put('form.staff_fingerprint',$template);
        return redirect()->route('confirmStaff.get');
    }

    public function staffRoleChangeFormGet($id)
    {
        session()->forget('form');

        $staffRaw = User::query()
            ->select('name', 'is_teller', 'is_loan_officer', 'is_admin')
            ->findOrFail($id);

        $staff = [
            'name' => $staffRaw->name,
            'initials' => CommonLogic::getInitials($staffRaw->name),
            'role' => $staffRaw->is_admin ? 'Administrator' :
                    ($staffRaw->is_loan_officer ? 'Loan Officer' :
                    ($staffRaw->is_teller ? 'Teller' : '')),
        ];

        return Inertia::render('admin/forms/change-staff-role',[
            'staff' => $staff,
        ]);
    }
    public function staffRoleChangeFormPost(Request $request, $id)
    {
        $staff = User::query()->findOrFail($id);
        $pastRole = $staff->is_admin ? 'Administrator' :
            ($staff->is_loan_officer ? 'Loan Officer' :
                ($staff->is_teller ? 'Teller' : ''));

        if ($request->role == $pastRole) {
            return back()->withErrors(['role' => 'The role did not change.']);
        }

        $validated = $request->validate([
            'role' => 'required|string|min:1',
        ]);

        session()->put('form.type', 'change-staff-role');
        session()->put('form.data', $validated);
        session()->put('form.id', $id);
        return redirect()->route('confirmStaff.get');
    }

    public function staffAddFormSave()
    {
        $validated = session()->get('form.data');
        $user = User::query()->where('email', $validated['email'])->first();

        if ($user) {
            $user->update([
                'is_teller' => $validated['role'] == 'Teller',
                'is_loan_officer' => $validated['role'] == 'Loan Officer',
                'is_admin' => $validated['role'] == 'Administrator',
            ]);
        }
        else {
            $userForm = [
                'name' => $validated['fullName'],
                'email' => $validated['email'],
                'is_member' => false,
                'member_id' => null,
                'is_teller' => $validated['role'] == 'Teller',
                'is_loan_officer' => $validated['role'] == 'Loan Officer',
                'is_admin' => $validated['role'] == 'Administrator',
                'password' => Hash::make(fake()->password),
            ];

            User::query()->create($userForm);
            $user = User::query()->where('email', $validated['email'])->first();
        }

        // biometric data
        $biometric = [
            'user_id' => $user->id,
            'template' => session()->get('form.staff_fingerprint'),
        ];
        BiometricData::query()->create($biometric);

        // audit log
        $auditLog = [
            'type' => 'Staff Added',
            'description' => $validated['fullName'] . ' - ' . $validated['role'],
            'user_id' => auth()->id(),
        ];

        AuditLog::query()->create($auditLog);
        return redirect()->route('admin.staff');
    }

    public function staffRoleChangeFormSave()
    {
        $validated = session()->get('form.data');
        $id = session()->get('form.id');

        $staff = User::query()->findOrFail($id);
        $pastRole = $staff->is_admin ? 'Administrator' :
            ($staff->is_loan_officer ? 'Loan Officer' :
                ($staff->is_teller ? 'Teller' : ''));

        $staff->update([
            'is_teller' => $validated['role'] == 'Teller',
            'is_loan_officer' => $validated['role'] == 'Loan Officer',
            'is_admin' => $validated['role'] == 'Administrator',
        ]);

        // audit log
        $auditLog = [
            'type' => 'Staff Role Updated',
            'description' =>
                $staff->name . ' - ' . $pastRole . ' to ' . $validated['role'],
            'user_id' => auth()->id(),
        ];

        AuditLog::query()->create($auditLog);
        return redirect()->route('admin.staffProfile', $id);
    }


}
