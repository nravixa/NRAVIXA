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
        className={`${mobile
            ? `text-4xl tracking-tight transition-colors duration-300 ease-premium ${isActive ? "font-semibold text-black" : "font-medium text-gray-500 hover:text-gray-800"
            }`
            : isScrolled
              ? `text-sm transition-colors duration-300 ease-premium ${isActive ? "font-semibold text-black" : "font-medium text-gray-500 hover:text-gray-800"
              }`
              : `text-sm transition-colors duration-300 ease-premium ${isActive ? "font-semibold text-white" : "font-medium text-gray-400 hover:text-gray-200"
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
