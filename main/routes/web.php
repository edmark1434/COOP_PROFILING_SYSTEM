<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserInterface\Admin\AdminOverviewController;
use App\Http\Controllers\UserInterface\Admin\AdminTransactionsController;
use App\Http\Controllers\UserInterface\Admin\AdminAccountsController;
use App\Http\Controllers\UserInterface\Admin\AdminMembersController;
use App\Http\Controllers\UserInterface\Admin\AdminLoanController;
use App\Http\Controllers\UserInterface\Admin\AdminStaffController;
use App\Http\Controllers\UserInterface\Teller\TellerOverviewController;
use App\Http\Controllers\UserInterface\Teller\TellerTransactionsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('welcome',[]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard',[AuthenticatedSessionController::class,'validateRole'])->name('dashboard');
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard',[AdminOverviewController::class,'index'])->name('dashboard');
        Route::get('/overview',[AdminOverviewController::class,'index'])->name('overview');
        Route::get('/accounts', [AdminAccountsController::class, 'index'])->name('accounts');
        Route::get('/transactions', [AdminTransactionsController::class, 'index'])->name('transactions');
        Route::get('/members',[AdminMembersController::class,'index'])->name('members');
        Route::get('/loans', [AdminLoanController::class, 'index'])->name('loans');
        Route::get('/staff', [AdminStaffController::class, 'index'])->name('staff');
        Route::get('/staff/id', function () {
            return Inertia::render('admin/staff-profile', []);
        })->name('staffProfile');
        Route::get('/member-profile', function () {
            return Inertia::render('admin/member-profile',[]);
        })->name('memberProfile');
        Route::get('/loans/id', function () {
            return Inertia::render('admin/loan-view', []);
        })->name('loan-view');
    });

    Route::middleware(['role:loan-officer'])->prefix('loan-officer')->name('loan-officer.')->group(function () {
        Route::get('/overview', function () {
            return Inertia::render('loan-officer/overview',[]);
        })->name('overview');
        Route::get('/active-loans', function () {
            return Inertia::render('loan-officer/active-loans',[]);
        })->name('activeLoans');
        Route::get('/loan-applications', function () {
            return Inertia::render('loan-officer/loan-applications', []);
        })->name('loanApplications');
        Route::get('/member-lookup', function () {
            return Inertia::render('loan-officer/member-lookup', []);
        })->name('memberLookup');
        Route::get('/loans/id', function () {
            return Inertia::render('loan-officer/loan-view', []);
        })->name('loan-view');
    });

    Route::middleware(['role:teller'])->prefix('teller')->name('teller.')->group(function () {
        // routes/web.php
    Route::get('/overview', [TellerOverviewController::class, 'index'])->name('overview');
    Route::get('/transactions', [TellerTransactionsController::class, 'index'])->name('transactions');
        Route::get('/member-lookup', function () {
            return Inertia::render('teller/member-lookup', []);
        })->name('memberLookup');
    });

    Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
        Route::get('/overview', function () {
            return Inertia::render('member/overview',[]);
        })->name('overview');
        Route::get('/my-transactions', function () {
            return Inertia::render('member/my-transactions',[]);
        })->name('myTransactions');
        Route::get('/my-loans', function () {
            return Inertia::render('member/my-loans',[]);
        })->name('myLoans');
        Route::get('/notifications', function () {
            return Inertia::render('member/notifications',[]);
        })->name('notifications');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/forms.php';
