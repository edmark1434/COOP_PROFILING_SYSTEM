<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AuditLog extends Model
{
    use HasFactory;

    protected $table = 'audit_logs';

    protected $fillable = [
        'type',
        'description',
        'user_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    // Allowed types
    public const TYPES = [
        'LOAN_APPROVAL',
        'LOAN_REJECTION',
        'TRANSACTION_RECORD',
        'TRANSACTION_UPDATE',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
