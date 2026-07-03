"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { Container } from "../layout/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }; 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ease-premium flex items-center ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className={`font-bold text-xl tracking-tighter transition-colors duration-300 ${!isScrolled && !isMobileMenuOpen ? "text-white" : "text-black"}`}>
            NRAVIXA
          </Link>

          {/* Center: Desktop Links */}
          <nav className="hidden md:flex items-center gap-32">
            <NavLinks isScrolled={isScrolled} />
          </nav>

          {/* Right: WhatsApp Button & Mobile Toggle */}
          <div className="flex items-center gap-16">
            <a
              href="https://wa.me/917420008485"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center px-24 py-8 text-sm font-medium rounded-full transition-colors duration-300 ease-premium ${
                !isScrolled && !isMobileMenuOpen
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/80"
              }`}
            >
              WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-[32px] h-[32px] gap-[6px] relative z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block w-24 h-px transition-all duration-300 ease-premium ${
                  !isScrolled && !isMobileMenuOpen ? "bg-white" : "bg-black"
                } ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block w-24 h-px transition-all duration-300 ease-premium ${
                  !isScrolled && !isMobileMenuOpen ? "bg-white" : "bg-black"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-24 h-px transition-all duration-300 ease-premium ${
                  !isScrolled && !isMobileMenuOpen ? "bg-white" : "bg-black"
                } ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center items-center transition-transform duration-500 ease-premium ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-32">
          <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
          <a
            href="https://wa.me/917420008485"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-16 px-32 py-16 bg-black text-white text-lg font-medium rounded-full hover:bg-black/80 transition-colors duration-300 ease-premium"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
