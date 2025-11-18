<?php

namespace Database\Factories;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\MemberFactory;
use App\Models\Member;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Transaction::class;
    public function definition(): array
    {
        return [
            'id' => $this->faker->unique()->numberBetween(2200000000, 2299999999),
            'ref_no' => strtoupper($this->faker->bothify('##########')), // 10-digit ref
            'amount' => $this->faker->randomFloat(2, 100, 50000), // amount between 100 and 50,000
            'type' => $this->faker->randomElement(Transaction::TYPES),
            'member_id' => Member::factory(), // create a related member
            'user_id' => User::factory()->state(fn () => ['is_teller' => true]), // create a related user
        ];
    }
}
