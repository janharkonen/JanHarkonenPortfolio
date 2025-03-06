import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import TarjousGeneraattoriPic from "../assets/tarjousgeneraattori.png"
import TarjousGeneraattoriPic2 from "../assets/tarjousgeneraattori2.png"
import TarjousGeneraattoriPic3 from "../assets/tarjousgeneraattori3.png"
import PortfolioPic from "../assets/portfolio.png"
import GCHProgressTrackerPic from "../assets/GCHProgressTracker.png"
import LensMirrorSimPic from "../assets/lens_mirror_generator.png"
import brandedItems from "../data/BrandedItems.tsx"

const projects = [
  {
    title: "Invoice generator v3",
    description:
      "Automatic invoice generating solution as a full stack web app with an API and database connection on the cloud.",
    image: TarjousGeneraattoriPic3,
    period: "2025",
    tools: [
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
    tools: [
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
      "The second iteration of the invoice generator transformed the desktop application into a full-stack web application. It features a React frontend with Redux for state management, deployed on Vercel, with a Python Flask backend hosted on Hetzner Cloud. The application uses MS SQL Server for data storage and incorporates AI tools for enhanced functionality.",
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
    period: "2024",
    tools: [brandedItems.python, brandedItems.tkinter, brandedItems.pandas, brandedItems.MSSQLServer],
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
  },
  {
    title: "Professional CV/Portfolio site",
    description: "This very website. A personal full stack developer porfolio React web app.",
    image: PortfolioPic,
    period: "2024",
    tools: [
      brandedItems.react,
      brandedItems.vite,
      brandedItems.nodejs,
      brandedItems.html5,
      brandedItems.css3,
      brandedItems.tailwind,
      brandedItems.shadcn,
      brandedItems.javascript,
      brandedItems.typescript,
      brandedItems.vercel,
    ],
    detailedDescription:
      "This portfolio website showcases my professional experience and projects as a full-stack developer. Built with React and Vite, it features a responsive design implemented with Tailwind CSS and shadcn/ui components. The site is deployed on Vercel for optimal performance and reliability.",
    features: [
      "Responsive design for all device sizes",
      "Interactive project showcases",
      "Dark/light mode toggle",
      "Contact form with validation",
      "Performance optimized with modern web technologies",
    ],
    challenges:
      "Designing a clean, professional interface that effectively communicates my skills and experience while ensuring fast load times and accessibility.",
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level of each item in a list.",
    image: GCHProgressTrackerPic,
    period: "2021",
    tools: [brandedItems.java, brandedItems.androidstudio],
    detailedDescription:
      "The Progress Tracker is an Android mobile application developed in Java using Android Studio. It allows users to create lists of tasks or goals and track their progress over time. The app features a simple, intuitive interface with visual progress indicators and notification reminders.",
    features: [
      "Custom progress visualization",
      "Categorized task lists",
      "Progress history tracking",
      "Reminder notifications",
      "Data export functionality",
    ],
    challenges:
      "Implementing an efficient data storage solution while ensuring a smooth user experience on various Android devices.",
  },
  {
    title: "Lens and mirror simulator",
    description: "Desktop GUI for simulating the trajectory of a laser beam through curved lenses and mirrors.",
    image: LensMirrorSimPic,
    period: "2015",
    tools: [brandedItems.python, brandedItems.pyqt4],
    detailedDescription:
      "The Lens and Mirror Simulator is a desktop application built with Python and PyQt4 that visualizes the behavior of light as it passes through various optical elements. It allows users to place lenses and mirrors of different shapes and properties on a canvas and observe how light rays interact with them.",
    features: [
      "Interactive canvas for placing optical elements",
      "Real-time simulation of light ray trajectories",
      "Customizable lens and mirror properties",
      "Measurement tools for angles and distances",
      "Export of simulation results",
    ],
    challenges:
      "Accurately modeling the physics of light refraction and reflection while maintaining an interactive frame rate for the simulation.",
  },
]

export default function FeaturedProjects() {
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleMouseEnter = (e, text) => {
    setTooltip({ show: true, text, x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: "", x: 0, y: 0 })
  }

  const handleMouseMove = (e) => {
    if (tooltip.show) {
      setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
  }

  const handleCardClick = (project) => {
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
                {project.tools.map((tool, toolIndex) => (
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
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-base font-medium text-primary">
                {selectedProject.period}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md"
              />

              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-base">{selectedProject.detailedDescription}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <p className="text-base">{selectedProject.challenges}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-2 bg-muted p-2 rounded-md">
                      <img
                        src={tool.logoUrl || "/placeholder.svg"}
                        alt={`${tool.name} logo`}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
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