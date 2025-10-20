"use client"

import { useState } from "react"
import ListaObjetos from "./ListaObjetos"
import { getItemById } from "../../app/api/item"

export default function SelecionarObjeto({ x, y, items, onSubmit, maxW, maxH }) {
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(items[0])

  async function submit(item) {
    if (item.id == selectedItem.id) {
      item.score = 0
    } else {
      const itemDefault = await getItemById(selectedItem.id)
      item.score = item.score - itemDefault.score
    }
    setSelectedItem(item)
    onSubmit(item)
    setVisible(false)
  }


  return (
    <div style={{ position: "absolute", left: x, top: y }}>

      <>
        <button
          onClick={() => {setVisible(!visible); }} style={{ maxWidth: maxW, minWidth: maxW, maxHeight: maxH, minHeight: maxH }}
          className=" z-40 cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg"
        >
          <img src={`${selectedItem.id}.png`} style={{ maxWidth: maxW, minWidth: maxW, maxHeight: maxH, minHeight: maxH }}></img>
        </button>

        {visible && (
          <ListaObjetos
            onClose={() => setVisible(false)}
            items={items}
            onSubmit={submit}
          />
        )}
      </>
    </div>
  )
}
