import AnimatedSection from "./AnimatedSection";

interface PlaceholderPageProps {
  heading: string;
  paragraphs: string[];
  comingSoon: string;
}

export default function PlaceholderPage({ heading, paragraphs, comingSoon }: PlaceholderPageProps) {
  return (
    <main className="page-shell" style={{ paddingTop: "calc(var(--header-height) + 3rem)" }}>
      <AnimatedSection type="pageIn" duration={0.7}>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">{heading}</h1>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.8] text-white/70 mb-5">
              {p}
            </p>
          ))}
          <p className="text-[12px] uppercase tracking-[1.5px] text-white/35 mt-10">{comingSoon}</p>
        </div>
      </AnimatedSection>
    </main>
  );
}
