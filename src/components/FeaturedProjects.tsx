import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import TarjousGeneraattoriPic from "../assets/tarjousgeneraattori.png"
import TarjousGeneraattoriPic2 from "../assets/tarjousgeneraattori2.png"
import TarjousGeneraattoriPic3 from "../assets/tarjousgeneraattori3.png"
import GCHProgressTrackerPic from "../assets/GCHProgressTracker.png"
import LensMirrorSimPic from "../assets/lens_mirror_generator.png"
import brandedItems from "../data/BrandedItems.tsx"
import PortfolioPic from "../assets/portfolio.png"
import { LensMirrorSimulator } from "./FeaturedProjectDetails/LensMirrorSimulator.tsx"
import { ProgressTrackerOld } from "./FeaturedProjectDetails/ProgressTrackerOld.tsx"
import { PortfolioSite } from "./FeaturedProjectDetails/PortfolioSite.tsx"
import { InvoiceGenerator } from "./FeaturedProjectDetails/InvoiceGenerator.tsx"

const projects = [
  {
    title: "Invoice generator v3",
    description:
      "Automatic invoice generating solution as a full stack web app with an API and database connection on the cloud.",
    image: TarjousGeneraattoriPic3,
    period: "2025",
    mainTechnologies: [
      brandedItems.react,
      brandedItems.vite,
      brandedItems.zustand,
      brandedItems.auth0,
      brandedItems.shadcn,
      brandedItems.cloudflare,
      brandedItems.hetzner,
      brandedItems.python,
      brandedItems.flask,
      brandedItems.pandas,
      brandedItems.postgresql,
      brandedItems.docker,
      brandedItems.ChatGPT,
      brandedItems.Claude,
      brandedItems.V0,
    ],
    detailedDescription:
      "The latest version of the invoice generator is a comprehensive full-stack solution that automates the entire invoicing process. It features a modern React frontend with Zustand for state management, secured by Auth0 authentication. The backend is powered by Python Flask, with PostgreSQL database hosted on Hetzner Cloud and containerized using Docker. This version incorporates AI assistance from ChatGPT, Claude, and V0 to enhance user experience and automate complex tasks.",
    features: [
      "Cloud-based database with PostgreSQL",
      "Containerized deployment with Docker",
      "Enhanced security with Auth0",
      "AI-assisted invoice generation",
      "Responsive design with shadcn/ui components",
    ],
    challenges:
      "Migrating from the previous version while maintaining data integrity and implementing a more scalable architecture to handle increased user load.",
  },
  {
    title: "Invoice generator v2",
    description:
      "Automatic invoice generating solution as a full stack web app with an API and database connection on the cloud.",
    image: TarjousGeneraattoriPic2,
    period: "2024",
    mainTechnologies: [
      brandedItems.react,
      brandedItems.vite,
      brandedItems.redux,
      brandedItems.auth0,
      brandedItems.shadcn,
      brandedItems.cloudflare,
      brandedItems.vercel,
      brandedItems.hetzner,
      brandedItems.python,
      brandedItems.flask,
      brandedItems.pandas,
      brandedItems.MSSQLServer,
      brandedItems.ChatGPT,
      brandedItems.Claude,
      brandedItems.V0,
    ],
    detailedDescription:
      "The second iteration of the invoice generator transformed the desktop application into a full-stack web application. It features a React frontend with Redux for state management, deployed on Vercel, with a Python Flask backend hosted on Hetzner Cloud. The application uses MS SQL Server for data storage and incorporates AI mainTechnologies for enhanced functionality.",
    features: [
      "Web-based interface accessible from anywhere",
      "User authentication with Auth0",
      "Cloud database with MS SQL Server",
      "API integration for automated data retrieval",
      "AI-powered invoice template suggestions",
    ],
    challenges:
      "Transitioning from a desktop application to a web-based solution while ensuring data security and maintaining performance.",
  },
  {
    title: "Invoice generator",
    description: "Automatic invoice generating solution as desktop application with self-hosted database.",
    image: TarjousGeneraattoriPic,
    period: "2024-2025",
    mainTechnologies: [
      brandedItems.python,
      brandedItems.tkinter,
      brandedItems.pandas,
      brandedItems.MSSQLServer,
    ],
    detailedDescription:
      "The original invoice generator was developed as a desktop application using Python with Tkinter for the GUI. It connects to a self-hosted MS SQL Server database for storing client information, product details, and invoice history. The application uses Pandas for data manipulation and report generation.",
    features: [
      "Desktop GUI built with Tkinter",
      "Local database connection",
      "PDF invoice generation",
      "Client and product management",
      "Invoice history tracking",
    ],
    challenges:
      "Creating an intuitive user interface while ensuring reliable database operations and accurate invoice calculations.",
    component: InvoiceGenerator,
  },
  {
    title: "Portfolio site",
    description: "This very website. A personal full stack developer porfolio made with React",
    image: PortfolioPic,
    period: "2024-2025",
    mainTechnologies: [
      brandedItems.react,
      brandedItems.vercel,
    ],
    component: PortfolioSite,
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level of each item in a list",
    image: GCHProgressTrackerPic,
    period: "2021",
    mainTechnologies: [
      brandedItems.java,
    ],
    component: ProgressTrackerOld,
  },
  {
    title: "Lens and mirror simulator",
    description: "Desktop GUI for simulating the trajectory of a laser beam through curved lenses and mirrors",
    image: LensMirrorSimPic,
    period: "2015",
    mainTechnologies: [
      brandedItems.python,
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

  const handleMouseMove = (e: React.MouseEvent) => { // Update: Added type annotation
    if (tooltip.show) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
  }

  const handleCardClick = (project: typeof projects[number]) => { // Update: Added type annotation
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

