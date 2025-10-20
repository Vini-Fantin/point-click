"use client"

import { useState } from "react"
import ListaObjetos from "./ListaObjetos"

export default function SelecionarObjeto({ x, y, items, onSubmit, maxW, maxH }) {
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  function submit(item) {
    console.log(item)
    setSelectedItem(item)
    onSubmit(item)
    setVisible(false)
  }


  return (
    <div style={{  position: "absolute", left: x, top: y}}>


      {!selectedItem && (
        <>
          <button
            onClick={() => setVisible(!visible)}
            className="border-dashed py-4 px-32 z-40 rounded-md border-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg bg-gray-200/45"
          >
            <p className="font-semibold">Selecione um objeto</p>
          </button>

          {visible && (
            <ListaObjetos
              onClose={() => setVisible(false)}
              items={items}
              onSubmit={submit}
            />
          )}
        </>
      )}

      {selectedItem && (
        <img src={selectedItem.img} style={{maxWidth: maxW, maxHeight: maxH}}></img>
      )}
    </div>
  )
}
