<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::all();
        return response()->json(["members" => $members], 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_coop' => 'required|string|unique:members,id_coop',
            'first_name' => 'required|string|max:50',
            'middle_name' => 'nullable|string|max:100',
            'last_name' => 'required|string|max:100',
            'suffix' => 'nullable|string|max:20',
            'contact_num' => 'required|string|unique:members,contact_num',
            'status' => 'sometimes|required|in:' . implode(",", Member::STATUS),
            'join_date' => 'required|date',
            'exit_date' => 'nullable|date',
        ]);

        $member = Member::create($request->all());

        return response()->json([
            "member" => $member,
            "message" => "Member created successfully"
        ], 201);
    }

    public function show(Member $member)
    {
        return response()->json(["member" => $member], 200);
    }

    public function edit(Member $member)
    {
        //
    }

    public function update(Request $request, Member $member)
    {
        $request->validate([
            'id_coop' => 'sometimes|required|string|unique:members,id_coop,' . $member->id,
            'first_name' => 'sometimes|required|string|max:50',
            'middle_name' => 'sometimes|nullable|string|max:100',
            'last_name' => 'sometimes|required|string|max:100',
            'suffix' => 'sometimes|nullable|string|max:20',
            'contact_num' => 'sometimes|required|string|unique:members,contact_num,' . $member->id,
            'status' => 'sometimes|required|in:' . implode(",", Member::STATUS),
            'join_date' => 'sometimes|required|date',
            'exit_date' => 'sometimes|nullable|date',
        ]);

        $member->update($request->all());

        return response()->json([
            "member" => $member,
            "message" => "Member updated successfully"
        ], 200);
    }

    public function destroy(Member $member)
    {
        $member->delete();
        return response()->json(["message" => "Member deleted successfully"], 204);
    }
}
