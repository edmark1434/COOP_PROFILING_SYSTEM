<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
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
            'Loan Approved',
            'Loan Rejected',
            'Member Registered',
            'Transaction Recorded',
            'Transaction Updated',
            'Staff Added',
            'Staff Role Updated'
        ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public $timestamps = false;
}
