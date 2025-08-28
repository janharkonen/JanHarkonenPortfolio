export interface FeaturedProject {
  title: string
  description: string
  imageUrl: string
  period: string
  tools: string[]
  detailsUrl: string
  githubUrl: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Lens and mirror simulator",
    description: "Desktop GUI for simulating the trajectory of a laser beam through curved lenses and mirrors.",
    imageUrl: 'https://picapi.janharkonen.fi/api/pics/2dce025429824c5595654267c848d3de.png?BGc=grey&BG=140',
    period: "2015",
    tools: ["python"],
    detailsUrl: "/featured_projects/lens_mirror_simulator",
    githubUrl: "",
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level of each item in a list.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/4f345e3cad804de5b8dd7cb204aa99ad.png",
    period: "2021",
    tools: ["java"],
    detailsUrl: "/featured_projects/progress_tracker_old",
    githubUrl: "",
  },
  {
    title: "Portfolio site",
    description: "This very website. A personal full stack developer portfolio made with Next.js.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/0cebe3a64ade44858fd946e58dd6b540.png?BGc=grey&BG=120",
    period: "2024-2025",
    tools: ["react","nextjs","vercel",],
    detailsUrl: "/featured_projects/portfolio_site",
    githubUrl: "",
  },
  {
    title: "Offer generator",
    description: "Product data synchronization and sales processes automation tool as a web app aimed at small businesses.",
    imageUrl: 'https://picapi.janharkonen.fi/api/pics/3f7e838a1aad493ab7f7176bbb203620.png?BGc=grey&BG=120',
    period: "2024-2025",
    tools: ["react","python","postgresql","docker","hetzner"],
    detailsUrl: "/featured_projects/offer_generator",
    githubUrl: "",
  },
  {
    title: "Progress tracker",
    description: "Web application to track the progress level listed items for each user in real time using websockets.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/6cbf8b836d0c4d3c89c2c4d23dba1281.png?BGc=grey&BG=130",
    period: "2025",
    tools: ["svelte", "bun", "redis", "docker", "githubactions", "azure"],
    detailsUrl: "/featured_projects/progress_tracker",
    githubUrl: "",
  },
  {
    title: "PICAPI",
    description: "API for manipulating images directly from URL parameters + platform to save own pictures in the cloud.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/d40795b1bb8b4987b965e11d241bbf78.png?BGc=grey&BG=120",
    period: "2025",
    tools: ["vanillajs", "python", "sqlite", "hetzner"],
    detailsUrl: "/featured_projects/picapi",
    githubUrl: "",
  },
  {
    title: "cdx",
    description: "Bash CLI tool to cd into directories 10x faster.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/e7d1b08fd20847abb202b427a8e8f2ba.png?BGc=grey&BG=125",
    period: "2025",
    tools: ["bash"],
    detailsUrl: "/featured_projects/cdx",
    githubUrl: "",
  },
  {
    title: "One source of truth",
    description: "A tool to search and filter a vast array of products blazingly fast.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/3a055a19c26743a2a2fc18bf41b41cbf.png?BGc=grey&BG=125",
    period: "2025",
    tools: ["nextjs", "golang", "redis", "lua", "docker", "hetzner"],
    detailsUrl: "/featured_projects/onesourceoftruth",
    githubUrl: "",
  },
  {
    title: "ÉclairDB",
    description: "Lightning-fast PostgreSQL database exploration with intuitive search and filtering capabilities.",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/dfc3ddcb9eb44c1ab760920c4d36610a.png?BGc=grey&BG=125",
    period: "2025",
    tools: ["vue", "golang", "githubactions", "aws"],
    detailsUrl: "/featured_projects/eclairdb",
    githubUrl: "",
  },
]