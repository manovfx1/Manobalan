"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SplashScreen from "@/components/SplashScreen";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <main className="page-shell" style={{ paddingTop: "calc(var(--header-height) + 2.5rem)" }}>
      <SplashScreen onComplete={() => setRevealed(true)} />

      {revealed && (
        <div className="work-grid pb-12">
          {/* Runemere temporarily hidden from the grid */}
          {projects
            .filter((project) => project.slug !== "runemere")
            .map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={0.15 + i * 0.15} index={i} />
            ))}
        </div>
      )}
    </main>
  );
}
