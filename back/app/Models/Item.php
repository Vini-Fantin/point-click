<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Place;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Item extends Model
{

    protected $fillable = [
        'name', 
        'score',
        'place_id'
    ];

    public function place() {
        return $this->belongsTo(Place::class);
    }

}
