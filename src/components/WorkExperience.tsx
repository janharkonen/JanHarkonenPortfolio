'use client'

import { useState } from 'react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CASINOLogo from "../assets/CASINO.png"

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
      { name: "Sourcetree", logo: "https://cdn.simpleicons.org/sourcetree" },
      { name: "Gitlab", logo: "https://cdn.simpleicons.org/gitlab" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Embarcadero", logo: "https://cdn.simpleicons.org/embarcadero" },
      { name: "VS Code", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandlogos.net%2Fwp-content%2Fuploads%2F2021%2F11%2Fvisual-studio-code-logo.png&f=1&nofb=1&ipt=395f23f2ff4dbdf7b48f1417203c0b69231ed58a5d60b03e8567a221d2536901&ipo=images" },
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
      { name: "Haskell", logo: "https://cdn.simpleicons.org/haskell" },
      { name: "InfluxDB", logo: "https://cdn.simpleicons.org/influxdb" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
    ]
  },
  {
    title: "Research Assistant",
    company: "Aalto University School of Science and Technology",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studyinfinland.fi%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fog_image%2Fpublic%2F2018-10%2FAalto%2520logo_0.png%3Fitok%3DBTbxbaXQ&f=1&nofb=1&ipt=03995a6c82b83b78a02c3bff036ae2161b5c9cd69e779ea2e0fb3332e85758eb&ipo=images",
    period: "Jun 2019 - Dec 2019",
    description: "Simulating and calculating the annihilating electron-positron pair momentum density in a solid in the atomic scale using quantum Monte Carlo methods (Master’s thesis).",
    tools: [
      { name: "Fortran", logo: "https://cdn.simpleicons.org/fortran" },
      { name: "Quantum ESPRESSO", logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.openscience.org%2Fblog%2Fwp-content%2Fuploads%2F2009%2F01%2Fquantum_espresso6_trasparentbg.png&f=1&nofb=1&ipt=b303839d6fc58b58a54f26025a3d2da3fec77c81e00caab2cba0cc06f75f650e&ipo=images" },
      { name: "CASINO", logo: CASINOLogo },
      { name: "CSC Mahti", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregmedia.co.uk%2F2012%2F07%2F09%2Ffinland_csc_logo.jpg&f=1&nofb=1&ipt=5c1b8ca6fe262d409540e8e4ada27d4521b8e3c1269b1f146e48e0e93356dcb5&ipo=images" },
      { name: "Matlab", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdic.academic.ru%2Fpictures%2Fwiki%2Ffiles%2F77%2FMatlab_Logo.png&f=1&nofb=1&ipt=de8b9be6d426a4eeb2cfcff0b906bd53996e2b5a9945f3b004ab19acaabb3a9c&ipo=images" },
      { name: "Github", logo: "https://cdn.simpleicons.org/github" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Emacs", logo: "https://cdn.simpleicons.org/gnuemacs" },
      { name: "Overleaf", logo: "https://cdn.simpleicons.org/overleaf" },
      { name: "LaTeX", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F271-2710063_latex-latex-logo.png&f=1&nofb=1&ipt=9204a46bdc1dc961121943d7c194207dac92eff7addf95a23c6d41aade5cba0a&ipo=images" },
    ]
  },
  {
    title: "Research Assistant",
    company: "Aalto University School of Science and Technology",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studyinfinland.fi%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fog_image%2Fpublic%2F2018-10%2FAalto%2520logo_0.png%3Fitok%3DBTbxbaXQ&f=1&nofb=1&ipt=03995a6c82b83b78a02c3bff036ae2161b5c9cd69e779ea2e0fb3332e85758eb&ipo=images",
    period: "Summer 2018",
    description: "Simulating and calculating the enhancement factor in a semiconductor in the atomic scale using quantum Monte Carlo methods (Special assignment).",
    tools: [
      { name: "Fortran", logo: "https://cdn.simpleicons.org/fortran" },
      { name: "Quantum ESPRESSO", logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.openscience.org%2Fblog%2Fwp-content%2Fuploads%2F2009%2F01%2Fquantum_espresso6_trasparentbg.png&f=1&nofb=1&ipt=b303839d6fc58b58a54f26025a3d2da3fec77c81e00caab2cba0cc06f75f650e&ipo=images" },
      { name: "CASINO", logo: CASINOLogo },
      { name: "CSC Mahti", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregmedia.co.uk%2F2012%2F07%2F09%2Ffinland_csc_logo.jpg&f=1&nofb=1&ipt=5c1b8ca6fe262d409540e8e4ada27d4521b8e3c1269b1f146e48e0e93356dcb5&ipo=images" },
      { name: "Matlab", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdic.academic.ru%2Fpictures%2Fwiki%2Ffiles%2F77%2FMatlab_Logo.png&f=1&nofb=1&ipt=de8b9be6d426a4eeb2cfcff0b906bd53996e2b5a9945f3b004ab19acaabb3a9c&ipo=images" },
      { name: "Github", logo: "https://cdn.simpleicons.org/github" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Emacs", logo: "https://cdn.simpleicons.org/gnuemacs" },
      { name: "Overleaf", logo: "https://cdn.simpleicons.org/overleaf" },
      { name: "LaTeX", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F271-2710063_latex-latex-logo.png&f=1&nofb=1&ipt=9204a46bdc1dc961121943d7c194207dac92eff7addf95a23c6d41aade5cba0a&ipo=images" },
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
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-24 h-24 object-contain" />
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