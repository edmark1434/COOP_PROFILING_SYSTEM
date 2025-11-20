<?php

namespace Database\Factories;

use App\Models\AuditLog;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Transaction;
use App\Models\LoanPurpose;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AuditLog>
 */
class AuditLogFactory extends Factory
{
    protected $model = AuditLog::class;

    public function definition(): array
    {
        $type = $this->faker->randomElement(AuditLog::TYPES);
        $transType = $this->faker->randomElement(Transaction::TYPES);
        $loanPurpose = $this->faker->randomElement(LoanPurpose::TYPES);
        $member = $this->faker->name();
        $role = $this->faker->randomElement(["Teller", "Loan Officer", "Administrator"]);
        $roleUpdate = $this->faker->randomElement(["Teller to Loan Officer", "Loan Officer to Admin", "Loan Officer to Teller"]);

        // Default description
        $description = $this->faker->sentence(10);
        $obj = null;

        // Customize description for loan or transaction types
        if (in_array($type, ['Loan Approved', 'Loan Rejected'])) {
            $randomLoanId = $this->faker->unique()->numberBetween(5000000000, 5099999999);
            $description = "{$loanPurpose} - Loan ID: {$randomLoanId}";
            $obj = [
                'type' => $type,
                'description' => $description,
                'user_id' => User::where('is_loan_officer', true)->inRandomOrder()->first(),
                'created_at' => now(),
            ];
        }

        if (in_array($type, ['Transaction Recorded', 'Transaction Updated'])) {
            $randomTransactionId = $this->faker->unique()->numberBetween(2200000000, 2299999999);
            $description = "{$transType} - Transaction ID: {$randomTransactionId}";
            $obj = [
                'type' => $type,
                'description' => $description,
                'user_id' => User::where('is_teller', true)->inRandomOrder()->first(),
                'created_at' => now(),
            ];
        }

        if (in_array($type, ['Member Registered'])) {
            $randomMemberId = $this->faker->unique()->numberBetween(6700000000, 6799999999);
            $description = "{$member} - Member ID: {$randomMemberId}";
            $obj = [
                'type' => $type,
                'description' => $description,
                'user_id' => User::where('is_teller', true)->inRandomOrder()->first(),
                'created_at' => now(),
            ];
        }

        if (in_array($type, ['Staff Added'])) {
            $description = "{$member} - {$role}";
            $obj = [
                'type' => $type,
                'description' => $description,
                'user_id' => User::where('is_admin', true)->inRandomOrder()->first(),
                'created_at' => now(),
            ];
        }

        if (in_array($type, ['Staff Role Updated'])) {
            $description = "{$member} - {$roleUpdate}";
            $obj = [
                'type' => $type,
                'description' => $description,
                'user_id' => User::where('is_admin', true)->inRandomOrder()->first(),
                'created_at' => now(),
            ];
        }

        return $obj;
    }
}
