"use client";

import withReactContent from "sweetalert2-react-content";
import { getItems } from "../../app/api/item";
import { getPlaces } from "../../app/api/place";
import SelecionarObjeto from "../ui/SelecionarObjeto";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Cozinha({ room, onFinished }) {
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
      title: "Partida Finalizada!",
      text: "Vejamos o resultado...",
    });
    onFinished(roomScore);
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
      <button
        className="bg-lime-400 z-51 rounded-md px-18 py-4 font-bold text-2xl fixed bottom-4 right-0 transform -translate-x-1/2 border-4 border-white "
        onClick={() => confirmation()}
      >
        Próximo
      </button>
    </div>
  );
}
