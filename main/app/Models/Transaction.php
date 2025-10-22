<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Member;
use App\Models\Installment;
use App\Models\LedgerEntry;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'ref_no',
        'amount',
        'type',
        'member_id',
    ];
    public const TYPES = [
        'SHARE_CAPITAL_CONTRIBUTION',
        'LOAN_DISBURSEMENT',
        'LOAN_PAYMENT',
        'DIVIDEND_REINVESTMENT',
        'DIVIDEND_CREDIT',
    ];
    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function installments()
    {
        return $this->hasMany(Installment::class, 'trans_id');
    }

    public function ledgerEntries()
    {
        return $this->hasMany(LedgerEntry::class, 'trans_id');
    }
    public $timestamps = false;
}
