"use client";

import { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ListaObjetos from "../ui/ListaObjetos";

export default function Banheiro({ room, onFinished }) {
  const places = room.places.filter((place) => place.id >= 6 && place.id <= 10);
  const itensPadrao = places.map(place => place.items[0]);

  const [visible, setVisible] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(6); // começa no ID 6
  const [pontuacoes, setPontuacoes] = useState(itensPadrao.map(item => item.score));
  const [itensSelecionados, setItensSelecionados] = useState(itensPadrao);

  function onItemSelection(item) {
    const index = currentPlace - 6;

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

    const roomScore = pontuacoes.reduce((total, valorAtual) => total + valorAtual, 0);
    const mistakes = [];
    places.forEach((place) => {
      const index = place.id - 6;
      const chosen = itensSelecionados[index];
      const defaultItem = place.items[0];
      if ((chosen?.score ?? defaultItem.score) <= 3 && chosen?.id !== defaultItem.id) {
        mistakes.push({ room: room.name || "Banheiro", placeId: place.id, itemName: chosen?.name || defaultItem.name });
      }
    });

    onFinished({ score: roomScore, mistakes });
  }

  function getImagemDoPlace(placeId) {
    const index = placeId - 6;
    const itemSelecionado = itensSelecionados[index];
    const itemDefault = room.places.find((place) => place.id === placeId).items[0];
    return `${itemSelecionado?.id || itemDefault.id}.png`;
  }

  const posicoes = {
    6: { x: 520, y: 805, maxW: "200px", maxH: "100px" }, // tapete pia
    7: { x: 820, y: 450, maxW: "300px", maxH: "100px" }, // barra
    8: { x: 800, y: 800, maxW: "250px", maxH: "100px" }, // tapete
    9: { x: 200, y: 420, maxW: "50px", maxH: "100px" }, // copo
    10: { x: 765, y: 0, maxW: "400px", maxH: "400px" }, // lampada
  };

  return (
    <div className="bg-[url('/banheiro.jpg')] bg-cover bg-center w-screen h-screen relative overflow-hidden">
      <h1 className="text-2xl glass rounded px-3 py-1 absolute top-4 left-4 z-50">Pontuação do Cômodo: {pontuacoes.reduce((total, val) => total + val, 0)}</h1>

      {places.map((place) => {
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
