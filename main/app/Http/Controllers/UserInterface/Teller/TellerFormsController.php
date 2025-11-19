<?php

namespace App\Http\Controllers\UserInterface\Teller;
use App\Models\Account;
use App\Models\AuditLog;
use App\Models\Member;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
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

        // audit log
        $auditLog = [
            'type' => 'Transaction Recorded',
            'description' => $validated['type'] . ' - Transaction ID: ' . $final['ref_no'],
            'user_id' => auth()->id(),
        ];

        AuditLog::query()->create($auditLog);
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
        return Inertia::render('teller/forms/register-member', [
            'suffixes' => Member::SUFFIX,
        ]);
    }
    public function memberRegistrationFormPost(Request $request)
    {
        $emailExists = User::where('email', $request->email)->exists();
        if ($emailExists) {
            return back()->withErrors(['email' => 'This email is already registered.']);
        }

        $validated = $request->validate([
            'firstName'    => 'required|string|min:1',
            'middleName'   => 'nullable|string',
            'lastName'     => 'required|string|min:1',
            'suffix'       => 'nullable|string',
            'email'        => 'required|email',
            'contactNum'   => ['required', 'string', 'regex:/^\+639\d{9}|(\+63[2-9]\d{1,3}\d{7,8})$/'],
        ]);

        $coop_id = fake()->numberBetween(6700000000, 6799999999);
        $name = trim(implode(' ', array_filter([
                    $validated['firstName'],
                    $validated['middleName'] ?? null,
                    $validated['lastName'],
                    $validated['suffix'] ?? null
                ])));

        // member
        $memberForm = [
            'id_coop' => $coop_id,
            'first_name' => $validated['firstName'],
            'middle_name' => $validated['middleName'] ?? null,
            'last_name' => $validated['lastName'],
            'suffix' => $validated['suffix'] ?? null,
            'contact_num' => $validated['contactNum'],
            'join_date' => now(),
        ];

        Member::query()->create($memberForm);
        $member = Member::query()->where('id_coop', $coop_id)->first();

        // user
        $user = User::query()->where('email', $validated['email'])->first();
        if ($user) {
            // if user already exists i.e. staff
            $user->is_member = true;
            $user->member_id = $member->id;
            $user->save();
        }
        else {
            $userForm = [
                'name' => $name,
                'email' => $validated['email'],
                'is_member' => true,
                'member_id' => $member->id,
                'password' => Hash::make(fake()->password),
            ];

            User::query()->create($userForm);
        }

        // account
        $account = [
            'name' => $name . ' Share Capital',
            'type' => 'Equity',
            'member_id' => $member->id,
        ];

        Account::query()->create($account);

        // audit log
        $auditLog = [
            'type' => 'Member Registered',
            'description' => $name . ' - Member ID: ' . $coop_id,
            'user_id' => auth()->id(),
        ];

        AuditLog::query()->create($auditLog);
        return back();
    }

    public function registerMemberFingerprintGet()
    {
        return Inertia::render('teller/forms/register-member-finger',[]);
    }
    public function registerMemberFingerprintPost(Request $request)
    {

    }

}
