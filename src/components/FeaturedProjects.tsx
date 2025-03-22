import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import brandedItems from "../data/BrandedItems.tsx"
//import { ProgressTracker } from "./FeaturedProjectModals/ProgressTracker.tsx"
import { OfferGenerator } from "./FeaturedProjectModals/OfferGenerator.tsx"
import { PortfolioSite } from "./FeaturedProjectModals/PortfolioSite.tsx"
import { ProgressTrackerOld } from "./FeaturedProjectModals/ProgressTrackerOld.tsx"
import { LensMirrorSimulator } from "./FeaturedProjectModals/LensMirrorSimulator.tsx"

const projects = [
  //{
  //  title: "Progress tracker",
  //  description: "Mobile application to track the progress level of each item in a list",
  //  image: "https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkAChHK1BHjs78wOL1SkFumPK6AanBb9YiqWI0",
  //  period: "2025",
  //  mainTechnologies: [
  //    brandedItems.svelte,
  //    brandedItems.nodejs,
  //    brandedItems.redis,
  //  ],
  //  secondaryTechnologies: [
  //    brandedItems.docker,
  //    brandedItems.aws,
  //  ],
  //  component: ProgressTracker,
  //},
  {
    title: "Offer generator",
    description: "Automatic offer generating solution as desktop application with self-hosted database.",
    image: 'https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPktof3qLIQx7Uzq0RnSYy3cApovfTXwsGjLeON',
    period: "2024-2025",
    mainTechnologies: [
      brandedItems.react,
      brandedItems.python,
      brandedItems.postgresql,
    ],
    secondaryTechnologies: [
      brandedItems.docker,
      brandedItems.hetzner,
    ],
    component: OfferGenerator,
  },
  {
    title: "Portfolio site",
    description: "This very website. A personal full stack developer porfolio made with React",
    image: "https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkjGPA6wr1sfHKch8JrDNk9IYtMnRBeEzQvW0F",
    period: "2024-2025",
    mainTechnologies: [
      brandedItems.react,
    ],
    secondaryTechnologies: [
      brandedItems.vercel,
    ],
    component: PortfolioSite,
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level of each item in a list",
    image: "https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkAChHK1BHjs78wOL1SkFumPK6AanBb9YiqWI0",
    period: "2021",
    mainTechnologies: [
      brandedItems.java,
    ],
    secondaryTechnologies: [
    ],
    component: ProgressTrackerOld,
  },
  {
    title: "Lens and mirror simulator",
    description: "Desktop GUI for simulating the trajectory of a laser beam through curved lenses and mirrors",
    image: 'https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkdKzb1U8lQmz1vNV5LD4rko93Gt87hBHbiXI6',
    period: "2015",
    mainTechnologies: [
      brandedItems.python,
    ],
    secondaryTechnologies: [
    ],
    component: LensMirrorSimulator,
  },
]

export default function FeaturedProjects() {
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null) // Update: Added type annotation
  const [modalOpen, setModalOpen] = useState(false)

  const handleMouseEnter = (e: React.MouseEvent, text: string) => { // Update: Added type annotations
    setTooltip({ show: true, text, x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: "", x: 0, y: 0 })
  }

  const handleMouseMove = (e: React.MouseEvent) => { 
    if (tooltip.show) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
  }

  const handleCardClick = (project: typeof projects[number]) => { 
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section onMouseMove={handleMouseMove}>
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer transition-all hover:shadow-lg"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-60 object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{project.period}</p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 justify-center" onClick={(e) => e.stopPropagation()}>
                {project.mainTechnologies.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex flex-col items-center"
                    onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={tool.logoUrl || "/placeholder.svg"}
                      alt={`${tool.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-5 justify-center" onClick={(e) => e.stopPropagation()}>
                {project.secondaryTechnologies.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex flex-col items-center"
                    onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={tool.logoUrl || "/placeholder.svg"}
                      alt={`${tool.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-base font-medium text-primary">
                {selectedProject.period}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6">
              {selectedProject.component && <selectedProject.component />}
            </div>
          </DialogContent>
        )}
      </Dialog>

      {tooltip.show && (
        <div
          className="fixed pointer-events-none bg-black text-white px-2 py-1 rounded text-sm"
          style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  )
}

