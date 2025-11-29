"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

export default function ResultScreen({ resultado }) {
  const router = useRouter();

  const [leaderboardPlayers, setLeaderboardPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const mistakes = resultado?.mistakes || [];

  useEffect(() => {
    let cancelled = false;

    async function loadLeaderboard() {
      try {
        setLoading(true);
        setError("");
        const payload = {
          nome: (resultado?.nome || "").trim(),
          score: resultado?.score || 0,
        };
        const res = await fetch("/api/leaderboard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const json = await res.json();
        if (!cancelled) setLeaderboardPlayers(json?.data || []);
      } catch (e) {
        if (!cancelled) setError("Não foi possível carregar o ranking.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadLeaderboard();
    return () => {
      cancelled = true;
    };
  }, [resultado?.nome, resultado?.score]);

  return (
    <div className="relative w-screen h-full min-h-screen flex items-center justify-center flex-col gap-8 p-6 bg-gradient-to-br from-[#bd1b66] to-[#fe981b]">
      <div className="bg-white w-11/12 md:w-6/12 p-8 rounded-md">
        <div className="text-center mb-">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            Resultado Final
          </h1>
          <p className="text-[--color-muted] mt-3 text-lg md:text-xl">
            Parabéns! Veja sua pontuação e o ranking.
          </p>
        </div>

        <Card className="w-full p-6 text-center">
          <p className="text-2xl">
            Pontuação Total: <strong>{resultado.score}</strong>
          </p>
        </Card>

        <Card className="w-full p-6 mt-1">
          <h2 className="text-2xl font-semibold mb-4">Placar de Ranking</h2>
          {loading ? (
            <div className="mt-2 flex justify-center">
              <Loader label="Carregando ranking..." />
            </div>
          ) : error ? (
            <p className="text-[--color-muted] mt-2">{error}</p>
          ) : (
            <ol className="list-decimal list-inside text-lg space-y-2">
              {leaderboardPlayers?.length ? (
                leaderboardPlayers.map((jogador) => (
                  <li key={jogador.id} className="flex justify-between">
                    <span className="font-medium">{jogador.name}</span>
                    <span className="text-[--color-muted]">
                      {jogador.score} pts
                    </span>
                  </li>
                ))
              ) : (
                <li className="text-[--color-muted]">
                  Ainda sem jogadores no ranking.
                </li>
              )}
            </ol>
          )}
        </Card>

        <Card className="w-full p-6 mt-2">
          <h2 className="text-2xl font-semibold mb-2">Itens para revisar</h2>
          {mistakes.length === 0 ? (
            <p className="text-[--color-muted]">
              Nenhum item abaixo de 3 pontos foi selecionado. Excelente!
            </p>
          ) : (
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              {mistakes.map((m, idx) => (
                <li key={`${m.room}-${m.placeId}-${idx}`}>
                  <span className="font-medium">{m.itemName}</span>
                  <span className="text-[--color-muted]"> — {m.room}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <div className="text-center mt-2">
          <Button
            onClick={() => router.push("/")}
            aria-label="Voltar ao início"
            className="w-9/12 md:w-6/12 relative overflow-hidden border-none bg-[#d94a1a] text-white text-2xl font-semibold py-5 rounded-md transition-all duration-300 hover:bg-[#b83a13] focus:outline-none focus:ring-4 focus:ring-[#ffd9d0] group"
          >
            <span className="inline-block relative transition-all duration-300 group-hover:pr-6">
              Tentar novamente
              <span className="absolute opacity-0 right-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:right-0">
                »
              </span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
