<?php

namespace App\Http\Controllers\UserInterface;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommonFormsController extends Controller
{
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

    }
    public function confirmStaffPost(Request $request)
    {

    }

}
