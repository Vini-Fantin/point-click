<?php

namespace App\Http\Controllers;
use App\Models\Place;

class PlaceController extends Controller
{
    public function index() {
        $places = Place::where('id', '>', 0)->with('items')->get();

        if(!$places->isEmpty()){
            return response()->json(['data' => $places, 'code' => 200], 200);
        }
        return response()->json(['message' => "Nenhum lugar encontrado.", 'code' => 404], 404);
    }

    public function show($id){
        $place = Place::where('id', $id)->with('items')->first();

        if($place){
            return response()->json(['data' => $place, 'code' => 200], 200);
        }
        return response()->json(['message' => "Nenhum lugar encontrado.", 'code' => 404], 404);
    }
}
