<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::all();
        return response()->json(["transactions" => $transactions], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'ref_no' => 'required|string|unique:transactions,ref_no',
            'amount' => 'required|numeric|min:0',
            'type' => 'required|in:' . implode(",", Transaction::TYPES),
            'member_id' => 'required|exists:members,id',
        ]);

        $transaction = Transaction::create($request->all());

        return response()->json([
            "transaction" => $transaction,
            "message" => "Transaction created successfully"
        ], 201);
    }

    public function show(Transaction $transaction)
    {
        return response()->json(["transaction" => $transaction], 200);
    }

    public function update(Request $request, Transaction $transaction)
    {
        $request->validate([
            'ref_no' => 'sometimes|required|string|unique:transactions,ref_no,' . $transaction->id,
            'amount' => 'sometimes|required|numeric|min:0',
            'type' => 'sometimes|required|in:' . implode(",", Transaction::TYPES),
            'member_id' => 'sometimes|required|exists:members,id',
        ]);

        $transaction->update($request->all());

        return response()->json([
            "transaction" => $transaction,
            "message" => "Transaction updated successfully"
        ], 200);
    }

    public function destroy(Transaction $transaction)
    {
        $transaction->delete();
        return response()->json(["message" => "Transaction deleted successfully"], 204);
    }
}
