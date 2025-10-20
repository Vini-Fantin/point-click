"use client";

import { getItems } from "../../app/api/item";
import { getPlaces } from "../../app/api/place";
import SelecionarObjeto from "../ui/SelecionarObjeto";
import { useState } from "react";

export default function Cozinha({ room, onFinished }) {
  const [qtdeObjetosSelecionados, setQtdeObjetosSelecionados] = useState(0);
  const [roomScore, setRoomScore] = useState(0);



  function onItemSelection(item) {
    const qtdeAtualizado = qtdeObjetosSelecionados + 1;
    setQtdeObjetosSelecionados(qtdeAtualizado);

    const scoreAtualizado = roomScore + item.score;
    setRoomScore(scoreAtualizado);

    if (qtdeObjetosSelecionados >= 3) {
      onFinished(roomScore); // já selecionou todos os objetos
    }
  }

  return (
    <div className="bg-[url('/cozinha.jpg')] bg-cover w-full h-full">
      <SelecionarObjeto
        x={1140}
        y={800}
        items={room.places.filter((place) => place.id == 11)[0].items}
        onSubmit={onItemSelection}
        maxH={"150px"}
        maxW={"320px"}
      />
      <SelecionarObjeto
        x={800}
        y={570}
        items={room.places.filter((place) => place.id == 12)[0].items}
        onSubmit={onItemSelection}
        maxH={"300px"}
        maxW={"500px"}
      />
      <SelecionarObjeto
        x={1380}
        y={345}
        items={room.places.filter((place) => place.id == 13)[0].items}
        onSubmit={onItemSelection}
        maxH={"200px"}
        maxW={"100px"}
      />
      <SelecionarObjeto
        x={850}
        y={-10}
        items={room.places.filter((place) => place.id == 15)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"150px"}
      />
    </div>
  );
}
