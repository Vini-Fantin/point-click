"use client";

import { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ListaObjetos from "../ui/ListaObjetos";

export default function Quarto({ room, onFinished }) {
  const places = room.places.filter(
    (place) => place.id >= 11 && place.id <= 15
  );
  const itensPadrao = places.map((place) => place.items[0]);

  const [visible, setVisible] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(11); // começa no ID 11
  const [pontuacoes, setPontuacoes] = useState(
    itensPadrao.map((item) => item.score)
  );
  const [itensSelecionados, setItensSelecionados] = useState(itensPadrao);

  function onItemSelection(item) {
    const index = currentPlace - 11; // corrigido

    const novosItensSelecionados = [...itensSelecionados];
    novosItensSelecionados[index] = item;
    setItensSelecionados(novosItensSelecionados);

    const novaPontuacoes = [...pontuacoes];
    novaPontuacoes[index] = item.score;
    setPontuacoes(novaPontuacoes);

    setVisible(false);
  }

  function confirmation() {
    withReactContent(Swal).fire({
      icon: "success",
      title: "Sala Completa!",
      text: "Vamos para a próxima...",
    });

    const roomScore = pontuacoes.reduce(
      (total, valorAtual) => total + valorAtual,
      0
    );
    const mistakes = [];
    places.forEach((place) => {
      const index = place.id - 11; // corrigido
      const chosen = itensSelecionados[index];
      const defaultItem = place.items[0];
      if (
        (chosen?.score ?? defaultItem.score) < 3 &&
        chosen?.id !== defaultItem.id
      ) {
        mistakes.push({
          room: room.name || "Quarto",
          placeId: place.id,
          itemName: chosen?.name || defaultItem.name,
        });
      }
    });

    onFinished({ score: roomScore, mistakes });
  }

  function getImagemDoPlace(placeId) {
    const index = placeId - 11; // corrigido
    const itemSelecionado = itensSelecionados[index];
    const itemDefault = room.places.find((place) => place.id === placeId)
      .items[0];
    return `${itemSelecionado?.id || itemDefault.id}.png`;
  }

  const posicoes = {
    11: { x: 1050, y: 700, maxW: "500px", maxH: "300px" }, // tapete
    12: { x: 1450, y: 470, maxW: "100px", maxH: "150px" }, // abajur
    13: { x: 300, y: 500, maxW: "250px", maxH: "100px" }, // puff
    14: { x: 760, y: -5, maxW: "400px", maxH: "230px" },  // lampada
    15: { x: 300, y: 500, maxW: "50px", maxH: "100px" }, // Não mexer nesse item
  };

  return (
    <div className="bg-[url('/quarto.png')] bg-cover bg-center w-screen h-screen relative overflow-hidden">

      {places.map((place) => {
        const { x, y, maxW, maxH } = posicoes[place.id];
        return (
          <div key={place.id} style={{ position: "absolute", left: x, top: y }}>
            {place.id != 15 ? (
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
                <img
                  src={getImagemDoPlace(place.id)}
                  className="w-full h-full"
                />
              </button>
            ) : null}
          </div>
        );
      })}

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
        Próximo Cômodo
      </button>
    </div>
  );
}
