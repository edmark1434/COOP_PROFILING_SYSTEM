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
        // Default description
        $description = $this->faker->sentence(10);

        // Customize description for loan or transaction types
        if (in_array($type, ['Loan Approved', 'Loan Rejected'])) {
            $randomLoanId = $this->faker->unique()->numberBetween(1, 100);
            $description = "{$loanPurpose} - Loan ID: {$randomLoanId}";
        }

        if (in_array($type, ['Transaction Recorded', 'Transaction Updated'])) {
            $randomTransactionId = $this->faker->unique()->$this->faker->unique()->numberBetween(1, 100);
            $description = "{$transType} - Transaction ID: {$randomTransactionId}";
        }

        return [
            'type' => $type,
            'description' => $description,
            'user_id' => User::factory(), // create a related User automatically
            'created_at' => now(),
        ];
    }
}
