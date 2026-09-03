"use client";

import { motion, type Variants, type Transition } from "framer-motion";

export const EASE_PREMIUM: Transition["ease"] = [0.23, 1, 0.32, 1];

export type AnimationType =
  | "slideInLeft"
  | "slideInRight"
  | "fadeInUp"
  | "sectionFadeIn"
  | "pageIn"
  | "rotateInLeft"
  | "rotateInRight"
  | "rotateInTop"
  | "rotateInBottom";

const variants: Record<AnimationType, Variants> = {
  slideInLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  sectionFadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  pageIn: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  rotateInLeft: {
    hidden: { opacity: 0, x: -320, rotate: -28, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
  rotateInRight: {
    hidden: { opacity: 0, x: 320, rotate: 28, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
  rotateInTop: {
    hidden: { opacity: 0, y: -320, rotate: -24, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
  rotateInBottom: {
    hidden: { opacity: 0, y: 320, rotate: 24, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  type = "fadeInUp",
  delay = 0,
  duration = 0.7,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants[type]}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}
