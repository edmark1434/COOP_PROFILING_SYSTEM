<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all();
        return response()->json(["settings" => $settings], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'key' => 'required|string',
            'value' => 'required|string',
            'category' => 'sometimes|nullable|string',
            'description' => 'sometimes|nullable|string',
        ]);

        $setting = Setting::create($request->all());

        return response()->json([
            "setting" => $setting,
            "message" => "Setting created successfully"
        ], 201);
    }

    public function show(Setting $setting)
    {
        return response()->json(["setting" => $setting], 200);
    }

    public function update(Request $request, Setting $setting)
    {
        $request->validate([
            'key' => 'sometimes|required|string',
            'value' => 'sometimes|required|string',
            'category' => 'sometimes|nullable|string',
            'description' => 'sometimes|nullable|string',
        ]);

        $setting->update($request->all());

        return response()->json([
            "setting" => $setting,
            "message" => "Setting updated successfully"
        ], 200);
    }

    public function destroy(Setting $setting)
    {
        $setting->delete();
        return response()->json(["message" => "Setting deleted successfully"], 204);
    }
}
