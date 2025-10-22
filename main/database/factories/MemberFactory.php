<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Member::class;
    public function definition(): array
    {

        return [
            'id_coop'      => strtoupper($this->faker->bothify('COOP-####')),
            'first_name'   => $this->faker->firstName(),
            'middle_name'  => $this->faker->optional()->firstName(),
            'last_name'    => $this->faker->lastName(),
            'suffix'       => $this->faker->optional()->suffix(),
            'contact_num'  => $this->faker->phoneNumber(),
            'status'       => $this->faker->randomElement(Member::STATUS),
            'join_date'    => $this->faker->dateTimeBetween('-5 years', 'now'),
            'exit_date'    => $this->faker->optional()->dateTimeBetween('now', '+2 years'),
        ];
    }
}
