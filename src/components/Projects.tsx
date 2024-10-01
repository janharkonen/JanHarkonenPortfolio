import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TarjousGeneraattoriPic from "../assets/tarjousgeneraattori.png"
import PortfolioPic from "../assets/portfolio.png"

const projects = [
  {
    title: "Invoice generator",
    description: "A full-stack automatic invoice generating solution with self-hosted database.",
    image: TarjousGeneraattoriPic ,
    period: "2024",
    tools: [
      { name: "Python", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fpython-logo.png&f=1&nofb=1&ipt=95475181fb9a4f55667f208bbfd828765bc3a421b010de17cfbd8d9288552b18&ipo=images" },
      { name: "Microsoft SQL Server", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7TIOHIVieZJ564CaI1B8LQAAAA%26pid%3DApi&f=1&ipt=aed1fbd637221218c13f8b4fc98bf59ba08fb142938dfdc707d75acdffba2f78&ipo=images" },
    ]
  },
  {
    title: "Professional CV/Portfolio",
    description: "This very website. A personal full stack developer portfolio + CV.",
    image: PortfolioPic,
    period: "Summer 2018",
    tools: [
      { name: "React", logoUrl: "https://cdn.simpleicons.org/react" },
      { name: "Vite", logoUrl: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" },
      { name: "Node.js", logoUrl: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "HTML5", logoUrl: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", logoUrl: "https://cdn.simpleicons.org/css3" },
      { name: "Tailwind CSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Javascript", logoUrl: "https://cdn.simpleicons.org/javascript" },
      { name: "Typescript", logoUrl: "https://cdn.simpleicons.org/typescript" },
    ]
  }
]

export default function Projects() {
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