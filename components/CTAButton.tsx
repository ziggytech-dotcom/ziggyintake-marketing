import React from "react";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  href = "https://app.ziggyintake.com/signup",
  children,
  size = "md",
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-accent hover:bg-violet-500 text-white shadow-lg shadow-violet-900/30 hover:shadow-violet-800/40",
    outline:
      "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150";

  return (
    <a
      href={href}
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}
