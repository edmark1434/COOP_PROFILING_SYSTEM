<?php

namespace App\Http\Controllers\UserInterface\LoanOfficer;
use App\Models\AuditLog;
use App\Models\Loan;
use App\Models\LoanPurpose;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoanOfficerFormsController extends Controller
{
    public function loanRejectionFormGet($id)
    {
        session()->forget('form');
        return Inertia::render('loan-officer/forms/reject-loan', [
            'id' => $id
        ]);
    }
    public function loanRejectionFormPost(Request $request, int $id)
    {
        $validated = $request->validate([
            'remarks' => 'required|string',
        ]);

        session()->put('form.type', 'reject-loan');
        session()->put('form.data', $validated);
        session()->put('form.id', $id);
        return redirect()->route('confirmStaff.get');
    }

    public function loanRejectionFormSave()
    {
        $validated = session()->get('form.data');
        $id = session()->get('form.id');

        $final = [
            'remarks' => $validated['remarks'],
            'status' => 'Rejected',
        ];

        $loan = Loan::query()->findOrFail($id);
        $loan->update($final);

        // audit log
        $auditLog = [
            'type' => 'Loan Rejected',
            'description' => LoanPurpose::query()->findOrFail($loan->purpose_id)->name . ' - Loan ID: ' . $loan->ref_no,
            'user_id' => auth()->id(),
            'created_at' => now(),
        ];

        AuditLog::query()->create($auditLog);
        session()->forget('form');
        return redirect()->route('loan-officer.loan-applications');
    }

}
