"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import DepthCarousel from "./DepthCarousel";
import MediaPlaceholder from "./MediaPlaceholder";
import YouTubeEmbed from "./YouTubeEmbed";
import { IMAGE_DIMENSIONS, type Project, type ProjectListItem, type ProjectSection } from "@/lib/projects";

const SEALED_IN_STONE_MODEL_ITEMS = [
  { image: "/images/work/sealed-in-stone-model-1.jpg", alt: "Portal Market Entrances" },
  { image: "/images/work/sealed-in-stone-model-2.jpg", alt: "Ancient Castle Gate" },
  { image: "/images/work/sealed-in-stone-model-3.jpg", alt: "Ancient Castle Entrance" },
  { image: "/images/work/sealed-in-stone-model-4.jpg", alt: "Wooden Arch Door" },
  { image: "/images/work/sealed-in-stone-model-5.jpg", alt: "Six Pillars & Treasure" },
  { image: "/images/work/sealed-in-stone-model-6.jpg", alt: "Market Wall" },
  { image: "/images/work/sealed-in-stone-model-7.jpg", alt: "Sword Attachment" },
];

const CAROUSEL_SIZE_TIERS = [
  { minWidth: 2400, cardWidth: 1040, cardHeight: 520, wrapperHeight: 900, spread: 95 },
  { minWidth: 2000, cardWidth: 900, cardHeight: 450, wrapperHeight: 780, spread: 95 },
  { minWidth: 1600, cardWidth: 760, cardHeight: 380, wrapperHeight: 680, spread: 95 },
  { minWidth: 0, cardWidth: 620, cardHeight: 310, wrapperHeight: 640, spread: 80 },
];

function getCarouselSize(width: number) {
  return CAROUSEL_SIZE_TIERS.find((tier) => width >= tier.minWidth) ?? CAROUSEL_SIZE_TIERS[CAROUSEL_SIZE_TIERS.length - 1];
}

