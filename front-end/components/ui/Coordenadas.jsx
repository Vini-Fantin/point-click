"use client"
import { useEffect } from "react";
import { useState } from "react";

export default function Coordenadas() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed z-1 top-2 right-2 bg-gray-300 p-2 border border-black rounded text-sm">
      X: {pos.x}, Y: {pos.y}
    </div>
  );
}
