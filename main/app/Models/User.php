<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use App\Models\Member;
use App\Models\AuditLog;
use App\Models\Notification;
use App\Models\BiometricData;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $table = 'users';
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_member',
        'is_teller',
        'is_loan_officer',
        'is_admin',
        'member_id',
    ];
    
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public $timestamps = false;

    // Relationships
    public function member()
    {
        return $this->belongsTo(Member::class,'member_id');
    }

    public function auditLogs()
    {
        return $this->hasMany(AuditLog::class,'user_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class,'user_id');
    }

    public function biometricData()
    {
        return $this->hasOne(BiometricData::class,'user_id');
    }
    public function transactions()
    {
        return $this->hasMany(Transaction::class,'user_id');
    }
}
