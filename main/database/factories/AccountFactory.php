<?php

namespace Database\Factories;
use App\Models\Account;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\MemberFactory;
use App\Models\Member;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Account::class;
    public function definition(): array
    {
        $data = [
            'name' => $this->faker->company . ' Account',
            'type' => 'Equity',
            'status' => $this->faker->randomElement(Account::STATUS),
            'balance' => $this->faker->randomFloat(2, 0, 50000),
            'member_id' => Member::factory(), // overwritten below
        ];
        
        return $data;
    }
}
