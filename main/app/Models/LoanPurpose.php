<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Loan;
class LoanPurpose extends Model
{
    use HasFactory;

    protected $table = 'loan_purposes';

    protected $fillable = [
        'name',
    ];

    public function loans()
    {
        return $this->hasMany(Loan::class, 'purpose_id');
    }
    public $timestamps = false;
}
