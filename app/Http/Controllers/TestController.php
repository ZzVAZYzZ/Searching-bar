<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function index()
    {
        $users = DB::table('zoo')->get();
        return view('test', compact('users'));
    }
}
