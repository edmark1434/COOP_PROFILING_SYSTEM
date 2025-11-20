<?php

namespace Database\Seeders;

use App\Models\AuditLog;
use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Account;
use App\Models\LoanPurpose;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class CustomDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->faker = Faker::create();
         $accounts = [
            ['name' => 'Share Capital Total', 'type' => 'Equity'],
            ['name' => 'Loan Receivable', 'type' => 'Asset'],
            ['name' => 'Interest Income', 'type' => 'Income'],
            ['name' => 'Dividends Payable', 'type' => 'Liability'],
            ['name' => 'Retained Earnings', 'type' => 'Equity'],
            ['name' => 'Coop Cash', 'type' => 'Asset'],
        ];
        $loanPurpose = [
            ['name' => 'Business Capital'],
            ['name' => 'Education'],
            ['name' => 'Medical Expense'],
            ['name' => 'Home Improvement'],
            ['name' => 'Emergency Fund'],
            ['name' => 'Vehicle Purchase'],
            ['name' => 'Travel Loan'],
        ];
        foreach($loanPurpose as $lp){
            LoanPurpose::create($lp);
        }
        foreach ($accounts as $acc) {
            Account::create([
                ...$acc,
                'status' => 'Active',
                'balance' => $this->faker->randomFloat(2, 1000, 100000),
                'member_id' => null, // system account
            ]);
        }

        // SUPER ADMIN
        User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin1234'),
            'is_admin' => true,
            'is_member' => false,
            'is_teller' => false,
            'is_loan_officer' => false,
            'status' => 'Active',
            'member_id' => null,
        ]);

        // TELLER
        User::create([
            'name' => 'Teller',
            'email' => 'teller@test.com',
            'password' => Hash::make('teller1234'),
            'is_admin' => false,
            'is_member' => false,
            'is_teller' => true,
            'is_loan_officer' => false,
            'status' => 'Active',
            'member_id' => null,
        ]);

        // LOAN OFFICER
        User::create([
            'name' => 'Loan Officer',
            'email' => 'loanofficer@test.com',
            'password' => Hash::make('loanofficer1234'),
            'is_admin' => false,
            'is_member' => false,
            'is_teller' => false,
            'is_loan_officer' => true,
            'status' => 'Active',
            'member_id' => null,
        ]);

    }
}
