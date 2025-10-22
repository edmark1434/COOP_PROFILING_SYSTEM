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
            'ref_no' => strtoupper($this->faker->bothify('LN-####??')),
            'amount' => $this->faker->randomFloat(2, 5000, 100000),
            'interest_rate' => $this->faker->randomFloat(2, 3, 15),
            'term_months' => $this->faker->numberBetween(6, 36),
            'status' => $this->faker->randomElement(Loan::STATUS),
            'remarks' => $this->faker->sentence(),
            'purpose_id' => LoanPurpose::factory(), // assumes LoanPurposeFactory exists
            'member_id' => Member::factory(),       // assumes MemberFactory exists
        ];
    }
}
