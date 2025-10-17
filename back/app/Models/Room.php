<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Place;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{

    protected $fillable = [
        'name', 
    ];

    public function places() {
        return $this->hasMany(Place::class);
    }

    public $timestamps = false;
}
