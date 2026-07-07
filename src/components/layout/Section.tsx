import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "hero" | "none";
}

export function Section({ children, className = "", id, variant = "default" }: SectionProps) {
  const spacingClasses = {
    default: "py-64 md:py-96 lg:py-160",
    hero: "pt-128 pb-64 md:pt-160 md:pb-96 lg:pt-200 lg:pb-160",
    none: "",
  };

  return (
    <section id={id} className={`w-full ${spacingClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}
