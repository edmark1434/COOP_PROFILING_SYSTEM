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
        'status' => 'Active',
        'balance' => 0.00,
    ];
    public const STATUS = ['Active','Inactive','Closed'];
    public const TYPES = ['Asset', 'Liability', 'Equity', 'Income', 'Expense'];

    public $timestamps = false;

    public function member()
    {
        return $this->belongsTo(Member::class,'member_id');
    }

    public function ledgerEntries()
    {
        return $this->hasMany(LedgerEntry::class,'account_id');
    }

    public function shareSnapshots()
    {
        return $this->hasMany(ShareSnapshot::class,'account_id');
    }
}
