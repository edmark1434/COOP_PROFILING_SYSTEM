<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Account;
use App\Models\AuditLog;
use App\Models\Transaction;
use App\Models\LedgerEntry;
use App\Models\Installment;
use App\Models\BiometricData;
use App\Models\Loan;
use App\Models\LoanPurpose;
use App\Models\Member;
use App\Models\Notification;
use App\Models\Setting;
use App\Models\ShareSnapshot;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(5)->create();
        Account::factory(5)->create();
        AuditLog::factory(5)->create();
        Transaction::factory(5)->create();
        LedgerEntry::factory(5)->create();
        Installment::factory(5)->create();
        BiometricData::factory(5)->create();
        Loan::factory(5)->create();
        LoanPurpose::factory(5)->create();
        Member::factory(5)->create();
        Notification::factory(5)->create();
        Setting::factory(5)->create();
        ShareSnapshot::factory(5)->create();
    }
}
