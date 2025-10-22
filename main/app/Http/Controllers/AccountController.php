<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
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
            'name' => 'required|string|max:100',
            'type' => 'required|in:'. implode(",", Account::TYPES),
            'status' => 'required|in:'. implode(",", Account::STATUS),
            'balance' => 'required|numeric|min:0',
            'member_id' => 'nullable|exists:members,id',
        ]);
        $account = Account::create($request->all());
        return response()->json(["account"=> $account,"message" => "account created successfully"], 201);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Account $account)
    {
        return response()->json(["account"=> $account], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Account $account)
    {
        //
    }   

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Account $account)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:100',
            'type' => 'sometimes|required|in:'. implode(",", Account::TYPES),
            'status' => 'sometimes|required|in:'. implode(",", Account::STATUS),
            'balance' => 'sometimes|required|numeric|min:0',
            'member_id' => 'sometimes|nullable|exists:members,id',
        ]);
        $account->update($request->all());
        return response()->json(["account"=> $account,"message"=>"updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Account $account)
    {
        $account->delete();
        return response()->json(["message" => "successfully deleted"], 204);
    }
}
