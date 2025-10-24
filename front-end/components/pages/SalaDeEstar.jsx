"use client";

import { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ListaObjetos from "../ui/ListaObjetos";

export default function SalaDeEstar({ room, onFinished }) {
  const itensPadrao = room.places.map((place) => place.items[0]);

  const [visible, setVisible] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(1); // começa no ID 1
  const [pontuacoes, setPontuacoes] = useState(itensPadrao.map((item) => item.score));
  const [itensSelecionados, setItensSelecionados] = useState(itensPadrao);

  function onItemSelection(item) {
    const index = currentPlace - 1;

    const novosItensSelecionados = [...itensSelecionados];
    novosItensSelecionados[index] = item;
    setItensSelecionados(novosItensSelecionados);

    const novaPontuacoes = [...pontuacoes];
    novaPontuacoes[index] = item.score;
    setPontuacoes(novaPontuacoes);

    setVisible(false); // fecha o modal
  }

  function confirmation() {
    withReactContent(Swal).fire({
      icon: "success",
      title: "Sala Completa!",
      text: "Vamos para a próxima...",
    });

    const roomScore = pontuacoes.reduce((total, val) => total + val, 0);
    const mistakes = [];
    room.places.forEach((place) => {
      const index = place.id - 1;
      const chosen = itensSelecionados[index];
      const defaultItem = place.items[0];
      // pontuação até 3 => considerado erro
      if ((chosen?.score ?? defaultItem.score) <= 3 && chosen?.id !== defaultItem.id) {
        mistakes.push({ room: room.name || "Sala de Estar", placeId: place.id, itemName: chosen?.name || defaultItem.name });
      }
    });

    onFinished({ score: roomScore, mistakes });
  }

  function getImagemDoPlace(placeId) {
    const index = placeId - 1;
    const itemSelecionado = itensSelecionados[index];
    const itemDefault = room.places.find((place) => place.id === placeId).items[0];
    return `${itemSelecionado?.id || itemDefault.id}.png`;
  }

  const posicoes = {
    1: { x: 1600, y: 730, maxW: "200px", maxH: "100px" }, // tapete
    2: { x: 380, y: 600, maxW: "280px", maxH: "250px" }, // apoiador
    3: { x: 1345, y: 470, maxW: "100px", maxH: "150px" }, // abajur
    4: { x: 720, y: 750, maxW: "480px", maxH: "180px" }, // tapete
    5: { x: 760, y: -5, maxW: "400px", maxH: "230px" },  // lampada
  };

  return (
    <div className="bg-[url('/sala-de-estar.png')] bg-cover bg-center w-screen h-screen relative overflow-hidden">
      <h1 className="text-2xl glass rounded px-3 py-1 absolute top-4 left-4 z-50">
        Pontuação do Cômodo: {pontuacoes.reduce((total, val) => total + val, 0)}
      </h1>

      {room.places.map((place) => {
        const { x, y, maxW, maxH } = posicoes[place.id];

        return (
          <div key={place.id} style={{ position: "absolute", left: x, top: y }}>
            <button
              onClick={() => {
                setCurrentPlace(place.id);
                setVisible(true);
              }}
              style={{
                maxWidth: maxW,
                minWidth: maxW,
                maxHeight: maxH,
                minHeight: maxH,
              }}
              className="z-40 cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100"
            >
              <img src={getImagemDoPlace(place.id)} className="w-full h-full" />
            </button>
          </div>
        );
      })}

      {/* Modal com a lista de objetos */}
      {visible && (
        <ListaObjetos
          onClose={() => setVisible(false)}
          items={room.places.find((place) => place.id === currentPlace).items}
          onSubmit={onItemSelection}
        />
      )}

      <button
        className="bg-green-500 hover:bg-[--color-brand-700] text-white z-51 rounded-md px-8 py-3 font-bold text-xl fixed bottom-6 right-6 shadow-lg"
        onClick={confirmation}
      >
        Próximo Cõmodo
      </button>
    </div>
  );
}
