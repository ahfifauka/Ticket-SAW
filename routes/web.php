<?php

use App\Http\Controllers\JabatanController;
use App\Http\Controllers\AkunKaryawanController;
use App\Http\Controllers\CaseCategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkalaLevelController;
use App\Http\Controllers\TeknisiController;
use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('master_jabatan', JabatanController::class)->only('index', 'store', 'update', 'destroy');
    Route::resource('skala_level', SkalaLevelController::class)->only('index', 'store', 'update', 'destroy');
    Route::resource('akun_karyawan',  AkunKaryawanController::class)->only('index', 'store', 'update', 'destroy');
    Route::resource('teknisi', TeknisiController::class)->only('index', 'store', 'update', 'destroy');
    Route::resource('case_category', CaseCategoryController::class)->only('index', 'store', 'update', 'destroy');

    Route::get('open_ticket', [TicketController::class, 'open_ticket'])->name('ticket.open');
    Route::post('open_ticket', [TicketController::class, 'store_ticket'])->name('ticket.store');

    Route::get('new_ticket', [TicketController::class, 'new_ticket'])->name('ticket.new');
});

require __DIR__ . '/auth.php';
