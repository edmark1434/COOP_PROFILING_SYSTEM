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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('id_coop', 50)->unique();
            $table->string('first_name', 50);
            $table->string('middle_name', 100)->nullable();
            $table->string('last_name', 100);
            $table->string('suffix', 20)->nullable();
            $table->string('contact_num', 20)->unique();
            $table->enum('status',["ACTIVE", "INACTIVE", "SUSPENDED", "TERMINATED", "DECEASED"], 20)->default('ACTIVE');
            $table->date('join_date');
            $table->date('exit_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
