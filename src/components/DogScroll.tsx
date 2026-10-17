"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type DogScrollProps = {
  frameCount?: number;
  folder?: string;
  extension?: string;
  scrollHeightVh?: number;
  children?: React.ReactNode;
};

export default function DogScroll({ children }: DogScrollProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    // Play only when visible to maximize performance and smoothness
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [reduceMotion]);

  return (
    <div className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Background looping video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/dog-poster.webp"
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none transform-gpu"
        aria-hidden="true"
      >
        <source src="/videos/dog-loop.webm" type="video/webm" />
        <source src="/videos/dog-loop.mp4" type="video/mp4" />
      </video>

      {/* Top & bottom soft gradient fades so video blends seamlessly into page */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-0 bg-black/35 z-[1]" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}