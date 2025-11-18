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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->string('ref_no', 20)->unique();
            $table->decimal('amount', 15, 2);
            $table->decimal('interest_rate', 5, 2);
            $table->integer('term_months');
            $table->enum('status',["PENDING","APPROVED","DISBURSED","ONGOING","PAID","OVERDUE","REJECTED"],20)->default('PENDING');
            $table->text('remarks')->nullable();
            $table->unsignedBigInteger('purpose_id');
            $table->unsignedBigInteger('member_id');
            $table->foreign('purpose_id')->references('id')->on('loan_purposes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('member_id')->references('id')->on('members')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
