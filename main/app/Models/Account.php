<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Member;
use App\Models\LedgerEntry;
use App\Models\ShareSnapshot;
class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'status',
        'balance',
        'member_id',
    ];
    
    protected $attributes = [
        'status' => 'ACTIVE',
        'balance' => 0.00,
    ];
    public const STATUS = ['ACTIVE','INACTIVE','CLOSED'];
    public const TYPES = ['ASSET', 'LIABILITY', 'EQUITY', 'INCOME', 'EXPENSE'];

    public $timestamps = false;

    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function ledgerEntries()
    {
        return $this->hasMany(LedgerEntry::class);
    }

    public function shareSnapshots()
    {
        return $this->hasMany(ShareSnapshot::class);
    }
}
