"use client";

import SelecionarObjeto from "../ui/SelecionarObjeto";

export default function SalaDeEstar({ items }) {

  return (
    <div className="w-full h-full relative">
      <div src="/sala-de-estar.jpg" className="object-cover bg-[url('/sala-de-estar.jpg')] w-full h-full">
        <SelecionarObjeto x={350} y={500} items={items} />
      </div>
    </div>
  );
}
