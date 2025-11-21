<?php

namespace App\Http\Controllers\UserInterface\Teller;
use App\Http\Controllers\CommonLogic;
use App\Models\Account;
use App\Models\AuditLog;
use App\Models\Member;
use App\Models\Transaction;
use App\Models\BiometricData;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TellerFormsController extends Controller
{
    public function transactionFormGet()
    {
        session()->forget('form');
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

        session()->put('form.type', 'add-transaction');
        session()->put('form.data', $validated);
        return redirect()->route('teller.confirmTransaction.get');
    }

    public function confirmTransactionGet()
    {
        $data = session()->get('form.data');
        $member = Member::query()->where('id', $data['member'])->first();
        $name = trim(implode(' ', array_filter([
            $member->first_name,
            $member->middle_name ?? null,
            $member->last_name,
            $member->suffix ?? null
        ])));

        session()->put('form.member_name', $name);

        return Inertia::render('teller/forms/confirm-transaction',[
            'data' => $data,
            'memberName' => $name,
        ]);
    }

    public function confirmMemberGet()
    {
        $name = session()->get('form.member_name');
        $initials = CommonLogic::getInitials($name);
        return Inertia::render('teller/forms/confirm-member',[
            'memberName' => $name,
            'initials' => $initials,
        ]);
    }
    public function confirmMemberPost()
    {
        session()->put('form.member_confirmed',true);
        return redirect()->route('confirmStaff.get');
    }

    public function memberRegistrationFormGet()
    {
        session()->forget('form');
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

        $name = trim(implode(' ', array_filter([
            $validated['firstName'],
            $validated['middleName'] ?? null,
            $validated['lastName'],
            $validated['suffix'] ?? null
        ])));

        session()->put('form.type', 'register-member');
        session()->put('form.data', $validated);
        session()->put('form.member_name', $name);
        return redirect()->route('teller.registerMemberFingerprint.get');
    }

    public function registerMemberFingerprintGet()
    {
        $name = session()->get('form.member_name');
        $initials = CommonLogic::getInitials($name);
        return Inertia::render('teller/forms/register-member-finger',[
            'memberName' => $name,
            'initials' => $initials,
        ]);
    }
    public function registerMemberFingerprintPost(Request $request)
    {
        $template = $request->input('template');
        session()->put('form.member_fingerprint',$template);
        $this->transactionFormSave();
    }

    public function transactionFormSave()
    {
        $validated = session()->get('form.data');

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
        return redirect()->route('teller.transactions');
    }

    public function memberRegistrationFormSave()
    {
        $validated = session()->get('form.data');
        $fingerprint = session()->get('form.member_fingerprint');

        $coop_id = fake()->numberBetween(6700000000, 6799999999);
        $name = session()->get('form.member_name');

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

        $user = User::query()->where('email', $validated['email'])->first();

        // biometric_data
        $biometric = [
            'template' => $fingerprint,
            'user_id'=> $user->id,
        ];
        BiometricData::query()->create($biometric);

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
        return redirect()->route('teller.memberLookup');
    }

}
