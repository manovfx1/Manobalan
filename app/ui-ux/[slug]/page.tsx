import { notFound } from "next/navigation";
import UiUxDetail from "@/components/UiUxDetail";
import { getUiUxProject, uiuxProjects } from "@/lib/uiuxProjects";

export function generateStaticParams() {
  return uiuxProjects.map((p) => ({ slug: p.slug }));
}

export default async function UiUxProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getUiUxProject(slug);

  if (!project) {
    notFound();
  }

  return <UiUxDetail project={project} />;
}
