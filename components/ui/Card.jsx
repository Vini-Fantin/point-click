"use client";

export default function Card({ className = "", children, elevated = true }) {
  return (
    <div
      className={`rounded-[--radius-md] bg-[--color-surface] ${
        elevated ? "shadow-[--shadow-card]" : "border border-gray-200"
      } ${className}`}
    >
      {children}
    </div>
  );
}


