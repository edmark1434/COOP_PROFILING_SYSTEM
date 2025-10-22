<?php

namespace App\Http\Controllers;

use App\Models\BiometricData;
use Illuminate\Http\Request;

class BiometricDataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $biometricData = BiometricData::all();
        return response()->json(["biometric_data" => $biometricData], 200);
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
            'template' => 'required',
            'user_id' => 'required|exists:users,id',
        ]);

        $biometricData = BiometricData::create($request->all());

        return response()->json([
            "biometric_data" => $biometricData,
            "message" => "Biometric data created successfully"
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(BiometricData $biometricData)
    {
        return response()->json(["biometric_data" => $biometricData], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BiometricData $biometricData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BiometricData $biometricData)
    {
        $request->validate([
            'template' => 'sometimes|required',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        $biometricData->update($request->all());

        return response()->json([
            "biometric_data" => $biometricData,
            "message" => "Biometric data updated successfully"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BiometricData $biometricData)
    {
        $biometricData->delete();
        return response()->json(["message" => "Biometric data deleted successfully"], 204);
    }
}
