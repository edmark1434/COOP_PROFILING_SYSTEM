<?php

namespace App\Http\Controllers\UserInterface\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CommonLogic;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Loan;
use App\Models\User;
use App\Models\Transaction;
use App\Http\Controllers\UserInterface\LoanOfficer\MemberLookUpController;
class AdminMembersController extends Controller
{
    public function index()
    {
        $lastNameDesc = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->orderBy('last_name','desc')->get();
        $lastNameAsc = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->orderBy('last_name','asc')->get();
        $firstNameAsc = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->orderBy('first_name','asc')->get();
        $firstNameDesc = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->orderBy('first_name','desc')->get();
        $typeDesc = Member::with(['accounts' => function ($q) {
            $q->where('type','Equity')->orderBy('type', 'desc'); // sort accounts per member
        }])->get();
        $typeAsc = Member::with(['accounts' => function ($q) {
            $q->where('type','Equity')->orderBy('type', 'asc'); // sort accounts per member
        }])->get();
        $dateDesc = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->orderBy('join_date','desc')->get();
        $dateAsc = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->orderBy('join_date','asc')->get();
        $members = Member::with(['accounts' => function ($q){
            $q->where('type','Equity');
        }])->get();
        return Inertia::render('admin/members',[
            'members' => $members,
            'lastNameDesc' => $lastNameDesc,
            'lastNameAsc' => $lastNameAsc,
            'firstNameAsc' => $firstNameAsc,
            'firstNameDesc' => $firstNameDesc,
            'typeDesc' => $typeDesc,
            'typeAsc' => $typeAsc,
            'dateDesc' => $dateDesc,
            'dateAsc' => $dateAsc,
        ]);
    }
    public function memberProf($id)
    {
        $memLookUp = new MemberLookUpController();
        $member = Member::with(['accounts','user'])->find($id);
        if(!$member)return redirect()->route('admin.members');
        $user = User::where('member_id',$id)->first();

        $name = $member->first_name . " " . $member->last_name;
        $initial = CommonLogic::getInitials($name);
        $inactiveStatus = ['PAID','REJECTED','PENDING'];
        // BASE QUERIES
        $transactionsBase = Transaction::with(['member','user'])
            ->where('member_id', $id);

        $loansBase = Loan::with(['member','purpose'])
            ->whereNotIn('loans.status', $inactiveStatus)
            ->where('loans.member_id', $id);

        // Sort by Member Name
        $transactionsAscName = $transactionsBase->clone()
            ->join('members', 'transactions.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'asc')
            ->select('transactions.*')
            ->get();

        $transactionsDescName = $transactionsBase->clone()
            ->join('members', 'transactions.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'desc')
            ->select('transactions.*')
            ->get();

        // Sort by Type
        $transactionsAscType = $transactionsBase->clone()
            ->orderBy('type', 'asc')
            ->get();

        $transactionsDescType = $transactionsBase->clone()
            ->orderBy('type', 'desc')
            ->get();

        // Sort by Date
        $transactionsAscDate = $transactionsBase->clone()
            ->orderBy('created_at', 'asc')
            ->get();

        $transactionsDescDate = $transactionsBase->clone()
            ->orderBy('created_at', 'desc')
            ->get();

        // Sort by Member Name
        $loansAscName = $loansBase->clone()
            ->join('members', 'loans.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'asc')
            ->select('loans.*')
            ->get();

        $loansDescName = $loansBase->clone()
            ->join('members', 'loans.member_id', '=', 'members.id')
            ->orderBy('members.first_name', 'desc')
            ->select('loans.*')
            ->get();

        // Sort by Purpose Type
        $loansAscType = $loansBase->clone()
            ->join('loan_purposes', 'loans.purpose_id', '=', 'loan_purposes.id')
            ->orderBy('loan_purposes.name', 'asc')
            ->select('loans.*')
            ->get();

        $loansDescType = $loansBase->clone()
            ->join('loan_purposes', 'loans.purpose_id', '=', 'loan_purposes.id')
            ->orderBy('loan_purposes.name', 'desc')
            ->select('loans.*')
            ->get();

        // Sort by Date
        $loansAscDate = $loansBase->clone()
            ->orderBy('created_at', 'asc')
            ->get();
        $loansDescDate = $loansBase->clone()
            ->orderBy('created_at', 'desc')
            ->get();
        $memberName = trim(
                ($member->first_name ?? "") . " " .
                ($member->middle_name ?? "") . " " .
                ($member->last_name ?? "") . " " .
                ($member->suffix ?? "")
            );
        $delinquencyRate = $memLookUp->calculateDelinquencyRate($member->id);
        return Inertia::render('admin/member-profile', [
            'member'=> [
                'id' => $member->id,
                'id_coop' => $member->id_coop,
                'shareCapital' => $member->accounts->first()->balance,
                'dateJoined' => $member->join_date,
                'email' => $user->email,
                'contact' => $member->contact_num,
                'status' => $member->status,
                'initial' => $initial,
                'name' => $memberName,
                'delinquencyRate' => $delinquencyRate
            ],
            'transactionsAscName' => $transactionsAscName,
            'transactionsDescName' => $transactionsDescName,
            'transactionsAscType' => $transactionsAscType,
            'transactionsDescType' => $transactionsDescType,
            'transactionsAscDate' => $transactionsAscDate,
            'transactionsDescDate' => $transactionsDescDate,

            'loansAscName' => $loansAscName,
            'loansDescName' => $loansDescName,
            'loansAscType' => $loansAscType,
            'loansDescType' => $loansDescType,
            'loansAscDate' => $loansAscDate,
            'loansDescDate' => $loansDescDate,
        ]);
    }

}
