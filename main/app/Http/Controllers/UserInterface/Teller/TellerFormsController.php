<?php

namespace App\Http\Controllers\UserInterface\Teller;
use App\Models\Transaction;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TellerFormsController extends Controller
{
    public function transactionFormGet()
    {
        return Inertia::render('teller/forms/add-transaction', [
            'transactionTypes' => Transaction::TYPES,
        ]);
    }
    public function transactionFormPost(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|min:1',
            'member' => 'required|integer|exists:members,id',
            'amount' => 'required|integer|min:1|max:300000',
        ]);

        $final = [
            'ref_no' => fake()->numberBetween(2200000000, 2299999999),
            'amount' => $validated['amount'],
            'type' => $validated['type'],
            'member_id' => $validated['member'],
            'user_id' => auth()->id(),
        ];

        Transaction::query()->create($final);
        return back();
    }

    public function confirmTransactionGet()
    {
        return Inertia::render('teller/forms/confirm-transaction',[]);
    }
    public function confirmTransactionPost(Request $request)
    {

    }

    public function confirmMemberGet()
    {
        return Inertia::render('teller/forms/confirm-member',[]);
    }
    public function confirmMemberPost(Request $request)
    {
        
    }

    public function memberRegistrationFormGet()
    {
        return Inertia::render('teller/forms/register-member',[]);
    }
    public function memberRegistrationFormPost(Request $request)
    {

    }

    public function registerMemberFingerprintGet()
    {
        return Inertia::render('teller/forms/register-member-finger',[]);
    }
    public function registerMemberFingerprintPost(Request $request)
    {

    }

}
