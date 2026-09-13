"use client";

import { useEffect } from "react";
import ModelViewer from "./ModelViewer";

interface ModelLightboxProps {
  model: string;
  alt: string;
  onClose: () => void;
}

export default function ModelLightbox({ model, alt, onClose }: ModelLightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/80"
      style={{ animation: "backdropIn 0.3s ease-out" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-colors duration-200 hover:border-white/40 hover:bg-black/70"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="detail-media-bg relative h-[80vmin] w-[80vmin] max-h-[85vh] max-w-[85vw] overflow-hidden rounded-2xl"
        style={{ animation: "modalPopIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModelViewer src={model} />
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[1.5px] text-white/45">
        {alt}
      </p>
    </div>
  );
}
