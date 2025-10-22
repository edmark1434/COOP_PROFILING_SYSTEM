<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ShareSnapshot;
use database\factories\AccountFactory;
use App\Models\Account;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShareSnapshot>
 */
class ShareSnapshotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'balance' => $this->faker->randomFloat(2, 100, 10000),
            'account_id' => Account::factory(), // creates an Account automatically if none exists
            'created_at' => now(),
        ];
    }
}
