"use client";

import Pontuacao from "../ui/Pontuacao";
import SelecionarObjeto from "../ui/SelecionarObjeto";
import { useState } from "react";

export default function SalaDeEstar({ items, onFinished }) {


  const [qtdeObjetosSelecionados, setQtdeObjetosSelecionados] = useState(0)
  const [roomScore, setRoomScore] = useState(0)

  function onItemSelection(item) {
    const qtdeAtualizado = qtdeObjetosSelecionados + 1;
    setQtdeObjetosSelecionados(qtdeAtualizado)

    const scoreAtualizado = roomScore + item.score;
    setRoomScore(scoreAtualizado)

    if (qtdeObjetosSelecionados >= 4) {
      onFinished(roomScore); // já selecionou todos os objetos
    }
  }

  return (
    <div className="bg-[url('/sala-de-estar2.jpeg')] bg-cover w-full h-full border-2 border-red-600">
      <Pontuacao score={roomScore} />
      <SelecionarObjeto x={350} y={500} items={items} onSubmit={onItemSelection} />
      <SelecionarObjeto x={500} y={300} items={items} onSubmit={onItemSelection} />
      <SelecionarObjeto x={700} y={100} items={items} onSubmit={onItemSelection} />
      <SelecionarObjeto x={1100} y={800} items={items} onSubmit={onItemSelection} />

    </div>

  );

}