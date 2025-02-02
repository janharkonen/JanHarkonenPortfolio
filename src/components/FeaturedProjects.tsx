import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    description: "Automatic invoice generating solution as a full stack web app with an API and database connection on the cloud.",
    image: TarjousGeneraattoriPic3 ,
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
    ]
  },
  {
    title: "Invoice generator v2",
    description: "Automatic invoice generating solution as a full stack web app with an API and database connection on the cloud.",
    image: TarjousGeneraattoriPic2 ,
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
    ]
  },
  {
    title: "Invoice generator",
    description: "Automatic invoice generating solution as desktop application with self-hosted database.",
    image: TarjousGeneraattoriPic ,
    period: "2024",
    tools: [
      brandedItems.python,
      brandedItems.tkinter,
      brandedItems.pandas,
      brandedItems.MSSQLServer,
    ]
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
    ]
  },
  {
    title: "Progress tracker",
    description: "Mobile application to track the progress level of each item in a list.",
    image: GCHProgressTrackerPic,
    period: "2021",
    tools: [
      brandedItems.java,
      brandedItems.androidstudio,
    ]
  },
  {
    title: "Lens and mirror simulator",
    description: "Desktop GUI for simulating the trajectory of a laser beam through curved lenses and mirrors.",
    image: LensMirrorSimPic,
    period: "2015",
    tools: [
      brandedItems.python,
      brandedItems.pyqt4,
    ]
  }
]

export default function FeaturedProjects() {
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent, text: string) => {
    setTooltip({ show: true, text, x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip.show) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
  }

  return (
    <section onMouseMove={handleMouseMove}>
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{project.period}</p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex} 
                    className="flex flex-col items-center"
                    onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={tool.logoUrl} alt={`${tool.name} logo`} className="w-6 h-6 object-contain" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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