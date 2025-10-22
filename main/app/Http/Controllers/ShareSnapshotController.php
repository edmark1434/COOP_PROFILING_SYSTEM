<?php

namespace App\Http\Controllers;

use App\Models\ShareSnapshot;
use Illuminate\Http\Request;

class ShareSnapshotController extends Controller
{
    public function index()
    {
        $snapshots = ShareSnapshot::all();
        return response()->json(["snapshots" => $snapshots], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'balance' => 'required|numeric|min:0',
            'account_id' => 'required|exists:accounts,id',
        ]);

        $snapshot = ShareSnapshot::create($request->all());

        return response()->json([
            "snapshot" => $snapshot,
            "message" => "Share snapshot created successfully"
        ], 201);
    }

    public function show(ShareSnapshot $shareSnapshot)
    {
        return response()->json(["snapshot" => $shareSnapshot], 200);
    }

    public function update(Request $request, ShareSnapshot $shareSnapshot)
    {
        $request->validate([
            'balance' => 'sometimes|required|numeric|min:0',
            'account_id' => 'sometimes|required|exists:accounts,id',
        ]);

        $shareSnapshot->update($request->all());

        return response()->json([
            "snapshot" => $shareSnapshot,
            "message" => "Share snapshot updated successfully"
        ], 200);
    }

    public function destroy(ShareSnapshot $shareSnapshot)
    {
        $shareSnapshot->delete();
        return response()->json(["message" => "Share snapshot deleted successfully"], 204);
    }
}
