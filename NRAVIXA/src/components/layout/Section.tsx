import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`w-full py-64 md:py-96 ${className}`}>
      {children}
    </section>
  );
}
