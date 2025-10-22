<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Setting;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Setting>
 */
class SettingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Setting::class;
    public function definition(): array
    {
        return [
            'category'    => $this->faker->randomElement(['SYSTEM', 'FINANCE', 'NOTIFICATION', 'USER']),
            'key'         => strtoupper($this->faker->unique()->word()),
            'value'       => $this->faker->word(),
            'description' => $this->faker->sentence(),
        ];
    }
}
