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
  const [selected, setSelected] = useState({});



  function onItemSelection(item) {
    const qtdeAtualizado = qtdeObjetosSelecionados + 1;
    setQtdeObjetosSelecionados(qtdeAtualizado);

    const scoreAtualizado = roomScore + item.score;
    setRoomScore(scoreAtualizado);
    setSelected((prev) => ({ ...prev, [item.id]: item }));
  }

  function confirmation() {
    withReactContent(Swal).fire({
      icon: "success",
      title: "Partida Finalizada!",
      text: "Vejamos o resultado...",
    });
    const mistakes = [];
    [11,12,13,15].forEach((pid) => {
      const place = room.places.find((p) => p.id == pid);
      if (!place) return;
      const chosen = Object.values(selected).find((i) => place.items.some((pi) => pi.id === i.id));
      const defaultItem = place.items[0];
      if ((chosen?.score ?? defaultItem.score) <= 3 && chosen?.id !== defaultItem.id) {
        mistakes.push({ room: room.name || "Cozinha", placeId: place.id, itemName: chosen?.name || defaultItem.name });
      }
    });
    onFinished({ score: roomScore, mistakes });
  }

  return (
    <div className="bg-[url('/cozinha.jpg')] bg-cover bg-center w-screen h-screen relative overflow-hidden">
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
        className="bg-green-500 hover:bg-[--color-brand-700] text-white z-51 rounded-md px-8 py-3 font-bold text-xl fixed bottom-6 right-6 shadow-lg"
        onClick={confirmation}
      >
        Finalizar Jogo
      </button>
    </div>
  );
}
