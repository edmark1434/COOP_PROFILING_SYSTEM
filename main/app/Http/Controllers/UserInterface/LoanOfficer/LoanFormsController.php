<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanFormsController extends Controller
{
    public function index($id){
        return Inertia::render('loan-officer/forms/reject-loan',[
            'id' => $id
        ]);
    }
}
