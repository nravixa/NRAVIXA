"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NavLinks({ mobile = false, onClick, isScrolled = false }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClick}
            className={`${
              mobile
                ? `text-4xl font-medium tracking-tight transition-colors duration-300 ease-premium ${
                    isActive ? "text-blue-600" : "text-black hover:text-blue-600"
                  }`
                : isScrolled
                  ? `text-sm font-medium transition-colors duration-300 ease-premium ${
                      isActive ? "text-blue-600" : "text-black/70 hover:text-blue-600"
                    }`
                  : `text-sm font-medium transition-colors duration-300 ease-premium ${
                      isActive ? "text-blue-400" : "text-white/70 hover:text-blue-400"
                    }`
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
