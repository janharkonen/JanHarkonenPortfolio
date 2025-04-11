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
    title: "PICAPI",
    description: "API manipulating images directly from URL parameters + platform to save own pictures in the cloud",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/d40795b1bb8b4987b965e11d241bbf78.png?BGc=gray&BG=120",
    period: "2025",
    tools: ["vanillajs", "python", "sqlite", "hetzner"],
    detailsUrl: "",
    githubUrl: "",
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level listed items for each user",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/99c5a0b0dc4d4e9a9ce85413039a6916.png?BGc=gray&BG=120",
    period: "2025",
    tools: ["svelte", "nodejs", "redis", "docker", "aws"],
    detailsUrl: "/featured_projects/progress_tracker",
    githubUrl: "",
  },
  {
    title: "Offer generator",
    description: "Product data synchronization and automatic offer generating solution as a web app",
    imageUrl: 'https://picapi.janharkonen.fi/api/pics/3f7e838a1aad493ab7f7176bbb203620.png?BGc=gray&BG=120',
    period: "2024-2025",
    tools: ["react","python","postgresql","docker","hetzner",],
    detailsUrl: "/featured_projects/offer_generator",
    githubUrl: "",
  },
  {
    title: "Portfolio site",
    description: "This very website. A personal full stack developer porfolio made with Next.js",
    imageUrl: "https://picapi.janharkonen.fi/api/pics/0cebe3a64ade44858fd946e58dd6b540.png?BGc=gray&BG=120",
    period: "2024-2025",
    tools: ["react","vercel",],
    detailsUrl: "/featured_projects/portfolio_site",
    githubUrl: "",
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level of each item in a list",
    imageUrl: "https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkAChHK1BHjs78wOL1SkFumPK6AanBb9YiqWI0",
    period: "2021",
    tools: ["java"],
    detailsUrl: "/featured_projects/progress_tracker_old",
    githubUrl: "",
  },
  {
    title: "Lens and mirror simulator",
    description: "Desktop GUI for simulating the trajectory of a laser beam through curved lenses and mirrors",
    imageUrl: 'https://picapi.janharkonen.fi/api/pics/2dce025429824c5595654267c848d3de.png?BGc=gray&BG=140',
    period: "2015",
    tools: ["python"],
    detailsUrl: "/featured_projects/lens_mirror_simulator",
    githubUrl: "",
  },
]