<?php

namespace App\Http\Controllers;
use App\Models\Room;

class RoomController extends Controller
{
    public function index() {
        $rooms = Room::where('id', '>', 0)->with('places.items')->get();

        if(!$rooms->isEmpty()){
            return response()->json(['data' => $rooms, 'code' => 200], 200);
        }
        return response()->json(['message' => "Nenhuma sala encontrado.", 'code' => 404], 404);
    }

    public function show($id){
        $room = Room::where('id', $id)->with('places.items')->first();

        if($room){
            return response()->json(['data' => $room, 'code' => 200], 200);
        }
        return response()->json(['message' => "Nenhuma sala encontrado.", 'code' => 404], 404);
    }
}
