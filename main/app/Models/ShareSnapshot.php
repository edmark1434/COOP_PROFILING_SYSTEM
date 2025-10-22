<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Account;

class ShareSnapshot extends Model
{
    use HasFactory;

    protected $table = 'share_snapshots';

    protected $fillable = [
        'balance',
        'account_id',
    ];

    protected $casts = [
        'balance' => 'decimal:2',
        'created_at' => 'datetime',
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
    public $timestamps = false;
}
