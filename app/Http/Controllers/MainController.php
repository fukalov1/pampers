<?php

namespace App\Http\Controllers;

use App\Group;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        $groups = Group::all();
//        $groups = Group::join('sort_groups', 'sort_groups.group_id', 'groups.id')->where('sort_groups.domen', 'http://gillette-opt.moscow')->get();
//        dd($groups);

        return view('main', ['groups' => $groups]);
    }
}
