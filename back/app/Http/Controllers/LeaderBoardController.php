<?php

namespace App\Http\Controllers;
use App\Models\LeaderBoard;
use Illuminate\Http\Request;

class LeaderBoardController extends Controller
{
    public function store(Request $request)
    {
        $name = $request->input('name');
        $score = $request->input('score');

        if (!$name || !is_numeric($score)) {
            return response()->json(['message' => 'Nome ou pontuação inválida', 'code' => 400], 400);
        }

        $topPlayers = LeaderBoard::orderBy('score', 'desc')->take(10)->get();

        if ($topPlayers->count() < 10) {
            LeaderBoard::create([
                'name' => $name,
                'score' => $score
            ]);
            return response()->json(['data' => 'Adicionado ao leaderboard.', 'code' => 201], 201);
        }

        $minScore = $topPlayers->last();

        if ($score > $minScore->score) {
            $minScore->delete();

            LeaderBoard::create([
                'name' => $name,
                'score' => $score
            ]);

            return response()->json(['data' => 'Entrou no top 10!', 'code' => 201], 201);
        }

        return response()->json(['data' => 'Pontuação insuficiente para o top 10.', 'code' => 200], 200);
    }
    
    public function index() {
        $names = LeaderBoard::orderBy('score', 'desc')->get();

        if (!$names->isEmpty()) {
            return response()->json(['data' => $names, 'code' => 200], 200);
        }

        return response()->json(['message' => 'Nenhum user encontrado.', 'code' => 404], 404);
    }
}
