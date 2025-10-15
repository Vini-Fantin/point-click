"use client";

import SelecionarObjeto from "../ui/SelecionarObjeto";

export default function SalaDeEstar({ items }) {

  return (
    <div className="w-full h-full relative">
      <div src="/sala-de-estar.jpg" className="object-cover bg-[url('/sala-de-estar.jpg')] w-full h-full">
        <SelecionarObjeto x={350} y={500} items={items} />
        <SelecionarObjeto x={500} y={300} items={items} />
        <SelecionarObjeto x={700} y={100} items={items} />
        <SelecionarObjeto x={1100} y={800} items={items} />
      </div>
    </div>
  );
}
