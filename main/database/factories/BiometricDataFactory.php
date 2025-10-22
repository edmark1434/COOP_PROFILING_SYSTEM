<?php

namespace Database\Factories;
use App\Models\BiometricData;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\UserFactory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BiometricData>
 */
class BiometricDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = BiometricData::class;
    public function definition(): array
    {
        return [
            'template' => $this->faker->sha256(),
            'user_id' => User::factory(),
        ];
    }
}
