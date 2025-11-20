<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Member;
use App\Models\LoanPurpose;
use App\Models\Installment;
class Loan extends Model
{
    use HasFactory;
    public const STATUS = ['Pending','Approved','Disbursed','Ongoing','Paid','Overdue','Rejected'];

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
        'status' => 'Pending',
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
    public $timestamps = true;
}
