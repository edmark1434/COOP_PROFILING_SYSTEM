<?php

namespace App\Http\Controllers;

use App\Models\AuditLog;
use Illuminate\Http\Request;

class AuditLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:'.implode(",", AuditLog::TYPES),
            'description' => 'required|string',
            'user_id' => 'required|exists:users,id',
        ]);

        $auditLog = AuditLog::create($request->all());

        return response()->json([
            "audit_log" => $auditLog,
            "message" => "Audit log created successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(AuditLog $auditLog)
    {
        return response()->json(["audit_log" => $auditLog], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AuditLog $auditLog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AuditLog $auditLog)
    {
        $request->validate([
            'type' => 'sometimes|required|in:'.implode(",", AuditLog::TYPES),
            'description' => 'sometimes|required|string',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        $auditLog->update($request->all());

        return response()->json([
            "audit_log" => $auditLog,
            "message" => "Audit log updated successfully"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AuditLog $auditLog)
    {
        $auditLog->delete();
        return response()->json(["message" => "Audit log deleted successfully"], 204);
    }
}
