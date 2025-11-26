<?php

namespace App\Http\Controllers\UserInterface;
use App\Http\Controllers\CommonLogic;
use App\Http\Controllers\UserInterface\Admin\AdminFormsController;
use App\Http\Controllers\UserInterface\LoanOfficer\LoanOfficerFormsController;
use App\Http\Controllers\UserInterface\Teller\TellerFormsController;
use App\Models\Member;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommonFormsController extends Controller
{
    public function MembersGet(){
        $members = Member::select(
            'id',
            DB::raw("CONCAT_WS(' ', first_name, middle_name, last_name, suffix) AS name")
        )->get();

        return response()->json($members);
    }

    public function passwordChangeFormGet(){
        return Inertia::render('settings/forms/change-password', []);
    }
    public function passwordChangeFormPost(Request $request)
    {
        if (!Hash::check($request->currentPassword, auth()->user()->getAuthPassword())) {
            return back()->withErrors(['currentPassword' => 'Wrong current password']);
        }

        $validated = $request->validate([
            'currentPassword' => 'required|string|min:8',
            'newPassword' => 'required|string|min:8',
            'confirmNewPassword' => 'required|string|min:8|same:newPassword',
        ]);

        auth()->user()->update([
            'password' => Hash::make($validated['newPassword']),
        ]);
        return back();
    }

    public function confirmStaffGet()
    {
        $user = auth()->user();
        $initials = CommonLogic::getInitials($user->name);
        return Inertia::render('settings/forms/confirm-staff',[
            'staffName' => $user->name,
            'initials' => $initials,
            'authId' => $user->id
        ]);
    }
    public function confirmStaffPost()
    {
        session()->put('form.staff_confirmed',true);

        $formType = session()->get('form.type');
        switch ($formType) {
            case 'add-transaction':
                return redirect()->route('teller.transactionForm.save');
            case 'approve-loan':
                return redirect()->route('loan-officer.loanApproval.save');
            case 'reject-loan':
                return redirect()->route('loan-officer.loanRejectionForm.save');
            case 'add-staff':
                return redirect()->route('admin.staffAddForm.save');
            case 'change-staff-role':
                return redirect()->route('admin.staffRoleChangeForm.save');
            case 'suspend-staff':
                return redirect()->route('admin.staffSuspend.save');
            default:
                abort(404);
        }
    }

    public function fingerprintLoginGet()
    {
        return Inertia::render('settings/forms/fingerprint-login', []);
    }

    public function fingerprintLoginPost(Request $request)
    {
        $id = $request->input('id');
        $user = User::query()->findOrFail($id);
        Auth::login($user);

        $route = match (true) {
            $user->is_admin => 'admin.overview',
            $user->is_loan_officer => 'loan-officer.overview',
            $user->is_teller => 'teller.overview',
            default => 'member.overview',
        };
        return redirect()->intended(route($route,absolute: false));
    }
}
