<?php

namespace App\Http\Controllers\UserInterface\Admin;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminFormsController extends Controller
{
    public function staffAddFormGet()
    {
        return Inertia::render('admin/forms/add-staff',[]);
    }
    public function staffAddFormPost(Request $request)
    {

    }

    public function registerStaffFingerprintGet()
    {
        return Inertia::render('admin/forms/register-staff-finger',[]);
    }
    public function registerStaffFingerprintPost(Request $request)
    {
        $template = $request->input('template');
        $request->session()->put('staff_fingerprint',$template);  
    }

    public function staffRoleChangeFormGet()
    {
        return Inertia::render('admin/forms/change-staff-role',[]);
    }
    public function staffRoleChangeFormPost(Request $request)
    {

    }

}
