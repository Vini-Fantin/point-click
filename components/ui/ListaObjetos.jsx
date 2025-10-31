"use client";
import { useState } from "react";

export default function ListaObjetos({ onClose, items, onSubmit }) {
  const objetos = items.map((item) => ({
    name: item.name,
    id: item.id,
    score: item.score
  }));

  function submit(item) {
    onSubmit(item);
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />
      <main className="fixed top-1/2 left-1/2 transform z-50 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-3xl bg-white rounded-[--radius-md] shadow-[--shadow-card] animate-pop">
        <div className="inline-flex justify-between w-full p-4 md:p-5 border-b rounded-t border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Lista de Objetos</h3>
            <p className="text-md font-normal text-gray-600">Escolha um objeto para este local.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Fechar</span>
          </button>
        </div>

        <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-4">
          {objetos.map((obj, i) => (
            <li key={i}>
              <button
                className="w-full h-full text-left group"
                onClick={() => submit(obj)}
              >
                <div className="flex flex-col h-full bg-white border items-center border-gray-200 rounded-lg w-full overflow-hidden transition-transform group-hover:scale-[1.02]">
                  <img className="h-36 object-contain bg-gray-50 w-full" src={`${obj.id}.png`} alt="" />
                  <div className="p-3 w-full">
                    <h5 className="text-base font-semibold tracking-tight text-gray-900">
                      {obj.name}
                    </h5>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}