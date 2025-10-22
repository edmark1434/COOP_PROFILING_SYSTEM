<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('ref_no', 10)->unique();
            $table->decimal('amount', 15, 2);
            $table->enum('type', [
                'SHARE_CAPITAL_CONTRIBUTION',
                'LOAN_DISBURSEMENT',
                'LOAN_PAYMENT',
                'DIVIDEND_REINVESTMENT',
                'DIVIDEND_CREDIT'
            ]);
            $table->timestamp('created_at')->useCurrent();
            $table->unsignedBigInteger('member_id');

            $table->foreign('member_id')->references('id')->on('members')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
