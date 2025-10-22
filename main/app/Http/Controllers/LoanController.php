<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    public function index()
    {
        $loans = Loan::all();
        return response()->json(["loans" => $loans], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'ref_no' => 'required|string|max:10|unique:loans,ref_no',
            'amount' => 'required|numeric|min:0',
            'interest_rate' => 'required|numeric|min:0',
            'term_months' => 'required|integer|min:1',
            'status' => 'sometimes|required|in:' . implode(",", Loan::STATUS),
            'remarks' => 'nullable|string',
            'purpose_id' => 'required|exists:loan_purposes,id',
            'member_id' => 'required|exists:members,id',
        ]);

        $loan = Loan::create($request->all());

        return response()->json([
            "loan" => $loan,
            "message" => "Loan created successfully"
        ], 201);
    }

    public function show(Loan $loan)
    {
        return response()->json(["loan" => $loan], 200);
    }

    public function edit(Loan $loan)
    {
        //
    }

    public function update(Request $request, Loan $loan)
    {
        $request->validate([
            'ref_no' => 'sometimes|required|string|max:10|unique:loans,ref_no,' . $loan->id,
            'amount' => 'sometimes|required|numeric|min:0',
            'interest_rate' => 'sometimes|required|numeric|min:0',
            'term_months' => 'sometimes|required|integer|min:1',
            'status' => 'sometimes|required|in:' . implode(",", Loan::STATUS),
            'remarks' => 'sometimes|nullable|string',
            'purpose_id' => 'sometimes|required|exists:loan_purposes,id',
            'member_id' => 'sometimes|required|exists:members,id',
        ]);

        $loan->update($request->all());

        return response()->json([
            "loan" => $loan,
            "message" => "Loan updated successfully"
        ], 200);
    }

    public function destroy(Loan $loan)
    {
        $loan->delete();
        return response()->json(["message" => "Loan deleted successfully"], 204);
    }
}
