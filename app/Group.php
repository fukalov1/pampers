<?php

namespace App;
use App\SortGroup;
use App\Good;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function goods()
    {
        return $this->hasMany(Good::class);
    }

    public function sort_groups()
    {
        return $this->hasMany(SortGroup::class, 'group_id');
    }

}
