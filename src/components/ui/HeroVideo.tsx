"use client";

import { useRef, useEffect } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Play video at 2x speed
    }
  }, []);

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
