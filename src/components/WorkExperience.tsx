'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Developer",
    company: "Polycon Oy",
    logo: "https://www.polycon.fi/wp-content/uploads/2020/03/polycon_turkoosi_500x49-300x29.png",
    period: "2021 - Present",
    description: "Developing and maintaining software and databases for handling mobility aid items for Finnish hospital districts.",
    tools: [
      { name: "Delphi", logo: "https://cdn.simpleicons.org/delphi" },
      { name: "Microsoft SQL Server", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7TIOHIVieZJ564CaI1B8LQAAAA%26pid%3DApi&f=1&ipt=aed1fbd637221218c13f8b4fc98bf59ba08fb142938dfdc707d75acdffba2f78&ipo=images" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Sourcetree", logo: "https://cdn.simpleicons.org/sourcetree" },
    ]
  },
  {
    title: "Software Developer",
    company: "Semantum Oy",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFAENbYsHiSYw/company-logo_100_100/company-logo_100_100/0/1631308807980?e=1735171200&v=beta&t=IKs180dCzhvSZs0VhMKd6XhWv9TWOBM08QMu1x5cB3I",
    period: "Feb 2020 - Sep 2020",
    description: "Developing LCA dashboard for assessing environmental impact of factory processes.",
    tools: [
      { name: "Java", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandlogos.net%2Fwp-content%2Fuploads%2F2021%2F11%2Fjava-logo.png&f=1&nofb=1&ipt=645ad72fbf1f1b9cfa1c592b1f3d877a0fc2466894bcee25e7101de1a2981551&ipo=imageshttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdownload.logo.wine%2Flogo%2FJava_(programming_language)%2FJava_(programming_language)-Logo.wine.png&f=1&nofb=1&ipt=7695076c9b55e3092a1005e85c0c58d4eaa6d83e854a4a86254efba8e8c8e906&ipo=images?height=48&width=48" },
      { name: "Express", logo: "/placeholder.svg?height=24&width=24" },
      { name: "React", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Node.js", logo: "/placeholder.svg?height=24&width=24" },
    ]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    logo: "/placeholder.svg?height=40&width=40",
    period: "2015 - 2017",
    description: "Created responsive websites and implemented CMS solutions.",
    tools: [
      { name: "HTML5", logo: "/placeholder.svg?height=24&width=24" },
      { name: "CSS3", logo: "/placeholder.svg?height=24&width=24" },
      { name: "JavaScript", logo: "/placeholder.svg?height=24&width=24" },
      { name: "WordPress", logo: "/placeholder.svg?height=24&width=24" },
    ]
  }
]

export default function WorkExperience() {
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
      <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative">
            <div className="absolute top-4 left-4">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-20 h-20 object-contain" />
            </div>
            <CardHeader className="pt-16 pb-4">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <p className="mb-6">{exp.description}</p>
              <div className="flex justify-center items-center space-x-4">
                {exp.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex} 
                    className="flex flex-col items-center"
                    onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={`${tool.logo}`} alt={`${tool.name} logo`} className="w-6 h-6 object-contain mb-1" />
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