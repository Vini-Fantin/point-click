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

    onFinished(pontuacoes.reduce((total, val) => total + val, 0));
  }

  function getImagemDoPlace(placeId) {
    const index = placeId - 1;
    const itemSelecionado = itensSelecionados[index];
    const itemDefault = room.places.find((place) => place.id === placeId).items[0];
    return `${itemSelecionado?.id || itemDefault.id}.png`;
  }

  const posicoes = {
    1: { x: 1450, y: 380, maxW: "500px", maxH: "500px" }, // tapete
    2: { x: 300, y: 425, maxW: "500px", maxH: "500px" }, // apoiador
    3: { x: 1150, y: 280, maxW: "500px", maxH: "500px" }, // abajur
    4: { x: 720, y: 420, maxW: "500px", maxH: "500px" }, // tapete
    5: { x: 760, y: -5, maxW: "500px", maxH: "500px" },  // lampada
  };

  return (
    <div className="bg-[url('/sala-de-estar.png')] bg-cover bg-center w-screen h-screen relative overflow-hidden">
      <h1 className="text-2xl">
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
        className="bg-lime-400 z-51 rounded-md px-18 py-4 font-bold text-2xl fixed bottom-4 right-0 transform -translate-x-1/2 border-4 border-white"
        onClick={confirmation}
      >
        Próximo
      </button>
    </div>
  );
}
