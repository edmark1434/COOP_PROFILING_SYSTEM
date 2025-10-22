<?php

namespace Database\Factories;
use App\Models\LoanPurpose;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LoanPurpose>
 */
class LoanPurposeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = LoanPurpose::class;
    public function definition(): array
    {
        return [
            'name' => $this->faker->randomElement([
                'Business Capital',
                'Education',
                'Medical Expense',
                'Home Improvement',
                'Emergency Fund',
                'Vehicle Purchase',
                'Travel Loan'
            ]),
        ];
    }
}
