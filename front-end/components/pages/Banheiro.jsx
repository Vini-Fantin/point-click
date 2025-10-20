"use client";

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
  }

  function confirmation() {
    withReactContent(Swal).fire({
      icon: "success",
      title: "Sala Completa!",
      text: "Vamos para a próxima...",
    });
    onFinished(roomScore); // já selecionou todos os objetos
  }

  return (
    <div className="bg-[url('/banheiro.jpg')] bg-cover w-full h-full">
      <h1 className="text-2xl">Pontuação do Cômodo: {roomScore}</h1>
      <SelecionarObjeto
        x={420}
        y={825}
        items={room.places.filter((place) => place.id == 6)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"200px"}
      />
      <SelecionarObjeto
        x={800}
        y={450}
        items={room.places.filter((place) => place.id == 7)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"300px"}
      />
      <SelecionarObjeto
        x={860}
        y={800}
        items={room.places.filter((place) => place.id == 8)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"250px"}
      />
      <SelecionarObjeto
        x={200}
        y={480}
        items={room.places.filter((place) => place.id == 9)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"120px"}
      />
      <SelecionarObjeto
        x={900}
        y={0}
        items={room.places.filter((place) => place.id == 10)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"100px"}
      />
      <button
        className="bg-lime-400 z-51 rounded-md px-18 py-4 font-bold text-2xl fixed bottom-4 right-0 transform -translate-x-1/2 border-4 border-white "
        onClick={() => confirmation()}
      >
        Próximo
      </button>
    </div>
  );
}

