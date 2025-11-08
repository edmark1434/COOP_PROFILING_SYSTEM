<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome',[]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard',[]);
    })->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {

        Route::get('/overview', function () {
            return Inertia::render('admin/overview',[]);
        })->name('overview');
        Route::get('/members', function () {
            return Inertia::render('admin/members',[]);
        })->name('members');
        Route::get('/accounts', function () {
            return Inertia::render('admin/accounts', []);
        })->name('accounts');
        Route::get('/loans', function () {
            return Inertia::render('admin/loans', []);
        })->name('loans');
        Route::get('/transactions', function () {
            return Inertia::render('admin/transactions', []);
        })->name('transactions');
        Route::get('/staff', function () {
            return Inertia::render('admin/staff', []);
        })->name('staff');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/api.php';
