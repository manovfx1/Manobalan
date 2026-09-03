"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Dither from "./Dither";

const EXIT_EASE = "cubic-bezier(0.23, 1, 0.32, 1)";
const POP_EASE = [0.34, 1.56, 0.64, 1] as const;
const POST_POP_PAUSE_MS = 2000;
const SKIP_KEYS = ["Tab", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter", "Escape"];

interface Timing {
  headerPopDuration: number;
  exitDuration: number;
}

const NORMAL_TIMING: Timing = {
  headerPopDuration: 0.7,
  exitDuration: 0.9,
};

const REDUCED_MOTION_TIMING: Timing = {
  headerPopDuration: 0.3,
  exitDuration: 0.3,
};

function getTiming(): Timing {
  if (typeof window === "undefined") return NORMAL_TIMING;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return reducedMotion ? REDUCED_MOTION_TIMING : NORMAL_TIMING;
}

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [introVisible, setIntroVisible] = useState(true);
  const [skip, setSkip] = useState(false);
  const [timing, setTiming] = useState<Timing>(NORMAL_TIMING);
  const completedRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem("splashShown") === "true") {
      const skipTimer = setTimeout(() => {
        completedRef.current = true;
        setSkip(true);
        onComplete();
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    const t = getTiming();
    setTimeout(() => setTiming(t), 0);
    const totalMs = t.headerPopDuration * 1000 + POST_POP_PAUSE_MS;

    function finish() {
      setIntroVisible(false);
      sessionStorage.setItem("splashShown", "true");
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    }

    const exitTimer = setTimeout(finish, totalMs);

    function handleKey(e: KeyboardEvent) {
      if (SKIP_KEYS.includes(e.key)) {
        clearTimeout(exitTimer);
        finish();
      }
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(exitTimer);
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (skip) return null;

  return (
    <div
      className="splash-screen"
      style={{
        pointerEvents: introVisible ? "auto" : "none",
        transform: introVisible ? "translateY(0%)" : "translateY(-100%)",
        transition: `transform ${timing.exitDuration}s ${EXIT_EASE}`,
      }}
    >
      <div
        className="pointer-events-none fixed left-0 z-0"
        style={{
          top: "4%",
          width: "100vw",
          height: "32vw",
          maxHeight: "340px",
          WebkitMaskImage: "url(/images/work/welcome-line-1.png)",
          maskImage: "url(/images/work/welcome-line-1.png)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Dither
          waveColor={[0.3, 0.85, 0.6]}
          waveSpeed={0.04}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction={false}
        />
      </div>

      <div
        className="pointer-events-none fixed left-0 z-0"
        style={{
          bottom: "2%",
          width: "100vw",
          height: "36vw",
          maxHeight: "380px",
          WebkitMaskImage: "url(/images/work/welcome-line-2.png)",
          maskImage: "url(/images/work/welcome-line-2.png)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Dither
          waveColor={[0.3, 0.85, 0.6]}
          waveSpeed={0.04}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction={false}
        />
      </div>

      <motion.div
        className="splash-flash"
        initial={{ opacity: 1, scale: 0.15 }}
        animate={{ opacity: 0, scale: 3.5 }}
        transition={{ duration: timing.headerPopDuration * 1.1, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-[2] w-[96vw] max-w-[820px] sm:max-w-[980px] md:max-w-[1160px]"
        initial={{ opacity: 0, scale: 0.55 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: timing.headerPopDuration, ease: POP_EASE }}
      >
        <Image
          src="/images/welcome/welcome-text.png"
          alt="Hey, welcome to my portfolio — Technical Art · 3D · Immersive · Virtual Reality · UI/UX"
          width={8192}
          height={2252}
          priority
          sizes="(min-width: 900px) 1160px, 96vw"
          className="block h-auto w-full"
        />
      </motion.div>
    </div>
  );
}
