<?php

namespace App;

use App\Group;
use Illuminate\Database\Eloquent\Model;

class SortGroup extends Model
{

    protected $fillable = ['domen', 'order'];

    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }
}
