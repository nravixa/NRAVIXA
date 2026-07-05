"use client";

import { useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover -z-10"
      style={{ willChange: "transform" }}
      src="/videos/Snowflakes.mp4"
    />
  );
}
