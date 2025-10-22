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
        Schema::create('share_snapshots', function (Blueprint $table) {
            $table->id();
            $table->decimal('balance', 15, 2);
            $table->timestamp('created_at')->useCurrent();
            $table->unsignedBigInteger('account_id');

            $table->foreign('account_id')->references('id')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('share_snapshots');
    }
};
