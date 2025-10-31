"use client"

import { useState } from "react"
import ListaObjetos from "./ListaObjetos"
import { getItemById } from "../../app/api/item"
import FloatingPoints from "./FloatingPoints"

export default function SelecionarObjeto({ x, y, items, onSubmit, maxW, maxH }) {
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [lastDelta, setLastDelta] = useState(0)
  const [showPoints, setShowPoints] = useState(false)

  async function submit(item) {
    if (item.id == selectedItem.id) {
      item.score = 0
    } else {
      const itemDefault = await getItemById(selectedItem.id)
      item.score = item.score - itemDefault.score
    }
    setSelectedItem(item)
    setLastDelta(item.score)
    setShowPoints(true)
    setTimeout(() => setShowPoints(false), 900)
    onSubmit(item)
    setVisible(false)
  }


  return (
    <div style={{ position: "absolute", left: x, top: y }}>
      <>
        <button
          aria-label="Selecionar objeto"
          onClick={() => { setVisible(!visible); }} style={{ maxWidth: maxW, minWidth: maxW, maxHeight: maxH, minHeight: maxH }}
          className=" z-40 cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-brand] rounded"
        >
          <img src={`${selectedItem.id}.png`} style={{ maxWidth: maxW, minWidth: maxW, maxHeight: maxH, minHeight: maxH }}></img>
        </button>

        {showPoints && (
          <FloatingPoints x={x} y={y - 20} value={lastDelta} />
        )}

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
