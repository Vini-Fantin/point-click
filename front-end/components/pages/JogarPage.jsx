"use client";

import { useState, useEffect } from "react";
import SalaDeEstar from "./SalaDeEstar";
import Banheiro from "./Banheiro";
import Cozinha from "./Cozinha";
import ResultScreen from "./ResultScreen";
import GameHUD from "../ui/GameHUD";

export default function JogarPage({ rooms }) {
  const [totalScore, setTotalScore] = useState(0);
  const [roomsCleared, setRoomsCleared] = useState(0);
  const [jogadorNome, setJogadorNome] = useState("");
  const [mistakes, setMistakes] = useState([]);
  const [currentScene, setCurrentScene] = useState(null);
  const [previousScene, setPreviousScene] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionMs = 250;

  useEffect(() => {
    const nome = sessionStorage.getItem("nome");
    if (nome) setJogadorNome(nome);
  }, []);

  function handleRoomFinished({ score, mistakes: roomMistakes }) {
    setTotalScore(totalScore + (score || 0));
    setMistakes((prev) => [...prev, ...(roomMistakes || [])]);
    setRoomsCleared(roomsCleared + 1);
  }
  
  function renderScene(index) {
    if (index === 0) return <SalaDeEstar room={rooms[0]} onFinished={handleRoomFinished} />;
    if (index === 1) return <Banheiro room={rooms[1]} onFinished={handleRoomFinished} />;
    if (index === 2) return <Cozinha room={rooms[2]} onFinished={handleRoomFinished} />;
    return <ResultScreen resultado={{ nome: jogadorNome, score: totalScore, mistakes }} />;
  }
  
  useEffect(() => {
    // on mount
    setCurrentScene(renderScene(roomsCleared));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    // on scene change
    const next = renderScene(roomsCleared);
    setPreviousScene(currentScene);
    setCurrentScene(next);
    setIsTransitioning(true);
    const t = setTimeout(() => {
      setPreviousScene(null);
      setIsTransitioning(false);
    }, transitionMs);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomsCleared]);
  
  return (
    <div className="h-full w-full">
      {roomsCleared < 3 && (
        <GameHUD score={totalScore} roomIndex={roomsCleared} totalRooms={3} playerName={jogadorNome} />
      )}
      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        {previousScene && (
          <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
            {previousScene}
          </div>
        )}
        <div className={isTransitioning ? "fade-in" : ""} style={{ position: "absolute", inset: 0, zIndex: 2 }}>
          {currentScene}
        </div>
      </div>
    </div>
  );
}
