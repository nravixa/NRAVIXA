"use client";

import React from "react";
import { AnimatedNavLink } from "./AnimatedNavLink";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  mobile?: boolean;
  onClick?: (href?: string) => void;
  isScrolled?: boolean;
  variants?: any; // Framer Motion variants for stagger children
}

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NavLinks({ mobile = false, onClick, isScrolled = false, variants }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;

      return (
        <AnimatedNavLink
          key={link.name}
          name={link.name}
          href={link.href}
          isActive={isActive}
          isScrolled={isScrolled}
          mobile={mobile}
          onClick={() => {
            if (mobile && onClick) {
              onClick(link.href);
            } else if (onClick) {
              onClick();
            }
          }}
          variants={variants}
        />
      );
      })}
    </>
  );
}
