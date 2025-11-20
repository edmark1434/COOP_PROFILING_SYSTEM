<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use database\factories\MemberFactory;
use App\Models\Member;
use App\Models\AuditLog;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;
    /**
     * The current password being used by the factory.
     */
    protected static ?int $userCount = 0;
    protected static ?string $password;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $password = static::$password ??= Hash::make('password');

        // Default random user
        $data = [
            'name'                   => fake()->name(),
            'email'                  => fake()->unique()->safeEmail(),
            'email_verified_at'      => now(),
            'password'               => $password,
            'remember_token'         => Str::random(10),
            'two_factor_secret'      => null,
            'two_factor_recovery_codes' => null,
            'two_factor_confirmed_at' => null,

            'is_member'        => $this->faker->boolean(70),
            'is_teller'        => $this->faker->boolean(20),
            'is_loan_officer'  => $this->faker->boolean(15),
            'is_admin'         => $this->faker->boolean(10),
            'status'           => $this->faker->randomElement(['Active','Inactive']),
            'member_id' => Member::factory(), // overwritten below
        ];

        // Assign member_id ONLY if is_member
        if ($data['is_member']) {
            $data['member_id'] = Member::factory();
        }

        if (static::$userCount == 0) {
            // NORMAL MEMBER (NO ADMIN)
            $data = [
                ...$data,
                'name' => 'Member',
                'email' => 'member@test.com',
                'password' => Hash::make('member1234'),
                'is_admin' => false,
                'is_member' => true,
                'is_teller' => false,
                'is_loan_officer' => false,
                'status' => 'Active',
                'member_id' => Member::factory(),
            ];
        }

        static::$userCount++;
        return $data;
    }

    public function teller()
    {
        return $this->state([
            'is_teller' => true,
            'is_loan_officer' => false,
            'is_admin' => false,
        ]);
    }

    public function loanOfficer()
    {
        return $this->state([
            'is_teller' => false,
            'is_loan_officer' => true,
            'is_admin' => false,
        ]);
    }

    public function admin()
    {
        return $this->state([
            'is_teller' => false,
            'is_loan_officer' => false,
            'is_admin' => true,
        ]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Indicate that the model does not have two-factor authentication configured.
     */
    public function withoutTwoFactor(): static
    {
        return $this->state(fn (array $attributes) => [
            'two_factor_secret' => null,
            'two_factor_recovery_codes' => null,
            'two_factor_confirmed_at' => null,
        ]);
    }

}
