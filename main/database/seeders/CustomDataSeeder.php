<?php

namespace Database\Seeders;

use App\Models\AuditLog;
use App\Models\BiometricData;
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

        // JODS SUPERADMIN
        BiometricData::query()->create([
            'template' => 'SvlTUzIxAAADur0ECAUHCc7QAAAvu5EBAABDg2chiboHATlkpAAdACzeaADuAEVkuwCoumNkSwARAfpQn7pOAbVkmQBLAHbeiwBdAa1ksgBxu6lPnQCAAVhYrLpIAIpMnAAfAEnemgAcAbtMWgCyuhBk3gDBAOxkRbrtAEpP/gAdACj8/AAeAbQ3SQByu6dFVABoAWAu4rpwAaEm3wCGAJrgugDqADZkFAD2urFTZwDNAJFk8br6ADRN8AAPAKbodABRASlkvwCSumxk0gBmAW0yabp1AZ5NdwCIAHHwggA3AAUmqIPhTBrwyOZt+8si+Uq//VYO2ffjUf1U//Uj/D8L9AodqEuOighGZa8WErO4+mmGUA8cBbpFgPqS8nL2QoTwSnYaLB5KFT86bj0GCZ+H+rHvnalcbIVyAqN6/wVxtxv79Ymm+TcGgTtuB4+LmfmcAfqw8Arq/cZ+vPlYvXLvZxBvl4InXjDkC97tZX4ffai3axAG9o4PE4WBOxsJ/X1xfd5wbsSXgKaNTQ/X+DDm8Alr90cPGft6QOP55W4P6ooH0iyOfLOT1sus0QOaLgECCxyKwQC6mRbA/wgAxuUXQ3hYBwCYJAk6//17/gMA6C4iBA4DPDkAMf9dTLQOAzsy9ypCPkrDARbIn8BiBQCtjYzCNA8Af0z6KzpARN4TAFVo8Fg7/UPxwDfAEQBYqvBJR//A/cH+TJEIAyWPBjH+WwbFeYzOwmcKAJeRsXbA5v4HAHmVawTAwnv+EwBSje2D/zJFOf9DTAcAvqxkxXQRAE+c5wX+MYv//0s9EABmtA+Z/z7CVMCN1wDYB6N5wKP/wgfB/HvAewcA4cHnL2OzAd7FLcD/BzvCrwFsx9z/wDkj/kQqSlpKBgChzll7wJMOAGrPlf+DeF14whIBDH6k/HhnaoiMbhPFUXxAdzH+OEb/BcDDtgGo2yn9NwV0gLkB/NstwA3FpueNP8LAwWyQywCiX0JpYnHEesoQ1j6SNDzB/8EF/ym+AZnqQ3UVxbnlE8PIxsXCwgTAwHrBwMT9wowEDAMF7DBDWHfCzgC5VDZFwWaBBcVJ7Pz+ZAwAavGF/4d7hUkVANDycYPHe8bCosTAagfAhrwRiQk3ZMDMEEquQsDCwn7CzBBNrjb+wYNtA9V2V5PAJBD9Ta07wMJ6UGnBoKPCBsDDe3jBXMDCjMMQVNQbw/5tIhA3ZaqCW/91wMHEA8TGNsPAwIfCXwWdB6p6eBNhUkLFEkC7AAEAogDq+gADqERS',
            'created_at' => now(),
            'user_id' => 1,
        ]);
    }
}
