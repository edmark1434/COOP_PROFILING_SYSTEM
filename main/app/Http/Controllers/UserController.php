<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(["users" => $users], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:150',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'is_member' => 'sometimes|boolean',
            'is_teller' => 'sometimes|boolean',
            'is_loan_officer' => 'sometimes|boolean',
            'is_admin' => 'sometimes|boolean',
            'member_id' => 'sometimes|nullable|exists:members,id',
        ]);

        $user = User::create($request->all());

        return response()->json([
            "user" => $user,
            "message" => "User created successfully"
        ], 201);
    }

    public function show(User $user)
    {
        return response()->json(["user" => $user], 200);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:150',
            'email' => 'sometimes|required|email|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|string|min:8',
            'is_member' => 'sometimes|boolean',
            'is_teller' => 'sometimes|boolean',
            'is_loan_officer' => 'sometimes|boolean',
            'is_admin' => 'sometimes|boolean',
            'member_id' => 'sometimes|nullable|exists:members,id',
        ]);

        $user->update($request->all());

        return response()->json([
            "user" => $user,
            "message" => "User updated successfully"
        ], 200);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(["message" => "User deleted successfully"], 204);
    }
}
