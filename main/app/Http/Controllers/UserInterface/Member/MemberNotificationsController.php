<?php

namespace App\Http\Controllers\UserInterface\Member;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Notification;
use Illuminate\Http\Request;

class MemberNotificationsController extends Controller
{
    public function index(Request $request)
    {
        // Get the authenticated user's ID
        $userId = auth()->id();
        
        // Fetch notifications for the current user
        $notifications = Notification::where('user_id', $userId)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($notification) {
                return [
                    'id' => $notification->id,
                    'title' => $notification->message,
                    'date' => $notification->created_at->format('F j, Y · g:i A'),
                    'isRead' => (bool) $notification->is_read,
                ];
            });

        return Inertia::render('member/notifications', [
            'notifications' => $notifications,
        ]);
    }

    public function markAsRead(Request $request, $id)
    {
        $userId = auth()->id();
        
        $notification = Notification::where('id', $id)
            ->where('user_id', $userId)
            ->firstOrFail();
        
        $notification->is_read = true;
        $notification->save();
        
        return back();
    }

    public function markAllAsRead(Request $request)
    {
        $userId = auth()->id();
        
        Notification::where('user_id', $userId)
            ->where('is_read', false)
            ->update(['is_read' => true]);
        
        return back();
    }
}