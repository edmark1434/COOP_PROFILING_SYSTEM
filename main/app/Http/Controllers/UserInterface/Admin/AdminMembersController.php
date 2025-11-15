<?php

namespace App\Http\Controllers\UserInterface\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Member;
class AdminMembersController extends Controller
{
    public function index()
    {
        $lastNameDesc = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
        }])->orderBy('last_name','desc')->get();
        $lastNameAsc = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
        }])->orderBy('last_name','asc')->get();
        $firstNameAsc = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
        }])->orderBy('first_name','asc')->get();
        $firstNameDesc = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
        }])->orderBy('first_name','desc')->get();
        $typeDesc = Member::with(['accounts' => function ($q) {
            $q->where('type','EQUITY')->orderBy('type', 'desc'); // sort accounts per member
        }])->get();
        $typeAsc = Member::with(['accounts' => function ($q) {
            $q->where('type','EQUITY')->orderBy('type', 'asc'); // sort accounts per member
        }])->get();
        $dateDesc = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
        }])->orderBy('join_date','desc')->get();
        $dateAsc = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
        }])->orderBy('join_date','asc')->get();
        $members = Member::with(['accounts' => function ($q){
            $q->where('type','EQUITY');
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
}
