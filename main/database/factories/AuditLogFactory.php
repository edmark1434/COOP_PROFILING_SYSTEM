<?php

namespace Database\Factories;
use App\Models\AuditLog;
use Illuminate\Database\Eloquent\Factories\Factory;
use databae\factories\UserFactory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AuditLog>
 */
class AuditLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = AuditLog::class;
    public function definition(): array
    {
        return [
            'type' => $this->faker->randomElement(AuditLog::TYPES),
            'description' => $this->faker->sentence(10),
            'user_id' => User::factory(), // create a related User automatically
            'created_at' => now(),
        ];
    }
}