export default function ProjectDetail({ project }: { project: Project }) {
  const [activeSectionId, setActiveSectionId] = useState(project.sections[0].id);
  const [activeSubsectionId, setActiveSubsectionId] = useState<string | undefined>(
    project.sections[0].subsections?.[0]?.id
  );

  const currentSection = project.sections.find((s) => s.id === activeSectionId) ?? project.sections[0];
  const currentSubsection = currentSection.subsections?.find((s) => s.id === activeSubsectionId);

  const [carouselSize, setCarouselSize] = useState(CAROUSEL_SIZE_TIERS[CAROUSEL_SIZE_TIERS.length - 1]);

  useEffect(() => {
    const updateCarouselSize = () => setCarouselSize(getCarouselSize(window.innerWidth));
    updateCarouselSize();
    window.addEventListener("resize", updateCarouselSize);
    return () => window.removeEventListener("resize", updateCarouselSize);
  }, []);

  function handleSectionClick(section: ProjectSection) {
    setActiveSectionId(section.id);
    setActiveSubsectionId(section.subsections?.[0]?.id);
  }

  return (
    <div
      className="page-shell project-detail-page pb-16"
      style={{ paddingTop: "calc(var(--header-height) + 2rem)" }}
    >
      <div className="detail-split">
        <div className="detail-left thin-scroll">
          <AnimatedSection type="fadeInUp" duration={0.7}>
            <Link href="/" className="back-link">
              ← Back to Work
            </Link>
          </AnimatedSection>

          <AnimatedSection type="slideInLeft" duration={0.8}>
            <h1 className="text-[20px] md:text-[28px] font-light mb-0.5 tracking-tight">{project.title}</h1>
            <p className="text-[11px] uppercase tracking-[1.5px] text-black/45 mb-6">
              {project.year} — {project.category}
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideInLeft" duration={0.8} delay={0.1}>
            <div className="media-box-wrap">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-black/10 detail-media-bg">
                {project.youtubeId ? (
                  <YouTubeEmbed id={project.youtubeId} title={project.title} />
                ) : (
                  <MediaPlaceholder label={project.mediaLabel} />
                )}
              </div>
            </div>
          </AnimatedSection>

          <div className="border-t border-black/10 pt-6 mt-3 pb-8 flex flex-col gap-0.5">
            <AnimatedSection type="fadeInUp" duration={0.6} delay={0.2} className="-mt-2">
              <p className="text-[12px] uppercase tracking-[1.5px] text-black/45 mb-1">Role</p>
              <p className="text-[16px] text-black/75">{project.role}</p>
              {project.roleDescription && (
                <p className="text-[13px] leading-[1.6] text-black/40 mt-0">{project.roleDescription}</p>
              )}
            </AnimatedSection>

            {project.projectInfo && (
              <AnimatedSection type="fadeInUp" duration={0.6} delay={0.22} className="mt-4">
                <p className="text-[12px] uppercase tracking-[1.5px] text-black/45 mb-1">Project</p>
                <p className="text-[16px] text-black/75">{project.projectInfo}</p>
              </AnimatedSection>
            )}

            <AnimatedSection type="fadeInUp" duration={0.6} delay={0.25} className="mt-4">
              <p className="text-[12px] uppercase tracking-[1.5px] text-black/45 mb-1">
                Tools &amp; Technologies
              </p>
              <div className="tools-wrap">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="detail-right thin-scroll">
          {(project.sections.length > 1 || currentSection.subsections) && (
            <div className="detail-tabs-sticky">
              {project.sections.length > 1 && (
                <div className="tabs-grid">
                  {project.sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => handleSectionClick(section)}
                      className="tab-btn"
                      data-active={section.id === activeSectionId}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              )}

              {currentSection.subsections && (
                <div className="sub-tabs-grid">
                  {currentSection.subsections.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setActiveSubsectionId(sub.id)}
                      className="tab-btn tab-btn--sub"
                      data-active={sub.id === activeSubsectionId}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <SectionBody
            key={`${currentSection.id}-${currentSubsection?.id ?? ""}`}
            heading={currentSubsection?.heading ?? currentSection.heading}
            showHeading={!(project.sections.length > 1 || currentSection.subsections)}
            paragraphs={currentSubsection?.paragraphs ?? currentSection.paragraphs}
            images={
              currentSubsection?.images ??
              (currentSubsection?.image ? [currentSubsection.image] : currentSection.images)
            }
            list={currentSection.list}
          >
            {project.slug === "sealed-in-stone" && currentSection.id === "3d-assets" && (
              <div style={{ height: carouselSize.wrapperHeight, position: "relative", marginTop: "-150px" }}>
                <DepthCarousel
                  items={SEALED_IN_STONE_MODEL_ITEMS}
                  depth={210}
                  spread={carouselSize.spread}
                  tilt={22}
                  tiltDirection="right"
                  perspective={1500}
                  visibleCards={4}
                  falloff={0.1}
                  blur={0}
                  autoplay={false}
                  loop
                  cardWidth={carouselSize.cardWidth}
                  cardHeight={carouselSize.cardHeight}
                  radius={0}
                  tint="#05060a"
                  duration={700}
                  ease="power3.out"
                  autoplayDelay={3200}
                  showControls
                  showIndicators
                />
              </div>
            )}
          </SectionBody>
        </div>
      </div>
    </div>
  );
}

function SectionBody({
  heading,
  showHeading,
  paragraphs,
  images,
  list,
  children,
}: {
  heading: string;
  showHeading: boolean;
  paragraphs: string[];
  images?: string[];
  list?: ProjectListItem[];
  children?: React.ReactNode;
}) {
  return (
    <AnimatedSection type="sectionFadeIn" duration={0.4} className="pb-8">
      <div className="mt-6 px-2">
        {showHeading && (
          <div className="border-b border-black/10 pb-4 mb-4">
            <h2
              className="tab-btn inline-flex items-center justify-center w-[168px] h-[48px] text-center"
              data-active="true"
            >
              {heading}
            </h2>
          </div>
        )}
        {paragraphs.map((p, i) => {
          const isCaptionSection =
            heading === "Narrative Storyboard" ||
            heading === "Game Flow Diagram" ||
            heading === "Pre-visualisation" ||
            heading === "Visual References";
          return (
            <p
              key={i}
              className={`font-light text-[14px] mb-5 ${
                isCaptionSection ? "text-black/45 text-center" : "text-black/70 text-justify"
              } ${heading === "Narrative Storyboard" ? "leading-[1.4]" : "leading-[1.8]"}`}
            >
              {p}
            </p>
          );
        })}
        {list && (
          <ul className="list-disc pl-5 mb-5 space-y-2">
            {list.map((item) => (
              <li key={item.title} className="text-black/70">
                <p className="text-[13px] font-normal text-black/80 mb-0">{item.title}</p>
                <p className="font-light text-[14px] leading-[1.8] text-black/70 text-justify">{item.description}</p>
              </li>
            ))}
          </ul>
        )}
        {images?.map((img, i) => {
          const dims = IMAGE_DIMENSIONS[img] ?? { width: 1800, height: 1411 };
          const isDesignReferences = heading === "Visual References";
          const isPreVisualisation = heading === "Pre-visualisation";
          const isInteractionDesign = heading === "Game Flow Diagram";
          const isSystemsImplementation = heading === "Systems Implementation";
          const useFullQualityLayout = [
            "Narrative Storyboard",
            "Game Flow Diagram",
            "Pre-visualisation",
            "Visual References",
            "Systems Implementation",
          ].includes(heading);
          return (
            <div
              key={img}
              className={`w-full ${useFullQualityLayout ? "overflow-visible" : "overflow-hidden"} ${
                isDesignReferences ? "mb-2" : "mb-6"
              } ${useFullQualityLayout ? "" : "doc-image"}`}
            >
              {isDesignReferences && (
                <p className="text-[13px] font-normal text-black/45 mb-0 text-center">
                  Level Reference {i + 1}
                </p>
              )}
              <Image
                src={img}
                alt={heading}
                width={dims.width}
                height={dims.height}
                quality={100}
                unoptimized={useFullQualityLayout}
                className={
                  useFullQualityLayout
                    ? `block mx-auto h-auto ${
                        isDesignReferences
                          ? "w-[54%] mt-0"
                          : isPreVisualisation
                            ? "w-[78%] -mt-10"
                            : isInteractionDesign
                              ? "w-[85%] -mt-2"
                              : isSystemsImplementation
                                ? "w-[85%] -mt-2"
                                : "w-[85%] -mt-2"
                      }`
                    : "doc-image-img h-auto"
                }
              />
            </div>
          );
        })}
        {children}
      </div>
    </AnimatedSection>
  );
}
