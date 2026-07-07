"use client";

import React, { useState, useRef, useEffect } from "react";

export const COUNTRY_CODES = [
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+91", label: "+91 (IN)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+81", label: "+81 (JP)" },
  { code: "+49", label: "+49 (DE)" },
  { code: "+33", label: "+33 (FR)" },
  { code: "+971", label: "+971 (AE)" },
  { code: "+86", label: "+86 (CN)" },
  { code: "+55", label: "+55 (BR)" },
  { code: "+7", label: "+7 (RU/KZ)" },
  { code: "+39", label: "+39 (IT)" },
  { code: "+34", label: "+34 (ES)" },
  { code: "+82", label: "+82 (KR)" },
  { code: "+52", label: "+52 (MX)" },
  { code: "+62", label: "+62 (ID)" },
  { code: "+90", label: "+90 (TR)" },
  { code: "+31", label: "+31 (NL)" },
  { code: "+41", label: "+41 (CH)" },
  { code: "+46", label: "+46 (SE)" },
  { code: "+48", label: "+48 (PL)" },
  { code: "+32", label: "+32 (BE)" },
  { code: "+43", label: "+43 (AT)" },
  { code: "+45", label: "+45 (DK)" },
  { code: "+358", label: "+358 (FI)" },
  { code: "+47", label: "+47 (NO)" },
  { code: "+353", label: "+353 (IE)" },
  { code: "+64", label: "+64 (NZ)" },
  { code: "+65", label: "+65 (SG)" },
  { code: "+60", label: "+60 (MY)" },
  { code: "+63", label: "+63 (PH)" },
  { code: "+66", label: "+66 (TH)" },
  { code: "+84", label: "+84 (VN)" },
  { code: "+92", label: "+92 (PK)" },
  { code: "+880", label: "+880 (BD)" },
  { code: "+94", label: "+94 (LK)" },
  { code: "+972", label: "+972 (IL)" },
  { code: "+966", label: "+966 (SA)" },
  { code: "+27", label: "+27 (ZA)" },
  { code: "+20", label: "+20 (EG)" },
  { code: "+234", label: "+234 (NG)" },
  { code: "+254", label: "+254 (KE)" },
  { code: "+54", label: "+54 (AR)" },
  { code: "+56", label: "+56 (CL)" },
  { code: "+57", label: "+57 (CO)" },
  { code: "+51", label: "+51 (PE)" },
  { code: "+58", label: "+58 (VE)" },
  { code: "+380", label: "+380 (UA)" },
  { code: "+420", label: "+420 (CZ)" },
  { code: "+30", label: "+30 (GR)" },
];

interface CountryCodeSelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function CountryCodeSelect({ value, onChange, disabled }: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center h-full" ref={containerRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-8 bg-transparent border-none outline-none text-lg text-black font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pr-8 h-full"
      >
        <span>{value}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-[200px] max-h-[250px] overflow-y-auto bg-white border border-black/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-50 flex flex-col py-8 custom-scrollbar">
          {COUNTRY_CODES.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              className={`text-left px-16 py-12 text-black hover:bg-black/5 transition-colors duration-200 text-sm font-medium ${
                value === country.code ? "bg-black/5" : ""
              }`}
            >
              {country.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
