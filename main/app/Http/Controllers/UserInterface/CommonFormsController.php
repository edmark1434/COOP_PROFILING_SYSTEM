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
        ]);
    }
    public function confirmStaffPost()
    {
        session()->put('form.staff_confirmed',true);

        $formType = session()->get('form.type');
        switch ($formType) {
            case 'add-transaction':
                TellerFormsController::class->transactionFormSave();
                break;
            case 'reject-loan':
                LoanOfficerFormsController::class->loanRejectionFormSave();
                break;
            case 'add-staff':
                AdminFormsController::class->staffAddFormSave();
                break;
            case 'change-staff-role':
                AdminFormsController::class->staffRoleChangeFormSave();
                break;
            default:
                abort(404);
        }
    }

}
