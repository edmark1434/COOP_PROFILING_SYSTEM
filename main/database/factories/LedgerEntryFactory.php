<?php

namespace Database\Factories;
use App\Models\LedgerEntry;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\TransactionFactory;
use database\factories\AccountFactory;
use App\Models\Transaction;
use App\Models\Account;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LedgerEntry>
 */
class LedgerEntryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = LedgerEntry::class;
    public function definition(): array
    {
        $isDebit = $this->faker->boolean(50);

        return [
            'debit' => $isDebit ? $this->faker->randomFloat(2, 100, 10000) : 0,
            'credit' => !$isDebit ? $this->faker->randomFloat(2, 100, 10000) : 0,
            'trans_id' => Transaction::factory(), // assumes TransactionFactory exists
            'account_id' => Account::factory(),   // assumes AccountFactory exists
        ];
    }
}
