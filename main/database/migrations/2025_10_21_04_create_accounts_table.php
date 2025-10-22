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
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string("name",100);
            $table->enum("type",["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"],20);
            $table->enum("status",["ACTIVE","INACTIVE"],20)->default("ACTIVE");
            $table->decimal("balance",15,2)->default(0.00);
            $table->unSignedBigInteger('member_id')->nullable();
            $table->foreign('member_id')->references('id')->on('members')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
