<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class BiometricData extends Model
{
    use HasFactory;

    protected $table = 'biometric_data';

    protected $fillable = [
        'template',
        'user_id',
    ];

    public $timestamps = false; // since only created_at exists

    protected $casts = [
        'created_at' => 'datetime',
    ];

    // 🔗 Relationship: each biometric record belongs to one user
    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
