"use client";
import { useState } from "react";

export default function ListaObjetos({ onClose, items, onSubmit }) {
  const objetos = items.map((item) => ({
    name: item.name,
    img: `${item.id}.png`,
    score: item.score
  }));

  function submit(item) {
    onSubmit(item)
  }


  return (
    <main className="fixed top-1/2 left-1/2 transform z-50 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-white rounded shadow">
      <div className="inline-flex justify-between w-full p-4 md:p-5 border-b rounded-t border-gray-200">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Lista de Objetos</h3>
          <h3 className="text-md font-normal text-gray-600">Esta ação é irreversível!</h3>
        </div>
        <button
          type="button"
          onClick={() => onClose()}
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
          <span className="sr-only">Close modal</span>
        </button>
      </div>

      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-2 mb-2 relative">
        {objetos.map((obj, i) => (
          <li key={i}>
            <div
              className="drag-wrapper cursor-pointer hover:scale-102 transition duration-150 ease-in-out active:scale-100" onClick={() => submit(obj)}
            >
              <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm w-full">
                <button>
                  <img className="rounded-t-lg" src={obj.img} alt="" />
                  <div className="p-5 flex-1">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                      {obj.name}
                    </h5>
                  </div>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
