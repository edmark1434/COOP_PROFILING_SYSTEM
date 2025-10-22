<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Loan extends Model
{
    use HasFactory;

    protected $fillable = [
        'ref_no',
        'amount',
        'interest_rate',
        'term_months',
        'status',
        'remarks',
        'purpose_id',
        'member_id',
    ];

    protected $attributes = [
        'status' => 'PENDING',
    ];

    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function purpose()
    {
        return $this->belongsTo(LoanPurpose::class);
    }

    public function installments()
    {
        return $this->hasMany(Installment::class);
    }
}
