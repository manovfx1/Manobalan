"use client";

import { useState } from "react";
import AnimatedSection, { type AnimationType } from "@/components/AnimatedSection";
import ModelGridTile from "@/components/ModelGridTile";
import ModelLightbox from "@/components/ModelLightbox";
import TargetCursor from "@/components/TargetCursor";

interface ModelItem {
  image: string;
  model: string;
  alt: string;
  anim: AnimationType;
}

const MODEL_ITEMS: ModelItem[] = [
  {
    image: "/images/models/models-cover-portal-gate.jpg",
    model: "/models-3d/portal-gate.glb",
    alt: "Portal Market entrances",
    anim: "rotateInLeft",
  },
  {
    image: "/images/models/models-cover-castle-gate.jpg",
    model: "/models-3d/castle-gate.glb",
    alt: "Ancient Castle gate",
    anim: "rotateInTop",
  },
  {
    image: "/images/models/models-cover-castle-entrance.jpg",
    model: "/models-3d/castle-entrance.glb",
    alt: "Ancient Castle entrance",
    anim: "rotateInRight",
  },
  {
    image: "/images/models/models-cover-wooden-door.jpg",
    model: "/models-3d/wooden-door.glb",
    alt: "Wooden Arch door",
    anim: "rotateInTop",
  },
  {
    image: "/images/models/models-cover-six-pillars.jpg",
    model: "/models-3d/six-pillars.glb",
    alt: "Six Pillars & Treasure",
    anim: "rotateInLeft",
  },
  {
    image: "/images/models/models-cover-wall.jpg",
    model: "/models-3d/market-wall.glb",
    alt: "Market wall",
    anim: "rotateInBottom",
  },
  {
    image: "/images/models/models-cover-sword-stand.jpg",
    model: "/models-3d/sword-attachment.glb",
    alt: "Sword Attachment",
    anim: "rotateInBottom",
  },
];

export default function ModelsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? MODEL_ITEMS[activeIndex] : null;

  return (
    <div className="page-shell" style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}>
      <TargetCursor
        spinDuration={4}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.5}
        cursorColor="#000000"
        cursorColorOnTarget="#000000"
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {MODEL_ITEMS.map((item, i) => (
          <AnimatedSection key={item.alt} type={item.anim} duration={1} delay={0.15 + i * 0.08}>
            <ModelGridTile image={item.image} alt={item.alt} onClick={() => setActiveIndex(i)} />
          </AnimatedSection>
        ))}
      </div>

      {active && (
        <ModelLightbox
          key={active.alt}
          model={active.model}
          alt={active.alt}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
}
