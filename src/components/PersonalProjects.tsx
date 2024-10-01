import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TarjousGeneraattoriPic from "../assets/tarjousgeneraattori.png"
import PortfolioPic from "../assets/portfolio.png"
import GCHProgressTrackerPic from "../assets/GCHProgressTracker.png" 
import brandedItems from "../data/BrandedItems.tsx"

const projects = [
  {
    title: "Invoice generator",
    description: "A full-stack automatic invoice generating solution with self-hosted database.",
    image: TarjousGeneraattoriPic ,
    period: "2024",
    tools: [
      brandedItems.python,
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
      { name: "Vite", logoUrl: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" },
      { name: "Node.js", logoUrl: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "HTML5", logoUrl: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", logoUrl: "https://cdn.simpleicons.org/css3" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Javascript", logoUrl: "https://cdn.simpleicons.org/javascript" },
      { name: "Typescript", logoUrl: "https://cdn.simpleicons.org/typescript" },
    ]
  },
  {
    title: "Progress tracker",
    description: "Simple mobile application to track the progress level of each item in a list.",
    image: GCHProgressTrackerPic,
    period: "2021",
    tools: [
      brandedItems.java,
      brandedItems.androidstudio,
    ]
  }
]

export default function PersonalProjects() {
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
      <h2 className="text-3xl font-semibold mb-6">Personal Projects</h2>
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