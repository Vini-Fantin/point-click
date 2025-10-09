"use client";
import { useState } from "react";

export default function BlocoTeste({ x, y }) {
  const [pos, setPos] = useState({ x, y });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });

    const onMouseMove = (e) =>
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{ left: pos.x, top: pos.y }}
      className="bg-white size-32 rounded shadow absolute cursor-grab transition duration-100 ease-in-out active:scale-110 active:shadow-green-200 active:shadow-lg"
    ></div>
  );
}
