export interface ProjectSubsection {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  images?: string[];
}

export interface ProjectListItem {
  title: string;
  description: string;
}

export interface ProjectSection {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
  images?: string[];
  subsections?: ProjectSubsection[];
  list?: ProjectListItem[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  cardDescription: string;
  role: string;
  roleDescription?: string;
  projectInfo?: string;
  tools: string[];
  mediaLabel: string;
  youtubeId?: string;
  coverImage?: string;
  sections: ProjectSection[];
}

const PLACEHOLDER: string[] = [];
const COMING_SOON = ["Coming Soon"];

export const projects: Project[] = [
  {
    slug: "runemere",
    title: "Runemere",
    category: "VR Survival Escape Adventure",
    year: "2026",
    cardDescription: "A VR survival-escape game guided by diegetic storytelling.",
    role: "Technical Artist and Game Designer",
    tools: ["Unreal Engine 5"],
    mediaLabel: "[YouTube Video Embed]",
    sections: [
      {
        id: "game-idea",
        label: "Game Idea",
        heading: "Game Idea",
        paragraphs: COMING_SOON,
      },
      {
        id: "design-documentation",
        label: "Design Docs",
        heading: "Design Docs",
        paragraphs: COMING_SOON,
      },
      {
        id: "3d-assets",
        label: "3D Assets",
        heading: "3D Assets",
        paragraphs: COMING_SOON,
      },
      {
        id: "systems-implementation",
        label: "Systems Implementation",
        heading: "Systems Implementation",
        paragraphs: COMING_SOON,
      },
      {
        id: "environment",
        label: "Environment",
        heading: "Environment",
        paragraphs: COMING_SOON,
      },
      {
        id: "research",
        label: "Research",
        heading: "Research",
        paragraphs: COMING_SOON,
      },
    ],
  },
  {
    slug: "sealed-in-stone",
    title: "Sealed in Stone",
    category: "VR Puzzle Adventure",
    year: "2026",
    cardDescription: "Solo creator responsible for concept to playable experience.",
    role: "VR Technical Artist and Game Designer",
    roleDescription: "Solo creator responsible for concept to playable experience.",
    projectInfo: "MSc Artefact, Brunel University London | Distinction | 2026",
    tools: [
      "Unity 6",
      "XR Interaction Toolkit",
      "Blender",
      "Substance Painter",
      "Photoshop",
      "C#",
      "Figma",
      "ChatGPT",
      "Eleven Labs",
      "AI",
    ],
    mediaLabel: "[YouTube Video Embed]",
    coverImage: "/images/work/sealed-in-stone.png",
    sections: [
      {
        id: "game-idea",
        label: "Game Idea",
        heading: "Game Idea",
        paragraphs: [
          "Sealed in Stone is an immersive VR puzzle adventure set within an ancient fantasy environment. The narrative concept centers on an ancient palace that has been guarded for two centuries by a cursed warrior, condemned to protect its secret until a worthy challenger breaks the curse. When a young character discovers the palace and uncovers its hidden secret, the warrior captures them and imprisons them within the castle walls. The player takes the role of the character's companion, entering the palace to solve an ancient puzzle, break the curse, and rescue the young character.",
          "The project is developed using Unity 6 with the XR interaction toolkit, targeting a head-mounted display for VR experiences. The core design focused on physical immersion, ensuring that every puzzle interaction system is designed to be unique through virtual reality experiences.",
        ],
      },
      {
        id: "design-documentation",
        label: "Design Docs",
        heading: "Design Docs",
        paragraphs: PLACEHOLDER,
        subsections: [
          {
            id: "narrative-storyboard",
            label: "Narrative Storyboard",
            heading: "Narrative Storyboard",
            paragraphs: [
              "Nine hand-drawn storyboards documenting the full player journey. Each view captures environment layout, puzzle placement and player perspective. No AI generation was used at any stage of the storyboard production.",
            ],
            image: "/images/work/sealed-in-stone-storyboard.jpg",
          },
          {
            id: "interaction-design",
            label: "Game Flow Diagram",
            heading: "Game Flow Diagram",
            paragraphs: [
              "Three distinct physical puzzle interactions designed specifically for VR, each requiring a different cognitive skill.",
            ],
            image: "/images/work/sealed-in-stone-interaction-Game-flow-diagram.jpg",
          },
          {
            id: "pre-visualisation",
            label: "Pre-visualisation",
            heading: "Pre-visualisation",
            paragraphs: [
              "Full low-polygon 3D previsualization built in Blender before Unity development.",
            ],
            image: "/images/work/sealed-in-stone-pre-visual.png",
          },
          {
            id: "design-references",
            label: "Visual References",
            heading: "Visual References",
            paragraphs: PLACEHOLDER,
            images: [
              "/images/work/sealed-in-stone-design-ref-1.png",
              "/images/work/sealed-in-stone-design-ref-2.png",
              "/images/work/sealed-in-stone-design-ref-3.png",
              "/images/work/sealed-in-stone-design-ref-4.png",
            ],
          },
        ],
      },
      {
        id: "3d-assets",
        label: "3D Assets",
        heading: "3D Assets",
        paragraphs: [
          "All primary environment assets were modelled in Blender and textured in Substance Painter and Photoshop.",
        ],
      },
      {
        id: "systems-implementation",
        label: "Systems Implementation",
        heading: "Systems Implementation",
        paragraphs: [
          "Each puzzle uses XR Grab Interactable and XR Socket Interactor components with a custom tag-based matching system ensuring only the correct object fits each socket. Every system is controlled by C# scripts managing triggers, tags, animations, effects, audio and game mechanics, each stage independently controlling, managing and triggering the next.",
        ],
        images: ["/images/work/sealed-in-stone-system-implementation.jpg"],
      },
      {
        id: "environment",
        label: "Environments",
        heading: "Environments",
        paragraphs: PLACEHOLDER,
      },
      {
        id: "research",
        label: "Research",
        heading: "Research",
        paragraphs: ["Research grounded in academic areas."],
        list: [
          {
            title: "Presence Theory",
            description:
              "Explores how users feel physically located inside a virtual environment. Higher presence creates stronger emotional engagement than flat screen experiences.",
          },
          {
            title: "Immersion in VR",
            description:
              "Examines the technical capability of VR systems to deliver convincing sensory experiences. Visual, auditory and body tracking combine to create full immersion.",
          },
          {
            title: "VR Game Design Pillars",
            description:
              "Identifies perception, interaction and navigation as the three core design principles for VR games. These pillars guided the design of all three puzzle situations.",
          },
          {
            title: "Physical Puzzle Interaction Design",
            description:
              "Physical grab and placement mechanics create more engaging puzzle experiences in VR. Players feel more satisfied solving puzzles through physical actions rather than button presses.",
          },
          {
            title: "VR Game User Experience",
            description:
              "Analysis of how players respond to different VR game genres and interaction systems. Combining immersive storytelling with physical interaction produces the strongest player engagement.",
          },
          {
            title: "MDA Framework",
            description:
              "A game design framework analysing games through Mechanics, Dynamics and Aesthetics. Design began with intended player feelings and worked backwards to mechanical implementation.",
          },
        ],
      },
    ],
  },
  {
    slug: "illusion-of-the-astronauts-mind",
    title: "Illusion of the Astronaut's Mind",
    category: "Environmental / Experimental Game World",
    year: "2025",
    cardDescription: "An experimental world exploring perception and reality.",
    role: "Environmental & Experience Designer",
    tools: ["Unreal Engine", "Blender", "Photoshop"],
    mediaLabel: "[Project Image]",
    youtubeId: "mBVdNifujzE",
    coverImage: "/images/work/illusion-of-the-astronauts-mind.png",
    sections: [
      {
        id: "concept",
        label: "Concept",
        heading: "Concept",
        paragraphs: [
          "An astronaut is sent into space on a critical mission. During his journey, a sudden technical failure causes the spacecraft to crash into the Indian Ocean, near the Asian coast. The crash kills him instantly, and his body begins floating in the water, carried by the waves. Yet somehow, he finds himself standing on the coast, looking out at the ocean. As he watches the floating body, he slowly realizes that it is his own.",
          "He is dead, but still somehow able to see himself. The mission remains unfinished, and there is nothing he can do but watch his body drift away. The moment becomes a strange illusion between life and death, where he is forced to witness his own ending.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/work/sealed-in-stone-storyboard.jpg": { width: 1800, height: 1392 },
  "/images/work/sealed-in-stone-pre-visual.png": { width: 688, height: 1800 },
  "/images/work/sealed-in-stone-system-implementation.jpg": { width: 1800, height: 1771 },
  "/images/work/sealed-in-stone-design-ref-1.png": { width: 947, height: 359 },
  "/images/work/sealed-in-stone-design-ref-2.png": { width: 965, height: 879 },
  "/images/work/sealed-in-stone-design-ref-3.png": { width: 948, height: 687 },
  "/images/work/sealed-in-stone-design-ref-4.png": { width: 940, height: 1112 },
  "/images/work/sealed-in-stone-interaction-Game-flow-diagram.jpg": { width: 1584, height: 1800 },
};
