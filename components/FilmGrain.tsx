"use client";

import { useEffect, useRef } from "react";

interface FilmGrainProps {
  /** Contrast/spread of individual grain luminance values, 0-1. Higher = more visible per-grain contrast. */
  intensity?: number;
  /** Overall visibility of the grain layer, 0-1. Keep very low for a subtle, premium feel. */
  opacity?: number;
  /** Rendered size (px) of one grain tile. Lower softens the grain, higher makes it chunkier/coarser. */
  grainSize?: number;
  /** Milliseconds between grain frame swaps. Lower is a faster shimmer. */
  speed?: number;
}

// Native resolution of each generated noise tile — one random value per pixel,
// the finest grain achievable without sub-pixel tricks.
const TILE_RESOLUTION = 128;
const FRAME_COUNT = 6;

function generateGrainTile(intensity: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = TILE_RESOLUTION;
  canvas.height = TILE_RESOLUTION;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const imageData = ctx.createImageData(TILE_RESOLUTION, TILE_RESOLUTION);
  const data = imageData.data;
  const spread = 70 * intensity;

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.max(0, Math.min(255, 128 + (Math.random() - 0.5) * 2 * spread));
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    // Slight per-grain alpha variation for microscopic density fluctuation.
    data[i + 3] = 140 + Math.random() * 115;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

export default function FilmGrain({ intensity = 0.35, opacity = 0.06, grainSize = 128, speed = 90 }: FilmGrainProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = Array.from({ length: reducedMotion ? 1 : FRAME_COUNT }, () => generateGrainTile(intensity)).filter(
      Boolean
    );
    if (frames.length === 0) return;

    el.style.backgroundImage = `url(${frames[0]})`;
    el.style.opacity = String(opacity);

    if (reducedMotion || frames.length <= 1) return;

    let frameIndex = 0;
    const id = setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;
      const jitterX = Math.round((Math.random() - 0.5) * grainSize);
      const jitterY = Math.round((Math.random() - 0.5) * grainSize);
      // Very slight brightness instability — never strays far from the base opacity.
      const flicker = opacity * (0.92 + Math.random() * 0.16);
      el.style.backgroundImage = `url(${frames[frameIndex]})`;
      el.style.backgroundPosition = `${jitterX}px ${jitterY}px`;
      el.style.opacity = String(flicker);
    }, speed);

    return () => clearInterval(id);
  }, [intensity, opacity, grainSize, speed]);

  return (
    <div ref={overlayRef} aria-hidden="true" className="film-grain-overlay" style={{ backgroundSize: `${grainSize}px ${grainSize}px` }} />
  );
}
