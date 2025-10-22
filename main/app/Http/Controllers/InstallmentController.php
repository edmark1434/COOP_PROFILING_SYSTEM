<?php

namespace App\Http\Controllers;

use App\Models\Installment;
use Illuminate\Http\Request;

class InstallmentController extends Controller
{
    public function index()
    {
        $installments = Installment::all();
        return response()->json(["installments" => $installments], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'due_date' => 'required|date',
            'amount' => 'required|numeric|min:0',
            'status' => 'sometimes|required|in:' . implode(",", Installment::STATUS),
            'loan_id' => 'required|exists:loans,id',
            'trans_id' => 'nullable|exists:transactions,id',
        ]);

        $installment = Installment::create($request->all());

        return response()->json([
            "installment" => $installment,
            "message" => "Installment created successfully"
        ], 201);
    }

    public function show(Installment $installment)
    {
        return response()->json(["installment" => $installment], 200);
    }

    public function edit(Installment $installment)
    {
        //
    }

    public function update(Request $request, Installment $installment)
    {
        $request->validate([
            'due_date' => 'sometimes|required|date',
            'amount' => 'sometimes|required|numeric|min:0',
            'status' => 'sometimes|required|in:' . implode(",", Installment::STATUS),
            'loan_id' => 'sometimes|required|exists:loans,id',
            'trans_id' => 'sometimes|nullable|exists:transactions,id',
        ]);

        $installment->update($request->all());

        return response()->json([
            "installment" => $installment,
            "message" => "Installment updated successfully"
        ], 200);
    }

    public function destroy(Installment $installment)
    {
        $installment->delete();
        return response()->json(["message" => "Installment deleted successfully"], 204);
    }
}
