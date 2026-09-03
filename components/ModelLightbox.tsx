"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ModelLightboxProps {
  image: string;
  alt: string;
  layoutId: string;
  onClose: () => void;
}

export default function ModelLightbox({ image, alt, layoutId, onClose }: ModelLightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
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

      <motion.div
        layoutId={layoutId}
        className="detail-media-bg relative h-[80vmin] w-[80vmin] max-h-[85vh] max-w-[85vw] overflow-hidden"
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={image} alt={alt} fill sizes="85vw" className="object-cover" />
      </motion.div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[1.5px] text-white/45">
        {alt}
      </p>
    </motion.div>
  );
}
