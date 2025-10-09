"use client";

import BlocoTeste from "../ui/BlocoTeste";
import Seletor from "../ui/SelecionarObjeto";

import Image from "next/image";

export default function SalaDeEstar() {

  return (
    <div className="w-full h-full relative">
      <Image src="/sala-de-estar.jpg" alt="" fill className="object-cover" />

      <Seletor x={1230} y={500} />
      <BlocoTeste x={200} y={200} />
      <BlocoTeste x={300} y={300} />
    </div>
  );
}
