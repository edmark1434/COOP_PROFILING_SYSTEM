<?php

namespace App\Http\Controllers\UserInterface\Member;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class MemberLoanController extends Controller
{
    /**
     * Store a new loan application
     */
    public function index(){
        return Inertia::render('member/forms/loan-application',[]);
    }
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'amount' => 'required|integer|min:1|max:300000',
            'purpose' => 'required|string',
            'plan' => 'required|string|regex:/^\d{1,2}-\d{1,2}$/', // format: "3-5"
        ]);
         // Split plan into termMonths and interestRate
        [$termMonths, $interestRate] = explode('-', $validated['plan']);
        $validated['termMonths'] = (int) $termMonths;
        $validated['interestRate'] = (int) $interestRate;

        return redirect()->route('member.myLoans');
    }
}
