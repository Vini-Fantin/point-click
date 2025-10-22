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

    onFinished(pontuacoes.reduce((total, valorAtual) => total + valorAtual, 0));
  }

  function getImagemDoPlace(placeId) {
    const index = placeId - 6;
    const itemSelecionado = itensSelecionados[index];
    const itemDefault = room.places.find((place) => place.id === placeId).items[0];
    return `${itemSelecionado?.id || itemDefault.id}.png`;
  }

  const posicoes = {
    6: { x: 420, y: 825, maxW: "200px", maxH: "100px" },
    7: { x: 800, y: 450, maxW: "300px", maxH: "100px" },
    8: { x: 860, y: 800, maxW: "250px", maxH: "100px" },
    9: { x: 200, y: 480, maxW: "120px", maxH: "100px" },
    10: { x: 900, y: 0,   maxW: "100px", maxH: "100px" },
  };

  return (
    <div className="bg-[url('/banheiro.jpg')] bg-cover w-full h-full">
      <h1 className="text-2xl">Pontuação do Cômodo: {pontuacoes.reduce((total, val) => total + val, 0)}</h1>

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
        className="bg-lime-400 z-51 rounded-md px-18 py-4 font-bold text-2xl fixed bottom-4 right-0 transform -translate-x-1/2 border-4 border-white"
        onClick={confirmation}
      >
        Próximo
      </button>
    </div>
  );
}
