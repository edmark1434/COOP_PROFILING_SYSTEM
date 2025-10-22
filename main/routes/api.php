<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\InstallmentController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\AuditLogController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\LedgerEntryController;
use App\Http\Controllers\ShareSnapshotController;
use App\Http\Controllers\LoanPurposeController;
use App\Http\Controllers\BiometricDataController;
use App\Http\Controllers\SettingController;

// Users
Route::resource('users', UserController::class);

// Members
Route::resource('members', MemberController::class);

// Accounts
Route::resource('accounts', AccountController::class);

// Loans
Route::resource('loans', LoanController::class);

// Installments
Route::resource('installments', InstallmentController::class);

// Transactions
Route::resource('transactions', TransactionController::class);

// Audit Logs
Route::resource('audit-logs', AuditLogController::class);

// Notifications
Route::resource('notifications', NotificationController::class);

// Ledger Entries
Route::resource('ledger-entries', LedgerEntryController::class);

// Share Snapshots
Route::resource('share-snapshots', ShareSnapshotController::class);

// Loan Purposes
Route::resource('loan-purposes', LoanPurposeController::class);

// Biometric Data
Route::resource('biometric-data', BiometricDataController::class);

// Settings
Route::resource('settings', SettingController::class);