<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserInterface\Admin\AdminOverviewController;
use App\Http\Controllers\UserInterface\Admin\AdminTransactionsController;
use App\Http\Controllers\UserInterface\Admin\AdminAccountsController;
use App\Http\Controllers\UserInterface\Admin\AdminMembersController;
use App\Http\Controllers\UserInterface\Admin\AdminLoanController;
use App\Http\Controllers\UserInterface\Admin\AdminStaffController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('welcome',[]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {

    });

    Route::middleware(['role:loan-officer'])->prefix('loan-officer')->name('loan-officer.')->group(function () {

    });

    Route::middleware(['role:teller'])->prefix('teller')->name('teller.')->group(function () {
        Route::get('/transactions/add', function () {
            return Inertia::render('teller/forms/add-transaction',[]);
        })->name('transactionForm');
    });

    Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
        Route::get('/my-loans/apply', function () {
            return Inertia::render('member/forms/apply-for-loan',[]);
        })->name('loanApplicationForm');
    });
});
