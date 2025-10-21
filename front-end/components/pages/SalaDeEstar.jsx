"use client";

import SelecionarObjeto from "../ui/SelecionarObjeto";
import { useState } from "react";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function SalaDeEstar({ room, onFinished }) {
  const [qtdeObjetosSelecionados, setQtdeObjetosSelecionados] = useState(0);
  const [roomScore, setRoomScore] = useState(22);

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
    onFinished(roomScore);
  }

  return (
    <div className="bg-[url('/sala-de-estar.jpg')] bg-cover w-full h-full">
      <h1 className="text-2xl">Pontuação do Cômodo: {roomScore}</h1>
      <SelecionarObjeto
        x={420}
        y={800}
        items={room.places.filter((place) => place.id == 1)[0].items}
        onSubmit={onItemSelection}
        maxH={"100px"}
        maxW={"150px"}
      />
      
      <SelecionarObjeto
        x={1500}
        y={640}
        items={room.places.filter((place) => place.id == 2)[0].items}
        onSubmit={onItemSelection}
        maxH={"220px"}
        maxW={"300px"}
      />
      <SelecionarObjeto
        x={1350}
        y={490}
        items={room.places.filter((place) => place.id == 3)[0].items}
        onSubmit={onItemSelection}
        maxH={"200px"}
        maxW={"100px"}
      />
      <SelecionarObjeto
        x={800}
        y={750}
        items={room.places.filter((place) => place.id == 4)[0].items}
        onSubmit={onItemSelection}
        maxH={"180px"}
        maxW={"400px"}
      />
      <SelecionarObjeto
        x={840}
        y={-5}
        items={room.places.filter((place) => place.id == 5)[0].items}
        onSubmit={onItemSelection}
        maxH={"150px"}
        maxW={"280px"}
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
