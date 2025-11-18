<?php

namespace App\Http\Controllers\UserInterface\Member;
use App\Models\Loan;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\LoanPurpose;
class MemberFormsController extends Controller
{
    /**
     * Store a new loan application
     */
    public function loanIndex(){
        $loanPurposes = LoanPurpose::all();
        $plans = [
            [ 'id' => '3-5',  'termMonths' => 3,  'interestRate' => 5 ],
            [ 'id' => '6-6',  'termMonths' => 6,  'interestRate' => 6 ],
            [ 'id' => '12-8', 'termMonths' => 12, 'interestRate' => 8 ],
        ];

        return Inertia::render('member/forms/apply-for-loan', [
            'loanPurposes' => $loanPurposes,
            'plans' => $plans,
        ]);
    }
    public function loanStore(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required|integer|min:1|max:300000',
            'purpose' => 'required|integer|exists:loan_purposes,id',
            'termMonths' => 'required|integer',
            'interestRate' => 'required|numeric',
        ]);

        Loan::query()->create($validated);
        return back()->with('success', 'Loan application submitted');
    }

}
