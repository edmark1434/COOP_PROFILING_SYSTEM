<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;
use App\Models\Account;
use App\Models\Loan;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    protected $model = Member::class;

    public function definition(): array
    {
        return [
            'id_coop'     => $this->faker->unique()->numberBetween(6700000000, 6799999999),
            'first_name'  => $this->faker->firstName(),
            'middle_name' => $this->faker->optional()->firstName(),
            'last_name'   => $this->faker->lastName(),
            'suffix'      => $this->faker->optional()->randomElement(Member::SUFFIX),
            'contact_num' => '+63' . $this->faker->numerify('##########'),
            'status'      => $this->faker->randomElement(Member::STATUS),
            'join_date'   => $this->faker->dateTimeBetween('-5 years', 'now'),
            'exit_date'   => $this->faker->optional()->dateTimeBetween('now', '+2 years'),
        ];
    }

    // Add a has() relationship to automatically create accounts
    public function configure()
    {
        return $this->afterCreating(function (Member $member) {
            Account::factory()
                ->for($member)   // sets member_id
                ->state(['type' => 'Equity'])
                ->create();
            User::factory()
                ->for($member)   // sets member_id
                ->create();    // creates only ONE account
            Loan::factory()
                ->count(rand(1,3))
                ->for($member)  // sets member_id
                ->create();
        });
            // creates only ONE account
    }
}
