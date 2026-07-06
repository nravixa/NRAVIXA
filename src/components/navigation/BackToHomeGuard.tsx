"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function BackToHomeGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // We only want this behavior on non-home pages
    if (pathname === "/") return;

    // Push an extra history state so that when the user swipes back, 
    // it doesn't immediately leave the site or go to the natural previous page,
    // but instead triggers the popstate event for us to intercept.
    window.history.pushState({ isGuard: true }, "", window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      // User swiped back or clicked the browser back button.
      // Scroll to the top of the current page.
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // We push state again so the next back action ALSO scrolls to top if they want to?
      // Actually, standard behavior allows them to go back to the previous page if they hit back again.
      // If we want it to always stay on this page and scroll to top, we push state again:
      window.history.pushState({ isGuard: true }, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, router]);

  return null;
}
