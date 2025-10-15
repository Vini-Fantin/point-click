"use client";

import BlocoTeste from "../ui/BlocoTeste";
import SelecionarObjeto from "../ui/SelecionarObjeto";

import Image from "next/image";

export default function SalaDeEstar({items}) {

  return (
    <div className="w-full h-full relative">
      <Image src="/sala-de-estar.jpg" alt="" fill className="object-cover" />

      <SelecionarObjeto x={1230} y={500} items={items} />
      <BlocoTeste x={200} y={200} />
      <BlocoTeste x={300} y={300} />
    </div>
  );
}
