"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import OptionWheel from "./OptionWheel";
import type { UiUxProject } from "@/lib/uiuxProjects";

function CornerBrackets() {
  return (
    <>
      <span className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 border-t-[3px] border-l-[3px] border-white/85" />
      <span className="pointer-events-none absolute -top-3 -right-3 h-6 w-6 border-t-[3px] border-r-[3px] border-white/85" />
      <span className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 border-b-[3px] border-l-[3px] border-white/85" />
      <span className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-[3px] border-r-[3px] border-white/85" />
    </>
  );
}

interface WheelContent {
  type: "gallery" | "single" | "video" | "text" | "empty";
  images?: string[];
  image?: string;
  video?: string;
  text?: string;
  overlayText?: string;
  dims?: { width: number; height: number };
  offsetY?: number;
  widthPercent?: number;
  centerLine?: boolean;
  corners?: boolean;
}

interface ProjectWheelData {
  items: string[];
  content: Record<string, WheelContent>;
}

const UIUX_WHEEL_DATA: Record<string, ProjectWheelData> = {
  storygen: {
    items: [
      "High-Fidelity UI",
      "Background",
      "User Persona",
      "Storyboard",
      "Moodboard",
      "Logo design",
      "Wireframes",
      "UX flow",
      "Tools & technology",
      "API connection",
      "Image generation",
      "Welcome Animation",
    ],
    content: {
      "High-Fidelity UI": {
        type: "gallery",
        images: [
          "/images/ui-ux/storygen/UI1.jpg",
          "/images/ui-ux/storygen/UI2.jpg",
          "/images/ui-ux/storygen/UI3.jpg",
          "/images/ui-ux/storygen/UI4.jpg",
          "/images/ui-ux/storygen/UI5.jpg",
          "/images/ui-ux/storygen/UI6.jpg",
        ],
        offsetY: -110,
      },
      Background: {
        type: "text",
        text: "Non-designers struggle to create professional social media content — existing AI tools require technical knowledge, complex workflows, and manual formatting for every platform. StoryGen removes these barriers by combining AI image and video generation with automatic platform sizing, so anyone can go from an idea to a ready-to-post visual in minutes.",
      },
      "User Persona": {
        type: "single",
        image: "/images/ui-ux/storygen/user-persona.png",
        dims: { width: 1576, height: 681 },
        offsetY: 120,
        widthPercent: 88,
        corners: true,
      },
      Storyboard: {
        type: "single",
        image: "/images/ui-ux/storygen/storyboard.png",
        dims: { width: 1251, height: 939 },
        widthPercent: 82,
        centerLine: true,
        offsetY: -110,
        corners: true,
      },
      Moodboard: {
        type: "single",
        image: "/images/ui-ux/storygen/moodboard.png",
        dims: { width: 1939, height: 1119 },
        widthPercent: 82,
        centerLine: true,
        offsetY: -110,
        corners: true,
      },
      "Logo design": {
        type: "single",
        image: "/images/ui-ux/storygen/logo.png",
        dims: { width: 1126, height: 478 },
        widthPercent: 72,
        centerLine: true,
        offsetY: -140,
        corners: true,
      },
      Wireframes: {
        type: "single",
        image: "/images/ui-ux/storygen/wireframes.png",
        dims: { width: 1862, height: 1743 },
        widthPercent: 82,
        centerLine: true,
        offsetY: -110,
        corners: true,
      },
      "UX flow": {
        type: "single",
        image: "/images/ui-ux/storygen/flow-diagram.jpg",
        dims: { width: 6400, height: 8640 },
        widthPercent: 90,
        offsetY: -40,
      },
      "Tools & technology": {
        type: "single",
        image: "/images/ui-ux/storygen/tools.png",
        dims: { width: 3515, height: 844 },
        widthPercent: 92,
        centerLine: true,
        offsetY: -130,
        corners: true,
      },
      "API connection": {
        type: "single",
        image: "/images/ui-ux/storygen/api-connection.png",
        dims: { width: 2216, height: 1960 },
        overlayText:
          "StoryGen Integrated OpenAI, Google Gemini 2.5 Flash, and Runway ML APIs into a Next.js 15 application, with the Prompt Enhancer feature running live in the deployed version.",
        widthPercent: 55,
        centerLine: true,
        offsetY: -150,
        corners: true,
      },
      "Image generation": {
        type: "single",
        image: "/images/ui-ux/storygen/image-generation.png",
        dims: { width: 4905, height: 9508 },
        widthPercent: 92,
        offsetY: -110,
      },
      "Welcome Animation": {
        type: "video",
        video: "/images/ui-ux/storygen/welcome-animation.mp4",
        widthPercent: 58,
        centerLine: true,
        offsetY: -80,
        corners: true,
      },
    },
  },
  routex: {
    items: [
      "High-fidelity",
      "User Persona",
      "Info Architecture",
      "Low-fidelity",
      "Logo design",
      "Brand board",
      "Research",
    ],
    content: {
      "User Persona": {
        type: "single",
        image: "/images/ui-ux/routex/user-persona.png",
        dims: { width: 1301, height: 1248 },
        offsetY: 10,
        widthPercent: 59,
        corners: true,
      },
      "Info Architecture": {
        type: "single",
        image: "/images/ui-ux/routex/info-architecture.png",
        dims: { width: 2096, height: 2447 },
        widthPercent: 72,
        centerLine: true,
        offsetY: 90,
        corners: true,
      },
      "Low-fidelity": {
        type: "single",
        image: "/images/ui-ux/routex/wireframes.png",
        dims: { width: 3524, height: 3746 },
        widthPercent: 64,
        centerLine: true,
        offsetY: -110,
        corners: true,
      },
      "Logo design": {
        type: "single",
        image: "/images/ui-ux/routex/logo-design.png",
        dims: { width: 1340, height: 630 },
        widthPercent: 72,
        centerLine: true,
        offsetY: -110,
        corners: true,
      },
      "Brand board": {
        type: "single",
        image: "/images/ui-ux/routex/brandboard.png",
        dims: { width: 1396, height: 1438 },
        widthPercent: 73,
        centerLine: true,
        offsetY: -110,
        corners: true,
      },
      "High-fidelity": {
        type: "single",
        image: "/images/ui-ux/routex/high-fidelity.png",
        dims: { width: 3628, height: 9248 },
        widthPercent: 68,
        offsetY: -110,
      },
    },
  },
};

