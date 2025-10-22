<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
}
