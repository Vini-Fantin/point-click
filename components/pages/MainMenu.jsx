"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

export default function MainMenu() {
  const router = useRouter();
  const [leaderboardPlayers, setLeaderboardPlayers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      setLoading(true);
      try {
        const res = await fetch("/api/leaderboard", { cache: "no-store" });
        const json = await res.json();
        setLeaderboardPlayers(json?.data || []);
      } finally {
        setLoading(false);
      }
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
    <div className="relative w-screen h-full min-h-screen flex items-center justify-center flex-col gap-8 p-6 bg-gradient-to-br from-[#bd1b66] to-[#fe981b]">
      <div className="bg-white w-11/12 md:w-6/12 p-8 rounded-md">

        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            Cuidados & Saúde
          </h1>
          <p className="text-[--color-muted] mt-3 text-lg md:text-xl">Aprenda jogando: complete os cômodos no seu ritmo. Clique com calma em cada localidade para escolher o item correto.</p>
        </div>

        <Card className="w-full p-6">
          <h2 className="text-2xl font-semibold mb-4">Placar de Ranking</h2>
          {loading ? (
            <Loader label="Carregando ranking..." />
          ) : (
            <ol className="list-decimal list-inside text-lg space-y-2">
              {leaderboardPlayers?.length ? (
                leaderboardPlayers.map((jogador) => (
                  <li key={jogador.id} className="flex justify-between">
                    <span className="font-medium">{jogador.name}</span>
                    <span className="text-[--color-muted]">{jogador.score} pts</span>
                  </li>
                ))
              ) : (
                <li className="text-[--color-muted]">Ainda sem jogadores no ranking.</li>
              )}
            </ol>
          )}
        </Card>

        <Card className="w-full p-6 text-center">
          <h2 className="text-2xl font-semibold">Comece Agora</h2>
          <div className="mt-6">
            <Button
              size="lg"
              onClick={startGame}
              aria-label="Iniciar jogo - abrir diálogo para inserir nome"
              className="w-9/12 md:w-6/12 relative overflow-hidden border-none bg-[#d94a1a] text-white text-2xl font-semibold py-5 rounded-md transition-all duration-300 hover:bg-[#b83a13] focus:outline-none focus:ring-4 focus:ring-[#ffd9d0] group"
            >
              <span className="inline-block relative transition-all duration-300 group-hover:pr-6">
                Iniciar
                <span className="sr-only"> — abre caixa para inserir o seu nome</span>
                <span className="absolute opacity-0 right-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:right-0">
                  »
                </span>
              </span>
            </Button>

          </div>
        </Card>


      </div>
    </div>
  );
}
