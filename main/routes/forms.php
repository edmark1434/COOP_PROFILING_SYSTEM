<?php

use App\Http\Controllers\UserInterface\LoanOfficer\LoanFormsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserInterface\Admin\AdminOverviewController;
use App\Http\Controllers\UserInterface\Admin\AdminTransactionsController;
use App\Http\Controllers\UserInterface\Admin\AdminAccountsController;
use App\Http\Controllers\UserInterface\Admin\AdminMembersController;
use App\Http\Controllers\UserInterface\Admin\AdminLoanController;
use App\Http\Controllers\UserInterface\Admin\AdminStaffController;
use App\Http\Controllers\UserInterface\Member\MemberFormsController;
use App\Http\Controllers\UserInterface\Teller\TellerFormsController;
use App\Http\Controllers\UserInterface\LoanOfficer\LoanOfficerFormsController;
use App\Http\Controllers\UserInterface\Admin\AdminFormsController;
use App\Http\Controllers\UserInterface\CommonFormsController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('welcome',[]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/add-staff',[AdminFormsController::class,'staffAddFormGet'] )->name('staffAddForm.get');
        Route::post('/add-staff',[AdminFormsController::class,'staffAddFormPost'] )->name('staffAddForm.post');

        Route::get('/register-staff-finger',[AdminFormsController::class,'registerStaffFingerprintGet'] )->name('registerStaffFingerprint.get');
        Route::post('/register-staff-finger',[AdminFormsController::class,'registerStaffFingerprintPost'] )->name('registerStaffFingerprint.post');

        Route::get('/staff/{id}/change-role',[AdminFormsController::class,'staffRoleChangeFormGet'] )->name('staffRoleChangeForm.get');
        Route::post('/staff/{id}/change-role',[AdminFormsController::class,'staffRoleChangeFormPost'] )->name('staffRoleChangeForm.post');
    });

    Route::middleware(['role:loan-officer'])->prefix('loan-officer')->name('loan-officer.')->group(function () {
        Route::get('/loans/{id}/reject',[LoanOfficerFormsController::class,'loanRejectionFormGet'] )->name('loanRejectionForm.get');
        Route::post('/loans/{id}/reject',[LoanOfficerFormsController::class,'loanRejectionFormPost'] )->name('loanRejectionForm.post');
    });

    Route::middleware(['role:teller'])->prefix('teller')->name('teller.')->group(function () {
        Route::get('/add-transaction',[TellerFormsController::class,'transactionFormGet'] )->name('transactionForm.get');
        Route::post('/add-transaction',[TellerFormsController::class,'transactionFormPost'] )->name('transactionForm.post');

        Route::get('/confirm-transaction',[TellerFormsController::class,'confirmTransactionGet'] )->name('confirmTransaction.get');
        Route::post('/confirm-transaction',[TellerFormsController::class,'confirmTransactionPost'] )->name('confirmTransaction.post');

        Route::get('/confirm-member',[TellerFormsController::class,'confirmMemberGet'] )->name('confirmMember.get');
        Route::post('/confirm-member',[TellerFormsController::class,'confirmMemberPost'] )->name('confirmMember.post');

        Route::get('/register-member',[TellerFormsController::class,'memberRegistrationFormGet'] )->name('memberRegistrationForm.get');
        Route::post('/register-member',[TellerFormsController::class,'memberRegistrationFormPost'] )->name('memberRegistrationForm.post');

        Route::get('/register-member-finger',[TellerFormsController::class,'registerMemberFingerprintGet'] )->name('registerMemberFingerprint.get');
        Route::post('/register-member-finger',[TellerFormsController::class,'registerMemberFingerprintPost'] )->name('registerMemberFingerprint.post');
    });

    Route::middleware(['role:member'])->prefix('member')->name('member.')->group(function () {
        Route::get('/apply-for-loan',[MemberFormsController::class,'loanApplicationFormGet'] )->name('loanApplicationForm.get');
        Route::post('/apply-for-loan',[MemberFormsController::class,'loanApplicationFormPost'] )->name('loanApplicationForm.post');
    });

    Route::get('/change-password',[CommonFormsController::class,'passwordChangeFormGet'] )->name('passwordChangeForm.get');
    Route::post('/change-password',[CommonFormsController::class,'passwordChangeFormPost'] )->name('passwordChangeForm.post');

    Route::get('/confirm-staff',[CommonFormsController::class,'confirmStaffGet'] )->name('confirmStaff.get');
    Route::post('/confirm-staff',[CommonFormsController::class,'confirmStaffPost'] )->name('confirmStaff.post');
});
