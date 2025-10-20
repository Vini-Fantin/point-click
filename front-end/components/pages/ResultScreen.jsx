"use client";

import { useState, useEffect } from "react";
import { getLeaderboard, updateLeaderboard } from "../../app/api/leaderboard";
import { useRouter } from "next/navigation";

export default function ResultScreen({ resultado }) {
  const router = useRouter();

  const [leaderboardPlayers, setLeaderboardPlayers] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function loadLeaderboard() {
      if (ignore) return;
      ignore = true;

      await updateLeaderboard(resultado);
      const players = await getLeaderboard();
      setLeaderboardPlayers(players);
    }

    loadLeaderboard();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-300 to-lime-400 w-screen h-full flex items-center justify-center">
      <main className="bg-white rounded-md w-4/12 py-12 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Resultado Final</h1>
        <section>
          <p className="text-2xl text-center mt-10 bg-gradient-to-r from-green-300 to-lime-400 shadow-md py-2 ">
            Pontuação Total: {resultado.score}
          </p>
          <h2 className="text-2xl text-center mt-4 py-2 font-semibold">
            Placar de Ranking
          </h2>
          <ol className="list-decimal list-inside text-2xl mt-4 space-y-2 px-32">
            {leaderboardPlayers.map((jogador) => (
              <li key={jogador.id}>
                {jogador.name}: {jogador.score}
              </li>
            ))}
          </ol>
          <button
            onClick={() => router.push("/inicio")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 w-8/12 rounded block cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg mx-auto mt-8"
          >
            Tentar novamente
          </button>
        </section>
      </main>
    </div>
  );
}
