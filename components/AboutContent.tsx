"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const ACCENT = "#EA580C";

const WHAT_I_DO = [
  "VR/XR Design",
  "3D Modelling",
  "Interactive Systems",
  "Environmental Storytelling",
  "UI/UX Design",
  "Generative AI",
];

const WHAT_I_DO_DESCRIPTION =
  "I work across the pipeline from 3D asset creation to interactive systems — building VR/XR experiences, technical art tooling, and interfaces that feel considered, tactile, and alive.";

function EnginesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" strokeLinecap="round" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" strokeLinejoin="round" />
      <path d="M3 7l9 5 9-5M12 12v10" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 5 2 12l6 7M16 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 3.5 20.5 9.5 8 22H2v-6L14.5 3.5Z" strokeLinejoin="round" />
      <path d="M12 6 18 12" strokeLinecap="round" />
    </svg>
  );
}

function MotionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M9.5 9.2v5.6l5-2.8-5-2.8Z" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface SkillCard {
  icon: () => ReactNode;
  label: string;
  tools: string;
}

const SKILL_CARDS: SkillCard[] = [
  { icon: EnginesIcon, label: "Engines", tools: "Unreal Engine 5 · Unity 6" },
  { icon: CubeIcon, label: "3D & Textures", tools: "Blender · Substance 3D Painter · Marvelous Designer" },
  { icon: CodeIcon, label: "Code", tools: "Python · C# (Basic) · GitHub" },
  { icon: DesignIcon, label: "Design", tools: "Figma · Illustrator · Photoshop" },
  { icon: MotionIcon, label: "Motion", tools: "Cinema 4D · After Effects" },
  { icon: SparkleIcon, label: "AI Tools", tools: "Generative AI Tools" },
];

interface ExperienceEntry {
  title: string;
  company?: string;
  dates: string;
  description: string;
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Senior 3D Artist",
    company: "Zee Entertainment Enterprises",
    dates: "Nov 2024 – Sep 2025",
    description:
      "Broadcast compositing, animation, motion tracking, virtual production, and real-time visual set technology.",
  },
  {
    title: "3D Graphics Artist",
    company: "Freelancer - Self employed & Contract",
    dates: "Oct 2023 – Dec 2025",
    description: "VFX, motion graphics, 3D animation for film/broadcast.",
  },
];

export default function AboutContent() {
  return (
    <main
      className="page-shell about-page bg-black text-white"
      style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}
    >
      <div className="about-split">
        <div className="about-content">
          <AnimatedSection type="pageIn" duration={0.7}>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Hi, I&apos;m Manobalan</h1>
            <p className="text-[15px] leading-[1.5] text-white/70 mb-10">
              Technical Artist &amp; UI/UX Designer | Passionate about building Immersive Digital Experiences
            </p>
          </AnimatedSection>

          <AnimatedSection type="fadeInUp" duration={0.6} delay={0.1} className="mb-12">
            <p
              className="text-[11px] uppercase tracking-[2px] font-semibold mb-2"
              style={{ color: ACCENT }}
            >
              01 / Focus
            </p>
            <h2 className="text-[28px] md:text-[34px] font-black leading-[0.95] tracking-tight mb-6">
              WHAT I DO
            </h2>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {WHAT_I_DO.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[13px] font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  {item}
                </span>
              ))}
            </div>
            <p className="text-[15px] leading-[1.7] text-white/70 max-w-[520px]">{WHAT_I_DO_DESCRIPTION}</p>
          </AnimatedSection>

          <div className="border-t border-white/10 mb-12" />

          <AnimatedSection type="fadeInUp" duration={0.6} delay={0.15} className="mb-12">
            <h2 className="text-[28px] md:text-[34px] font-black leading-[0.95] tracking-tight mb-6">
              WHAT I KNOW
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CARDS.map(({ icon: Icon, label, tools }) => (
                <div key={label} className="rounded-2xl border border-white/10 p-5">
                  <Icon />
                  <p
                    className="text-[11px] uppercase tracking-[1.5px] font-semibold mt-4 mb-1"
                    style={{ color: ACCENT }}
                  >
                    {label}
                  </p>
                  <p className="text-[16px] font-semibold leading-snug">{tools}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection type="fadeInUp" duration={0.6} delay={0.2}>
            <p className="text-[12px] uppercase tracking-[1.5px] text-white/45 mb-3">Experience</p>
            <div className="flex flex-col gap-3">
              {EXPERIENCE.map((entry) => (
                <div key={entry.title} className="border-t border-white/10 pt-2.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[16px] text-white/85 mb-0.5">{entry.title}</h3>
                    <p className="text-[11px] uppercase tracking-[1.5px] text-white/40 whitespace-nowrap">
                      {entry.dates}
                    </p>
                  </div>
                  {entry.company && (
                    <p className="text-[13px] text-white/50 mb-2">{entry.company}</p>
                  )}
                  <p className="text-[14px] leading-[1.7] text-white/70">{entry.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection type="slideInRight" duration={0.8} className="about-photo">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/about/Profile_Picture_1.png"
              alt="Manobalan"
              fill
              sizes="(min-width: 900px) 520px, 80vw"
              quality={100}
              className="object-contain"
              priority
            />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
