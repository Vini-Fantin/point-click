"use client";

export default function Loader({ label = "Carregando...", className = "" }) {
  return (
    <div className={`flex items-center gap-3 text-[--color-muted] ${className}`}>
      <span className="inline-block w-4 h-4 rounded-full border-2 border-[--color-brand] border-t-transparent animate-spin"></span>
      <span className="text-sm">{label}</span>
    </div>
  );
}


