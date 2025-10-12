<?php

namespace App\Http\Controllers;
use App\Models\Item;

class ItemController extends Controller
{
    public function index() {
        $items = Item::where('id', '>', 0)->with('place')->get();

        if($items){
            return response()->json(['data' => $items, 'code' => 200], 200);
        }
        return response()->json(['message' => "Nenhum item encontrado.", 'code' => 404], 404);
    }
}
