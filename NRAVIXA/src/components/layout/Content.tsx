import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export function Content({ children, className = "" }: ContentProps) {
  return (
    <div
      className={`max-w-[1200px] mx-auto w-full grid grid-cols-12 gap-16 md:gap-24 lg:gap-32 ${className}`}
    >
      {children}
    </div>
  );
}
