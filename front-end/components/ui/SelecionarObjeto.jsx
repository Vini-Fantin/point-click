import { useState } from "react"
import ListaObjetos from "./ListaObjetos"

export default function SelecionarObjeto({ x, y }) {

  const [visible, setVisible] = useState(false)

  return (
    <>
    <button onClick={() => setVisible(!visible)} style={{ left: x, top: y }} 
    className="border-dashed absolute py-4 px-32 rounded-md border-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg bg-gray-200/45">
      <p className="font-semibold">Selecione um objeto</p>
    </button>

    {visible && <ListaObjetos onClose={() => setVisible(false)}></ListaObjetos>}
    </>
  );
}
