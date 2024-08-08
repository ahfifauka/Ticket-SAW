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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_ticket');
            $table->foreignId('requester')->onDelete('set NULL');
            $table->foreignId('case_category_id')->onDelete('set NULL');
            $table->foreignId('level')->onDelete('set NULL');
            $table->longText('deskripsi')->nullable();
            $table->foreignId('teknisi')->nullable()->onDelete('set NULL');
            $table->foreignId('status_id')->onDelete('set NULL');
            $table->foreignId('last_updater')->nullable()->onDelete('set NULL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
