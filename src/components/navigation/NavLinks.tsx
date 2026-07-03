"use client";

import React from "react";
import Link from "next/link";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}

const links = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NavLinks({ mobile = false, onClick, isScrolled = false }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`${
            mobile
              ? "text-4xl font-medium tracking-tight text-black hover:opacity-70 transition-opacity duration-300 ease-premium"
              : isScrolled
                ? "text-sm text-black/70 hover:text-black transition-colors duration-300 ease-premium font-medium"
                : "text-sm text-white/70 hover:text-white transition-colors duration-300 ease-premium font-medium"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
