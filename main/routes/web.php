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
use App\Http\Controllers\UserInterface\Teller\TellerOverviewController;
use App\Http\Controllers\UserInterface\Teller\TellerTransactionsController;
use App\Http\Controllers\UserInterface\Teller\TellerMemberLookupController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

//LoanOfficer
use App\Http\Controllers\UserInterface\LoanOfficer\OverviewController;
use App\Http\Controllers\UserInterface\LoanOfficer\LoanApplicationsController;
use App\Http\Controllers\UserInterface\LoanOfficer\ActiveLoansController;
use App\Http\Controllers\UserInterface\LoanOfficer\LoanViewController;
use App\Http\Controllers\UserInterface\LoanOfficer\MemberLookUpController;
use App\Http\Controllers\UserInterface\LoanOfficer\ViewActiveLoanController;



// Member
use App\Http\Controllers\UserInterface\Member\MemberOverviewController;
use App\Http\Controllers\UserInterface\Member\MemberTransactionController;
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
        Route::get('/staff/change-role', [AdminStaffController::class, 'redirectChangeRole'])->name('staffChangeRole');
        Route::get('/staff/suspend', [AdminStaffController::class, 'suspendStaff'])->name('staffSuspend');
        Route::get('/staff/{id}', [AdminStaffController::class, 'viewStaffId'] )->name('staffProfile');
        Route::get('/member-profile/{id}',[AdminMembersController::class,'memberProf'])->name('memberProfile');
        Route::get('/loans/{id}', [AdminLoanController::class, 'loanDetails'])->name('loanView');
    });

    Route::middleware(['role:loan-officer'])->prefix('loan-officer')->name('loan-officer.')->group(function () {
        Route::get('/overview', [OverviewController::class, 'index'])->name('overview');
        Route::get('/active-loans',[ActiveLoansController::class, 'index'])->name('active-loans');
        Route::get('/loan-applications', [LoanApplicationsController::class, 'index'])->name('loan-applications');
        Route::get('/loans/{id}', [LoanViewController::class, 'show'])->name('loan-view');
        Route::post('/loans/{id}/approve', [LoanViewController::class, 'approve'])->name('loan-approve');
        Route::get('/member-lookup', [MemberLookUpController::class, 'index'])->name('memberLookup');
        Route::get('/member-lookup/{id}', [MemberLookUpController::class, 'memberProfile'])->name('memberProfile');
        Route::get('/active-loans/{id}', [ViewActiveLoanController::class, 'loanDetails'])->name('loanViewActive');
    });

    Route::middleware(['role:teller'])->prefix('teller')->name('teller.')->group(function () {
        // routes/web.php
    Route::get('/overview', [TellerOverviewController::class, 'index'])->name('overview');
    Route::get('/transactions', [TellerTransactionsController::class, 'index'])->name('transactions');
    Route::get('/member-lookup', [TellerMemberLookupController::class, 'index'])->name('memberLookup');
    Route::get('/member-lookup/{id}', [TellerMemberLookupController::class, 'memberProfile'])->name('memberProfile');
    });

    Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
        Route::get('/overview', [MemberOverviewController::class, 'index'])->name('overview');
        Route::get('/my-transactions', [MemberTransactionController::class, 'index'])->name('myTransactions');
        Route::get('/my-loans', [MemberLoansController::class, 'index'])->name('myLoans');
        Route::get('/notifications', [MemberNotificationsController::class, 'index'])->name('notifications');
        Route::patch('/notifications/{id}/mark-as-read', [MemberNotificationsController::class, 'markAsRead'])->name('notifications.markAsRead');
        Route::patch('/notifications/mark-all-as-read', [MemberNotificationsController::class, 'markAllAsRead'])->name('notifications.markAllAsRead');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/forms.php';
