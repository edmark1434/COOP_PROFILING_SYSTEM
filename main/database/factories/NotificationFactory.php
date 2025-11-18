<?php

namespace Database\Factories;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use database\factories\UserFactory;
use App\Models\Notification;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Notification::class;
    public function definition(): array
    {
        return [
            'message'   => $this->faker->sentence(),
            'is_read'   => $this->faker->boolean(30), // 30% chance to be true
            'user_id'   => User::factory(), // creates a new user if none exists
            'created_at' => now()
        ];
    }
}
