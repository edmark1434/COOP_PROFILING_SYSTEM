<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Loan;
use App\Models\Transaction;
class Installment extends Model
{
    use HasFactory;
    public const STATUS = ['PENDING','DUE','PAID','OVERDUE'];
    protected $fillable = [
        'due_date',
        'amount',
        'status',
        'loan_id',
        'trans_id',
    ];

    protected $attributes = [
        'status' => 'PENDING',
    ];

    public $timestamps = false; // since migration has no created_at/updated_at

    // 🔗 Relationships
    public function loan()
    {
        return $this->belongsTo(Loan::class,'loan_id');
    }

    public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'trans_id');
    }
}
