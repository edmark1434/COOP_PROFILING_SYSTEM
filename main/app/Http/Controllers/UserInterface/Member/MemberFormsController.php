<?php

namespace App\Http\Controllers\UserInterface\Member;
use App\Models\Loan;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LoanPurpose;

class MemberFormsController extends Controller
{
    public function loanApplicationFormGet()
    {
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
    public function loanApplicationFormPost(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required|integer|min:1|max:300000',
            'purpose' => 'required|integer|exists:loan_purposes,id',
            'termMonths' => 'required|string',
            'interestRate' => 'required|numeric',
        ]);

        $final = [
            'ref_no' => fake()->numberBetween(5000000000, 5099999999),
            'amount' => $validated['amount'],
            'interest_rate' => $validated['interestRate'],
            'term_months' => $validated['termMonths'],
            'purpose_id' => $validated['purpose'],
            'member_id' => auth()->id(),
        ];

        Loan::query()->create($final);
        return back();
    }

}
