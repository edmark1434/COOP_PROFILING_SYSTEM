<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserInterface\Admin\AdminOverviewController;
use App\Http\Controllers\UserInterface\Admin\AdminTransactionsController;
use App\Http\Controllers\UserInterface\Admin\AdminAccountsController;
use App\Http\Controllers\UserInterface\Admin\AdminMembersController;
use App\Http\Controllers\UserInterface\Admin\AdminLoanController;
use App\Http\Controllers\UserInterface\Admin\AdminStaffController;
use App\Http\Controllers\UserInterface\Member\MemberFormsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('welcome',[]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/add-staff', function () {
            return Inertia::render('admin/forms/add-staff',[]);
        })->name('staffAddForm');
    });

    Route::middleware(['role:loan-officer'])->prefix('loan-officer')->name('loan-officer.')->group(function () {
        Route::get('/loan-applications/reject', function () {
            return Inertia::render('loan-officer/forms/reject-loan',[]);
        })->name('loanRejectionForm');
    });

    Route::middleware(['role:teller'])->prefix('teller')->name('teller.')->group(function () {
        Route::get('/transactions/add', function () {
            return Inertia::render('teller/forms/add-transaction',[]);
        })->name('transactionForm');
        Route::get('/transactions/add/confirm', function () {
            return Inertia::render('teller/forms/confirm-transaction',[]);
        })->name('confirmTransaction');
        Route::get('/confirm-member', function () {
            return Inertia::render('teller/forms/confirm-member',[]);
        })->name('confirmMember');
        Route::get('/confirm-staff', function () {
            return Inertia::render('teller/forms/confirm-staff',[]);
        })->name('confirmStaff');
        Route::get('/register-member', function () {
            return Inertia::render('teller/forms/register-member',[]);
        })->name('memberRegistrationForm');
    });

    Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
        Route::get('/my-loans/apply',[MemberFormsController::class,'loanIndex'] )->name('loanApplicationForm.get');
        Route::post('/my-loans/apply',[MemberFormsController::class,'loanStore'] )->name('loanApplicationForm.post');
    });
});
