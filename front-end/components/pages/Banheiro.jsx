"use client";

import { getItems } from "../../app/api/item";
import { getPlaces } from "../../app/api/place";

import SelecionarObjeto from "../ui/SelecionarObjeto";
import { useState } from "react";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function Banheiro({ room, onFinished }) {
  const [qtdeObjetosSelecionados, setQtdeObjetosSelecionados] = useState(0);
  const [roomScore, setRoomScore] = useState(0);

  function onItemSelection(item) {
    const qtdeAtualizado = qtdeObjetosSelecionados + 1;
    setQtdeObjetosSelecionados(qtdeAtualizado);

    const scoreAtualizado = roomScore + item.score;
    setRoomScore(scoreAtualizado);

    if (qtdeObjetosSelecionados >= 4) {
      withReactContent(Swal).fire({
        icon: "success",
        title: "Sala Completa!",
        text: "Vamos para a próxima...",
      });
      onFinished(roomScore); // já selecionou todos os objetos
    }
  }

  return (
    <div className="bg-[url('/banheiro.jpg')] bg-cover w-full h-full">
      <SelecionarObjeto
        x={420}
        y={800}
        items={room.places.filter((place) => place.id == 6)[0].items}
        onSubmit={onItemSelection}
        maxH={"150px"}
        maxW={"220px"}
      />
      <SelecionarObjeto
        x={800}
        y={470}
        items={room.places.filter((place) => place.id == 7)[0].items}
        onSubmit={onItemSelection}
        maxH={"300px"}
        maxW={"200px"}
      />
      <SelecionarObjeto
        x={860}
        y={830}
        items={room.places.filter((place) => place.id == 8)[0].items}
        onSubmit={onItemSelection}
        maxH={"200px"}
        maxW={"250px"}
      />
      <SelecionarObjeto
        x={200}
        y={480}
        items={room.places.filter((place) => place.id == 9)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"150px"}
      />
      <SelecionarObjeto
        x={1000}
        y={0}
        items={room.places.filter((place) => place.id == 10)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"350px"}
      />
    </div>
  );
}
