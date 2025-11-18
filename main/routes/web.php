<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// Admin
use App\Http\Controllers\UserInterface\Admin\AdminOverviewController;
use App\Http\Controllers\UserInterface\Admin\AdminTransactionsController;
use App\Http\Controllers\UserInterface\Admin\AdminAccountsController;
use App\Http\Controllers\UserInterface\Admin\AdminMembersController;
use App\Http\Controllers\UserInterface\Admin\AdminLoanController;
use App\Http\Controllers\UserInterface\Admin\AdminStaffController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

// Member
use App\Http\Controllers\UserInterface\Member\MemberLoansController;
use App\Http\Controllers\UserInterface\Member\MemberNotificationsController;

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
        Route::get('/staff/{id}', [AdminStaffController::class, 'viewStaffId'] )->name('staffProfile');
        Route::get('/member-profile/{id}',[AdminMembersController::class,'memberProf'])->name('memberProfile');
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
        Route::get('/overview', function () {
            return Inertia::render('teller/overview', []);
        })->name('overview');
        Route::get('/member-lookup', function () {
            return Inertia::render('teller/member-lookup', []);
        })->name('memberLookup');
        Route::get('/transactions', function () {
            return Inertia::render('teller/transactions', []);
        })->name('transactions');
    });

    Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
        Route::get('/overview', function () {
            return Inertia::render('member/overview',[]);
        })->name('overview');
        Route::get('/my-transactions', function () {
            return Inertia::render('member/my-transactions',[]);
        })->name('myTransactions');
        Route::get('/my-loans', [MemberLoansController::class, 'index'])->name('myLoans');
        Route::get('/notifications', [MemberNotificationsController::class, 'index'])->name('notifications');
        Route::patch('/notifications/{id}/mark-as-read', [MemberNotificationsController::class, 'markAsRead'])->name('notifications.markAsRead');
        Route::patch('/notifications/mark-all-as-read', [MemberNotificationsController::class, 'markAllAsRead'])->name('notifications.markAllAsRead');
    });

    // Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
    //     Route::get('/overview', function () {
    //         return Inertia::render('member/overview',[]);
    //     })->name('overview');
    //     Route::get('/my-transactions', function () {
    //         return Inertia::render('member/my-transactions',[]);
    //     })->name('myTransactions');
    //     Route::get('/my-loans', function () {
    //         return Inertia::render('member/my-loans',[]);
    //     })->name('myLoans');
    //     Route::get('/notifications', function () {
    //         return Inertia::render('member/notifications',[]);
    //     })->name('notifications');
    // });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/forms.php';
