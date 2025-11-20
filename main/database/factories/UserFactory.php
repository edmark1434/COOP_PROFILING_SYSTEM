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

        // FIXED: special users
        switch (static::$userCount) {
            case 0:
                // SUPER ADMIN
                $data = [
                    ...$data,
                    'name' => 'Admin',
                    'email' => 'admin@test.com',
                    'password' => Hash::make('admin1234'),
                    'is_admin' => true,
                    'is_member' => false,
                    'is_teller' => false,
                    'is_loan_officer' => false,
                    'status' => 'Active',
                    'member_id' => null,
                ];
                break;

            case 1:
                // TELLER
                $data = [
                    ...$data,
                    'name' => 'Teller',
                    'email' => 'teller@test.com',
                    'password' => Hash::make('teller1234'),
                    'is_admin' => false,
                    'is_member' => false,
                    'is_teller' => true,
                    'is_loan_officer' => false,
                    'status' => 'Active',
                    'member_id' => null,
                ];
                break;

            case 2:
                // LOAN OFFICER
                $data = [
                    ...$data,
                    'name' => 'Loan Officer',
                    'email' => 'loanofficer@test.com',
                    'password' => Hash::make('loanofficer1234'),
                    'is_admin' => false,
                    'is_member' => false,
                    'is_teller' => false,
                    'is_loan_officer' => true,
                    'status' => 'Active',
                    'member_id' => null,
                ];
                break;

            case 3:
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
                break;
        }

        static::$userCount++;
        return $data;
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
    public function configure()
    {
        return $this->afterCreating(function (User $user) {
            AuditLog::factory()
                ->count(rand(1,3))
                ->for($user,'user')  // sets member_id
                ->create();
        });
    }
}
