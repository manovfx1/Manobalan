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
    category: "Survival Escape Adventure",
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
    cardDescription: "Created solo, from concept through to playable experience.",
    role: "VR Technical Artist and Game Designer",
    roleDescription: "Created solo, from concept through to playable experience.",
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
    youtubeId: "c-TcbldGPU8",
    coverImage: "/images/work/sealed-in-stone-cover.jpg",
    sections: [
      {
        id: "game-idea",
        label: "Game Idea",
        heading: "Game Idea",
        paragraphs: [
          "Sealed in Stone is an immersive VR puzzle adventure set in an ancient fantasy environment. The story centres on an ancient palace, guarded for two centuries by a cursed warrior who is condemned to protect its secret until a worthy challenger breaks the curse. When a young character discovers the palace and uncovers its hidden secret, the warrior captures them and imprisons them within its walls. The player takes on the role of the young character’s companion, entering the palace to solve an ancient puzzle, break the curse, and rescue them.",
          "The project is built in Unity 6 using the XR Interaction Toolkit and targets a VR headset. Its design prioritises physical immersion, with each puzzle offering a distinct interaction designed for virtual reality.",
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
              "Nine hand-drawn storyboards document the full player journey. Each frame captures the environment layout, puzzle placement, and player perspective. No AI was used at any stage of production.",
            ],
            image: "/images/work/sealed-in-stone-storyboard.jpg",
          },
          {
            id: "interaction-design",
            label: "Game Flow Diagram",
            heading: "Game Flow Diagram",
            paragraphs: [
              "The game features three distinct physical puzzles, each designed for VR and requiring a different cognitive skill.",
            ],
            image: "/images/work/sealed-in-stone-interaction-Game-flow-diagram.jpg",
          },
          {
            id: "pre-visualisation",
            label: "Pre-visualisation",
            heading: "Pre-visualisation",
            paragraphs: [
              "A complete low-poly 3D pre-visualisation created in Blender before development in Unity.",
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
          "All primary environment assets were modelled in Blender and textured using Substance Painter and Photoshop.",
        ],
      },
      {
        id: "systems-implementation",
        label: "Systems Implementation",
        heading: "Systems Implementation",
        paragraphs: [
          "Each puzzle uses XR Grab Interactable and XR Socket Interactor components, plus a custom tag-based matching system that ensures only the correct object fits each socket. C# scripts control triggers, tags, animations, visual effects, audio, and game mechanics. Each stage manages and triggers the next.",
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
        paragraphs: ["The design is informed by research into presence, immersion, and VR interaction."],
        list: [
          {
            title: "Presence Theory",
            description:
              "Presence theory explores how strongly users feel located within a virtual environment. A stronger sense of presence can increase emotional engagement compared with flat-screen experiences.",
          },
          {
            title: "Immersion in VR",
            description:
              "Research into VR immersion examines how systems use visual and auditory cues, along with body tracking, to create convincing sensory experiences.",
          },
          {
            title: "VR Game Design Pillars",
            description:
              "VR game design pillars identify perception, interaction, and navigation as three core design principles. These pillars informed the design of all three puzzles.",
          },
          {
            title: "Physical Puzzle Interaction Design",
            description:
              "Physical grabbing and object placement can make VR puzzles more engaging. Players may find solving puzzles through physical actions more satisfying than using button presses.",
          },
          {
            title: "VR Game User Experience",
            description:
              "Research into VR user experience examines how players respond to different game genres and interaction systems. Combining immersive storytelling with physical interaction can strengthen player engagement.",
          },
          {
            title: "MDA Framework",
            description:
              "The MDA framework analyses games through mechanics, dynamics, and aesthetics. The design process began with the intended player experience and worked backwards to the mechanics.",
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
          "An astronaut is sent into space on a critical mission. During his journey, a sudden technical failure causes the spacecraft to crash into the Indian Ocean, near the Asian coast. The crash kills him instantly, and his body begins floating in the water, carried by the waves. Yet somehow, he finds himself standing on the coast, looking out at the ocean. As he watches the floating body, he slowly realises that it is his own.",
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
