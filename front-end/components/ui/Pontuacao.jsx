"use client"
import { useEffect } from "react";
import { useState } from "react";

export default function Pontuacao({score}) {


  return (
    <div className="fixed z-1 top-2 left-2 bg-gray-300 p-2 border border-black rounded text-sm">
      Score: {score}
    </div>
  );
}
