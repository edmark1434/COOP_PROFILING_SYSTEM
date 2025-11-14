<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
use App\Models\Account;
use App\Models\Loan;
use App\Models\Transaction;
class Member extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    public const STATUS = ['ACTIVE','INACTIVE','SUSPENDED','TERMINATED','DECEASED'];
    protected $fillable = [
        'id_coop',
        'first_name',
        'middle_name',
        'last_name',
        'suffix',
        'contact_num',
        'status',
        'join_date',
        'exit_date',
    ];

    protected $attributes = [
        'status' => 'ACTIVE',
    ];

    public $timestamps = false;

    // Relationships
    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
