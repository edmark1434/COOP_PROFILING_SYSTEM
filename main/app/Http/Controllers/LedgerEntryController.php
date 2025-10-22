<?php

namespace App\Http\Controllers;

use App\Models\LedgerEntry;
use Illuminate\Http\Request;

class LedgerEntryController extends Controller
{
    public function index()
    {
        $ledgerEntries = LedgerEntry::all();
        return response()->json(["ledger_entries" => $ledgerEntries], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'debit' => 'required|numeric|min:0',
            'credit' => 'required|numeric|min:0',
            'trans_id' => 'required|exists:transactions,id',
            'account_id' => 'required|exists:accounts,id',
        ]);

        $ledgerEntry = LedgerEntry::create($request->all());

        return response()->json([
            "ledger_entry" => $ledgerEntry,
            "message" => "Ledger entry created successfully"
        ], 201);
    }

    public function show(LedgerEntry $ledgerEntry)
    {
        return response()->json(["ledger_entry" => $ledgerEntry], 200);
    }

    public function edit(LedgerEntry $ledgerEntry)
    {
        //
    }

    public function update(Request $request, LedgerEntry $ledgerEntry)
    {
        $request->validate([
            'debit' => 'sometimes|required|numeric|min:0',
            'credit' => 'sometimes|required|numeric|min:0',
            'trans_id' => 'sometimes|required|exists:transactions,id',
            'account_id' => 'sometimes|required|exists:accounts,id',
        ]);

        $ledgerEntry->update($request->all());

        return response()->json([
            "ledger_entry" => $ledgerEntry,
            "message" => "Ledger entry updated successfully"
        ], 200);
    }

    public function destroy(LedgerEntry $ledgerEntry)
    {
        $ledgerEntry->delete();
        return response()->json(["message" => "Ledger entry deleted successfully"], 204);
    }
}
