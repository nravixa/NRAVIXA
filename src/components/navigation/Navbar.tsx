"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { Container } from "../layout/Container";
import { Sidebar } from "./Sidebar";

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
        className={`fixed top-0 left-0 right-0 z-40 h-[80px] transition-all duration-300 ease-premium flex items-center ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Mobile Menu Toggle (Left Side on Mobile) */}
          <div className="flex items-center gap-16 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-[32px] h-[32px] gap-[6px] relative z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
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

          {/* Logo (Centered on mobile, Left on desktop) */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start -ml-[32px] md:ml-0">
            <Link href="/" className={`font-bold text-xl tracking-tighter transition-colors duration-300 ${!isScrolled && !isMobileMenuOpen ? "text-white" : "text-black"}`}>
              NRAVIXA
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <nav className="hidden md:flex items-center gap-32">
            <NavLinks isScrolled={isScrolled} />
          </nav>

          {/* Right: WhatsApp Button */}
          <div className="hidden md:flex items-center gap-16">
            <a
              href="https://wa.me/917420008485?text=Hi!%20%E2%9C%A8%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20creative%2C%20modern%2C%20and%20responsive%20website.%20I'd%20love%20to%20discuss%20my%20project.%20Please%20get%20in%20touch%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-24 py-8 text-sm font-medium rounded-full transition-colors duration-300 ease-premium ${
                !isScrolled && !isMobileMenuOpen
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/80"
              }`}
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </header>

      {/* New Sidebar Drawer */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
