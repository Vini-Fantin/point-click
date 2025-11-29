"use client";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-md transition-transform duration-150 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[--color-brand] text-[--color-brand-foreground] hover:bg-[--color-brand-700] focus:ring-[--color-brand]",
    outline:
      "bg-transparent text-[--color-brand] border border-[--color-brand] hover:bg-[--color-brand] hover:text-[--color-brand-foreground] focus:ring-[--color-brand]",
    subtle:
      "bg-[--color-surface] text-gray-900 border border-gray-200 hover:shadow-md focus:ring-gray-400",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}


