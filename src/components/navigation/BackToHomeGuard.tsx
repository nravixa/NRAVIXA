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
      // Redirect them to the home page immediately.
      router.push("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, router]);

  return null;
}
