import AnimatedSection, { type AnimationType } from "@/components/AnimatedSection";
import ModelGridTile from "@/components/ModelGridTile";
import TargetCursor from "@/components/TargetCursor";

const MODEL_ITEMS: { image: string; alt: string; anim: AnimationType }[] = [
  { image: "/images/models/models-cover-portal-gate.jpg", alt: "Portal Market entrances", anim: "rotateInLeft" },
  { image: "/images/models/models-cover-castle-gate.jpg", alt: "Ancient Castle gate", anim: "rotateInTop" },
  { image: "/images/models/models-cover-castle-entrance.jpg", alt: "Ancient Castle entrance", anim: "rotateInRight" },
  { image: "/images/models/models-cover-wooden-door.jpg", alt: "Wooden Arch door", anim: "rotateInTop" },
  { image: "/images/models/models-cover-six-pillars.jpg", alt: "Six Pillars & Treasure", anim: "rotateInLeft" },
  { image: "/images/models/models-cover-wall.jpg", alt: "Market wall", anim: "rotateInBottom" },
  { image: "/images/models/models-cover-sword-stand.jpg", alt: "Sword Attachment", anim: "rotateInBottom" },
];

export default function ModelsPage() {
  return (
    <div className="page-shell" style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}>
      <TargetCursor
        spinDuration={4}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.5}
        cursorColor="#ffffff"
        cursorColorOnTarget="#ffffff"
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {MODEL_ITEMS.map((item, i) => (
          <AnimatedSection key={item.alt} type={item.anim} duration={1} delay={0.15 + i * 0.08}>
            <ModelGridTile image={item.image} alt={item.alt} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