export default function UiUxDetail({ project }: { project: UiUxProject }) {
  const wheelData = UIUX_WHEEL_DATA[project.slug];
  const [activeItem, setActiveItem] = useState(wheelData?.items[0] ?? "");
  const content: WheelContent = wheelData?.content[activeItem] ?? { type: "empty" };

  return (
    <main className="page-shell">
      <div className="uiux-detail-header" style={{ paddingTop: "calc(var(--header-height) + 1.2rem)" }}>
        <AnimatedSection type="fadeInUp" duration={0.7}>
          <Link href="/ui-ux" className="back-link">
            ← Back to UI/UX
          </Link>
        </AnimatedSection>

        <AnimatedSection type="slideInLeft" duration={0.8}>
          <h1 className="text-[20px] md:text-[28px] font-light mb-0.5 tracking-tight">{project.title}</h1>
          <p className="max-w-[260px] text-[11px] uppercase tracking-[1.5px] text-white/45 mb-6">
            {project.category}
          </p>
        </AnimatedSection>
      </div>

      {wheelData ? (
        <div className="uiux-split">
          <div className="uiux-left" style={{ transform: "translateY(-108px)" }}>
            <OptionWheel
              items={wheelData.items}
              defaultSelected={0}
              textColor="#a6a6a6"
              activeColor="#ffffff"
              side="left"
              fontSize={2.4}
              spacing={1.5}
              curve={1}
              tilt={6}
              blur={2}
              fade={0.25}
              smoothing={200}
              inset={48}
              loop
              draggable
              onChange={(_, item) => setActiveItem(item)}
            />
          </div>
          <div className="uiux-right" style={{ transform: "translateY(-48px)" }}>
            <AnimatedSection key={activeItem} type="slideInRight" duration={0.6}>
              {content.type === "gallery" && (
                <div style={{ marginTop: content.offsetY }}>
                  {content.images?.map((src, i) => (
                    <AnimatedSection key={src} type="fadeInUp" duration={0.7} delay={i * 0.05}>
                      <div className="relative">
                        <Image
                          src={src}
                          alt={`${project.title} screen ${i + 1}`}
                          width={1920}
                          height={1080}
                          quality={100}
                          unoptimized
                          className="block h-auto w-full"
                        />
                        {content.corners && <CornerBrackets />}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}

              {content.type === "single" &&
                content.image &&
                content.dims &&
                (content.centerLine ? (
                  <div
                    className="flex items-center justify-center"
                    style={{ height: "calc(100vh - var(--header-height) - 6rem)" }}
                  >
                    <div
                      className="relative"
                      style={{
                        width: content.widthPercent ? `${content.widthPercent}%` : "100%",
                        marginTop: content.offsetY,
                      }}
                    >
                      <Image
                        src={content.image}
                        alt={`${project.title} ${activeItem}`}
                        width={content.dims.width}
                        height={content.dims.height}
                        quality={100}
                        unoptimized
                        className="block h-auto w-full"
                      />
                      {content.overlayText && (
                        <div className="absolute inset-0 flex items-center justify-center px-[26%]">
                          <p
                            className="text-center text-[12px] leading-[1.6] text-white/85"
                            style={{ marginTop: 60 }}
                          >
                            {content.overlayText}
                          </p>
                        </div>
                      )}
                      {content.corners && <CornerBrackets />}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative ${content.widthPercent ? "mx-auto" : ""}`}
                    style={{
                      marginTop: content.offsetY,
                      maxWidth: content.widthPercent ? `${content.widthPercent}%` : undefined,
                    }}
                  >
                    <Image
                      src={content.image}
                      alt={`${project.title} ${activeItem}`}
                      width={content.dims.width}
                      height={content.dims.height}
                      quality={100}
                      unoptimized
                      className="block h-auto w-full"
                    />
                    {content.corners && <CornerBrackets />}
                  </div>
                ))}

              {content.type === "video" && content.video && (
                <div
                  className="flex items-center justify-center"
                  style={{ height: "calc(100vh - var(--header-height) - 6rem)" }}
                >
                  <div
                    className="relative"
                    style={{
                      width: content.widthPercent ? `${content.widthPercent}%` : "100%",
                      marginTop: content.offsetY,
                    }}
                  >
                    <video
                      src={content.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="block h-auto w-full"
                    />
                    {content.corners && <CornerBrackets />}
                  </div>
                </div>
              )}

              {content.type === "text" && content.text && (
                <div
                  className="flex items-center"
                  style={{ height: "calc(100vh - var(--header-height) - 6rem)", marginLeft: "-3rem" }}
                >
                  <p className="max-w-[560px] text-right text-[15px] leading-[1.8] text-white/75">
                    {content.text}
                  </p>
                </div>
              )}

              {content.type === "empty" && (
                <p className="text-[12px] uppercase tracking-[1.5px] text-white/35 mt-4">[Content coming soon]</p>
              )}
            </AnimatedSection>
          </div>
        </div>
      ) : (
        <p className="text-[12px] uppercase tracking-[1.5px] text-white/35 mt-4">[Content coming soon]</p>
      )}
    </main>
  );
}
