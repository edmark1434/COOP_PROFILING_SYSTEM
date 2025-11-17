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
    public const STATUS = ['PENDING','APPROVED','DISBURSED','ONGOING','PAID','OVERDUE','REJECTED'];

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
        return $this->belongsTo(Member::class,'member_id');
    }

    public function purpose()
    {
        return $this->belongsTo(LoanPurpose::class,'purpose_id');
    }

    public function installments()
    {
        return $this->hasMany(Installment::class,'loan_id');
    }
    public $timestamps = false;
}
