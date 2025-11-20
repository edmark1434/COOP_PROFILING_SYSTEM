<?php

namespace Database\Factories;
use App\Models\Loan;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\LoanPurposeFactory;
use database\factories\MemberFactory;
use App\Models\LoanPurpose;
use App\Models\Member;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loan>
 */
class LoanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Loan::class;
    public function definition(): array
    {
        return [
            'ref_no' => $this->faker->unique()->numberBetween(5000000000, 5099999999),
            'amount' => $this->faker->randomFloat(2, 5000, 100000),
            'interest_rate' => $this->faker->randomFloat(2, 3, 15),
            'term_months' => $this->faker->numberBetween(6, 36),
            'status' => $status = $this->faker->randomElement(Loan::STATUS),
            'remarks' => $status === 'Rejected' ? $this->faker->sentence() : null,
            'purpose_id' => $this->faker->numberBetween(1,7), // assumes LoanPurposeFactory exists
            'member_id' => Member::factory(),
            'created_at' => $this->faker->dateTimeThisYear(),
            'updated_at' => $this->faker->dateTimeThisYear()     // assumes MemberFactory exists
        ];
    }
}
