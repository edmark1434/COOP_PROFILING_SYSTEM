<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Account;
use Faker\Factory as Faker;

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

        foreach ($accounts as $acc) {
            Account::create([
                ...$acc,
                'status' => 'ACTIVE',
                'balance' => $this->faker->randomFloat(2, 1000, 100000),
                'member_id' => null, // system account
            ]);
        }


    }
}
