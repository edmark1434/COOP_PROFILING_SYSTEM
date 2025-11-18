<?php

namespace App\Http\Controllers\UserInterface\Member;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\LoanPurpose;
class MemberLoanFormsController extends Controller
{
    /**
     * Store a new loan application
     */
    public function index(){
        $loanPurpose = LoanPurpose::all();
        return Inertia::render('member/forms/apply-for-loan',[
            'loanPurposes' => $loanPurpose
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required|integer|min:1|max:300000',
            'purpose' => 'required|string',
            'plan' => 'required|string|regex:/^\d{1,2}-\d{1,2}$/',
        ]);

        [$termMonths, $interestRate] = explode('-', $validated['plan']);
        $validated['termMonths'] = (int) $termMonths;
        $validated['interestRate'] = (int) $interestRate;
        return response()->json([
        'success' => true,
        'message' => 'Loan application submitted successfully!'
    ]);
    }

}
