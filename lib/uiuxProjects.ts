export interface UiUxProject {
  slug: string;
  title: string;
  category: string;
  coverImage?: string;
}

export const uiuxProjects: UiUxProject[] = [
  {
    slug: "storygen",
    title: "StoryGen",
    category: "A Multi-Model AI Platform for Social Media Content Creation",
    coverImage: "/images/ui-ux/storygen/UI1.jpg",
  },
  {
    slug: "routex",
    title: "Routex",
    category: "Student Budgeting Platform",
    coverImage: "/images/ui-ux/routex/cover-page.png",
  },
];

export function getUiUxProject(slug: string): UiUxProject | undefined {
  return uiuxProjects.find((p) => p.slug === slug);
}
