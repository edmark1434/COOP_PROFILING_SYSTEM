<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::all();
        return response()->json(["notifications" => $notifications], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
            'is_read' => 'sometimes|boolean',
            'user_id' => 'required|exists:users,id',
        ]);

        $notification = Notification::create($request->all());

        return response()->json([
            "notification" => $notification,
            "message" => "Notification created successfully"
        ], 201);
    }

    public function show(Notification $notification)
    {
        return response()->json(["notification" => $notification], 200);
    }

    public function update(Request $request, Notification $notification)
    {
        $request->validate([
            'message' => 'sometimes|required|string',
            'is_read' => 'sometimes|required|boolean',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        $notification->update($request->all());

        return response()->json([
            "notification" => $notification,
            "message" => "Notification updated successfully"
        ], 200);
    }

    public function destroy(Notification $notification)
    {
        $notification->delete();
        return response()->json(["message" => "Notification deleted successfully"], 204);
    }
}
