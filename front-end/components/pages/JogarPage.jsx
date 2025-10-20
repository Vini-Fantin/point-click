"use client";

import { useState, useEffect } from "react";
import SalaDeEstar from "./SalaDeEstar";
import Banheiro from "./Banheiro";
import Cozinha from "./Cozinha";
import ResultScreen from "./ResultScreen";

export default function JogarPage({ rooms }) {
  const [totalScore, setTotalScore] = useState(0);
  const [roomsCleared, setRoomsCleared] = useState(0);
  const [jogadorNome, setJogadorNome] = useState("");

  useEffect(() => {
    const nome = sessionStorage.getItem("nome");
    if (nome) setJogadorNome(nome);
  }, []);

  function handleRoomFinished(roomScore) {
    setTotalScore(totalScore + roomScore);
    setRoomsCleared(roomsCleared + 1);
  }
  
  return (
    <div className="h-full">
      {roomsCleared === 0 && (
        <SalaDeEstar room={rooms[0]} onFinished={handleRoomFinished} />
      )}
      {roomsCleared === 1 && (
        <Banheiro room={rooms[1]} onFinished={handleRoomFinished} />
      )}
      {roomsCleared === 2 && (
        <Cozinha room={rooms[2]} onFinished={handleRoomFinished} />
      )}

      {roomsCleared > 2 && (
        <ResultScreen resultado={{ nome: jogadorNome, score: totalScore }} />
      )}
    </div>
  );
}
