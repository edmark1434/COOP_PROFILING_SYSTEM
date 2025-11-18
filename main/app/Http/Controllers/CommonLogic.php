<?php
namespace App\Http\Controllers;

class CommonLogic{

    public static function getInitials($name){
        $words = explode(" ",trim($name));
        $first = $words[0][0] ?? '';
        $last = $words[count($words) - 1][0] ?? '';
        return strtoupper($first . $last);
    }
}