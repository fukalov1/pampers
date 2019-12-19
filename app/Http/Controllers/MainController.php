<?php

namespace App\Http\Controllers;

use App\Group;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index($id='main')
    {
        $groups = Group::orderBy('order')->get();
//        $groups = Group::join('sort_groups', 'sort_groups.group_id', 'groups.id')->where('sort_groups.domen', 'http://gillette-opt.moscow')->get();
//        dd($groups);

        return view($id, ['groups' => $groups]);
    }
}
