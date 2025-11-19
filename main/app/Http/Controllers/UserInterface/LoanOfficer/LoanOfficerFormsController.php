<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;
use App\Models\Loan;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoanOfficerFormsController extends Controller
{
    public function loanRejectionFormGet()
    {
        return Inertia::render('loan-officer/forms/reject-loan', []);
    }
    public function loanRejectionFormPost(Request $request, int $id)
    {
        $validated = $request->validate([
            'remarks' => 'required|string',
        ]);

        $final = [
            'remarks' => $validated['remarks'],
            'status' => 'Rejected',
        ];

        Loan::query()->where('id', $id)->update($final);
        return back();
    }

}
