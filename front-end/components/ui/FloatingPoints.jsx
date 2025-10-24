"use client";

import { useEffect, useState } from "react";

export default function FloatingPoints({ x, y, value }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const sign = value >= 0 ? "+" : "";

  return (
    <div
      className="pointer-events-none select-none fixed z-[60] animate-float-up"
      style={{ left: x, top: y }}
    >
      <div className="px-2 py-1 bg-black/60 text-white text-sm rounded-md shadow">
        {sign}{value}
      </div>
    </div>
  );
}


