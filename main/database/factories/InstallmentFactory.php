<?php

namespace Database\Factories;
use App\Models\Installment;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\LoanFactory;
use database\factories\TransactionFactory;
use App\Models\Loan;
use App\Models\Transaction;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Installment>
 */
class InstallmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Installment::class;
    public function definition(): array
    {
        return [
            'due_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'amount' => $this->faker->randomFloat(2, 1000, 50000),
            'status' => $this->faker->randomElement(Installment::STATUS),
            'loan_id' => null, // assumes you have LoanFactory
            'trans_id' => null, // assumes you have TransactionFactory
        ];
    }
}
