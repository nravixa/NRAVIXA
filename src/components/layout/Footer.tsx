import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Content } from "./Content";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Threads", href: "#" },
  { name: "X", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Reddit", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-96 pb-64 md:pt-160 md:pb-96">
      <Container>
        <Content>
          {/* Column 1: Brand */}
          <div className="col-span-12 md:col-span-4 flex flex-col mb-64 md:mb-0 pr-0 md:pr-32">
            <h2 className="text-4xl font-bold tracking-tighter mb-24">
              NRAVIXA
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-[300px]">
              A premium technology studio building high-end digital experiences for luxury brands and modern startups.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-6 md:col-span-2 flex flex-col mb-48 md:mb-0">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-32">
              Navigation
            </span>
            <ul className="flex flex-col gap-16">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-all duration-300 ease-premium font-medium inline-block hover:translate-x-4"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-span-6 md:col-span-3 flex flex-col mb-48 md:mb-0">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-32">
              Contact
            </span>
            <ul className="flex flex-col gap-16">
              <li>
                <a
                  href="tel:7420008485"
                  className="text-white/60 hover:text-white transition-all duration-300 ease-premium font-medium inline-block hover:translate-x-4"
                >
                  7420008485
                </a>
              </li>
              <li>
                <a
                  href="mailto:nravixa@gmail.com"
                  className="text-white/60 hover:text-white transition-all duration-300 ease-premium font-medium inline-block hover:translate-x-4"
                >
                  nravixa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="col-span-6 md:col-span-3 flex flex-col">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-32">
              Socials
            </span>
            <ul className="flex flex-col gap-16">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-all duration-300 ease-premium font-medium inline-block hover:translate-x-4"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright Row */}
          <div className="col-span-12 mt-96 md:mt-160 pt-32 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-16">
            <span className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} NRAVIXA. All rights reserved.
            </span>
            <span className="text-white/40 text-sm">
              Crafted with precision.
            </span>
          </div>
        </Content>
      </Container>
    </footer>
  );
}
