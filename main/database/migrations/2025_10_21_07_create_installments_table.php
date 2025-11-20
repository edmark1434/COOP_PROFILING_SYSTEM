<?php

use App\Models\Installment;
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
        Schema::create('installments', function (Blueprint $table) {
            $table->id();
            $table->date('due_date');
            $table->decimal('amount', 15, 2);
            $table->enum('status',Installment::STATUS, 20)->default('Pending');
            $table->unsignedBigInteger('loan_id');
            $table->unsignedBigInteger('trans_id')->nullable();

            $table->foreign('loan_id')->references('id')->on('loans')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('trans_id')->references('id')->on('transactions')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('installments');
    }
};
