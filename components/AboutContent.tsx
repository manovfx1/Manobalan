"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const TOOLS = [
  "Unreal Engine 5",
  "Unity 6",
  "Blender",
  "Substance 3D Painter",
  "Marvelous Designer",
  "Cinema 4D",
  "Figma",
  "Python",
  "C#",
  "GitHub",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "Generative AI tools",
];

const SKILLS = [
  "3D sculpting, modelling, and realistic texturing across professional and academic projects.",
  "Environment building and cinematic lighting (UE5, Unity) for spatial atmosphere and depth.",
  "Gameplay and system mechanics, interactive logic and user-facing VR systems.",
  "Basic Python and C# scripting with AI-assisted debugging and custom tool development.",
  "XR Interaction Toolkit for grabbing, sockets, and responsive interaction mechanics.",
  "UI/UX design (Figma) with user-centred thinking.",
  "Generative AI tools for image/video generation and creative prompt engineering.",
];

interface ExperienceEntry {
  title: string;
  company?: string;
  dates: string;
  description: string;
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Freelance 3D Animation & VFX Artist",
    dates: "Oct 2023 – Dec 2025",
    description: "VFX, motion graphics, 3D animation for film/broadcast.",
  },
  {
    title: "3D Motion Graphics Production Artist",
    company: "Zee Entertainment Enterprises",
    dates: "Nov 2024 – Sep 2025",
    description:
      "Broadcast compositing, animation, motion tracking, virtual production, and real-time visual set technology.",
  },
];

export default function AboutContent() {
  return (
    <main className="page-shell" style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}>
      <div className="about-split">
        <div className="about-content">
          <AnimatedSection type="pageIn" duration={0.7}>
            <h1 className="text-4xl md:text-5xl font-light mb-3 tracking-tight">Hi, I&apos;m Manobalan</h1>
            <p className="text-[15px] leading-[1.5] text-white/70 mb-6">
              Technical Artist &amp; UI/UX Designer | Passionate about building Immersive Digital Experiences
            </p>
          </AnimatedSection>

          <AnimatedSection type="fadeInUp" duration={0.6} delay={0.1} className="mb-6">
            <p className="text-[12px] uppercase tracking-[1.5px] text-white/45 mb-2">Tools &amp; Software</p>
            <div className="tools-wrap">
              {TOOLS.map((tool) => (
                <span key={tool} className="tool-tag">
                  {tool}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection type="fadeInUp" duration={0.6} delay={0.15} className="mb-6">
            <p className="text-[12px] uppercase tracking-[1.5px] text-white/45 mb-2">Skills Summary</p>
            <ul className="list-disc pl-5 space-y-1.5">
              {SKILLS.map((skill) => (
                <li key={skill} className="text-[14px] leading-[1.4] text-white/70">
                  {skill}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection type="fadeInUp" duration={0.6} delay={0.2} className="-mt-4">
            <p className="text-[12px] uppercase tracking-[1.5px] text-white/45 mb-3">Experience</p>
            <div className="flex flex-col gap-3">
              {EXPERIENCE.map((entry) => (
                <div key={entry.title} className="border-t border-white/10 pt-2.5">
                  <h3 className="text-[16px] text-white/85 mb-0.5">{entry.title}</h3>
                  <p className="text-[11px] uppercase tracking-[1.5px] text-white/40 mb-2">
                    {entry.company ? `${entry.company} — ` : ""}
                    {entry.dates}
                  </p>
                  <p className="text-[14px] leading-[1.7] text-white/70">{entry.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection type="slideInRight" duration={0.8} className="about-photo">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/about/profile-picture-2.png"
              alt="Manobalan"
              fill
              sizes="(min-width: 900px) 380px, 60vw"
              className="object-contain"
              priority
            />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
