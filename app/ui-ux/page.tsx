import ProjectCard from "@/components/ProjectCard";
import { uiuxProjects } from "@/lib/uiuxProjects";

export default function UIUXPage() {
  return (
    <main className="page-shell" style={{ paddingTop: "calc(var(--header-height) + 2.5rem)" }}>
      <div className="work-grid pb-12">
        {uiuxProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            delay={0.15 + i * 0.15}
            index={i}
            basePath="/ui-ux"
          />
        ))}
      </div>
    </main>
  );
}
