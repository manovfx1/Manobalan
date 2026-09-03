"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import MediaPlaceholder from "./MediaPlaceholder";

interface CardProject {
  slug: string;
  title: string;
  category: string;
  year?: string;
  coverImage?: string;
}

interface ProjectCardProps {
  project: CardProject;
  delay?: number;
  index?: number;
  basePath?: string;
  aspectRatio?: string;
  imageInset?: boolean;
}

export default function ProjectCard({
  project,
  delay = 0.3,
  index = 0,
  basePath = "/projects",
  aspectRatio = "1920 / 900",
  imageInset = false,
}: ProjectCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <AnimatedSection type={index % 2 === 0 ? "rotateInLeft" : "rotateInRight"} duration={1} delay={delay}>
      <Link
        href={`${basePath}/${project.slug}`}
        className="group block transition-transform duration-500 hover:-translate-y-1.5"
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        <div ref={wrapRef} onMouseMove={handleMouseMove} className="card-shadow-wrap">
          <div
            className="media-dots relative w-full overflow-hidden rounded-2xl border border-white/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-colors duration-500 group-hover:border-white/50"
            style={{ aspectRatio }}
          >
            {project.coverImage ? (
              imageInset ? (
                <div className="absolute inset-[20%]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              )
            ) : (
              <MediaPlaceholder label="Coming Soon" />
            )}
            {project.year && (
              <span className="card-year" aria-hidden="true">
                {project.year}
              </span>
            )}
          </div>
          <div className="cursor-move-follower" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="cursorArrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff5252" />
                  <stop offset="55%" stopColor="#e30909" />
                  <stop offset="100%" stopColor="#5c0000" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="8" stroke="#e5e5e5" strokeWidth="4" />
              <g className="cursor-move-arrows" style={{ transformOrigin: "50px 50px" }}>
                <path
                  d="M50 4 L38 26 L50 22 L62 26 Z"
                  fill="url(#cursorArrowGradient)"
                  stroke="#f2f2f2"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 96 L38 74 L50 78 L62 74 Z"
                  fill="url(#cursorArrowGradient)"
                  stroke="#f2f2f2"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 50 L26 38 L22 50 L26 62 Z"
                  fill="url(#cursorArrowGradient)"
                  stroke="#f2f2f2"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M96 50 L74 38 L78 50 L74 62 Z"
                  fill="url(#cursorArrowGradient)"
                  stroke="#f2f2f2"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="card-caption mt-2">
          <h3 className="text-lg md:text-xl font-light">{project.title}</h3>
          <p className="text-[10px] uppercase tracking-[1.5px] text-white/45 mb-1">{project.category}</p>
        </div>
      </Link>
    </AnimatedSection>
  );
}
