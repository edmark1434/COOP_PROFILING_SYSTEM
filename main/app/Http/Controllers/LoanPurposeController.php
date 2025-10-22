<?php

namespace App\Http\Controllers;

use App\Models\LoanPurpose;
use Illuminate\Http\Request;

class LoanPurposeController extends Controller
{
    public function index()
    {
        $purposes = LoanPurpose::all();
        return response()->json(["loan_purposes" => $purposes], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100|unique:loan_purposes,name',
        ]);

        $purpose = LoanPurpose::create($request->all());

        return response()->json([
            "loan_purpose" => $purpose,
            "message" => "Loan purpose created successfully"
        ], 201);
    }

    public function show(LoanPurpose $loanPurpose)
    {
        return response()->json(["loan_purpose" => $loanPurpose], 200);
    }

    public function edit(LoanPurpose $loanPurpose)
    {
        //
    }

    public function update(Request $request, LoanPurpose $loanPurpose)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:100|unique:loan_purposes,name,' . $loanPurpose->id,
        ]);

        $loanPurpose->update($request->all());

        return response()->json([
            "loan_purpose" => $loanPurpose,
            "message" => "Loan purpose updated successfully"
        ], 200);
    }

    public function destroy(LoanPurpose $loanPurpose)
    {
        $loanPurpose->delete();
        return response()->json(["message" => "Loan purpose deleted successfully"], 204);
    }
}
