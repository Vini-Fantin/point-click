"use client";

import { getLeaderboard } from "../../app/api/leaderboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function MainMenu() {
  const router = useRouter();
  const [leaderboardPlayers, setLeaderboardPlayers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      const players = await getLeaderboard();
      setLeaderboardPlayers(players);
    }
    loadLeaderboard();
  }, []);

  function startGame() {
    withReactContent(Swal).fire({
      title: "Coloque seu nome",
      input: "text",
      inputLabel: "Nome",
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Você precisa preencher este campo!";
        } else if (value.length > 45) {
          return "Nome muito grande."
        } else {
          setInputValue(value);
          sessionStorage.setItem("nome", value);
          router.push("/jogar");
        }
      },
    });
  }

  return (
    <div className="bg-gradient-to-r from-green-300 to-lime-400 w-screen h-full flex items-center justify-center flex-col space-y-4">
      <section className="bg-white rounded-md w-4/12 py-12 shadow-lg">
        <h2 className="text-2xl text-center mt-4 py-2 font-semibold bg-gradient-to-r from-green-300 to-lime-400">
          Placar de Ranking
        </h2>
        <ol className="list-decimal list-inside text-xl mt-4 space-y-2 px-32">
          {leaderboardPlayers.map((jogador) => (
            <li key={jogador.id}>
              {jogador.name}: {jogador.score}
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-white rounded-md w-4/12 py-12 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Comece Agora</h1>
        <div>
          <button
            onClick={() => startGame()}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 w-8/12 rounded block cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg mx-auto mt-8"
          >
            Jogar
          </button>
        </div>
      </section>
    </div>
  );
}
