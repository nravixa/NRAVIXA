"use client";

import { useState } from "react";

export function ExpandableCardText({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`md:block ${expanded ? 'block' : 'hidden'}`}>
        {children}
      </div>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="md:hidden mt-8 text-black/40 hover:text-black/80 transition-colors focus:outline-none flex items-center gap-4"
          aria-label="Show more details"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      )}
    </>
  );
}
