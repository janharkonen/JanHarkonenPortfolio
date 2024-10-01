'use client'

import { useState } from 'react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenText } from 'lucide-react'
import CASINOLogo from "../assets/CASINO.png"
import ErkkaPDF from "../../src/Jan_Harkonen_Special_Assignment.pdf"
import DippaPDF from "../../src/Jan_Harkonen_Masters_thesis.pdf"
import brandedItems from "../data/BrandedItems.tsx"

const experiences = [
  {
    title: "Software Developer",
    company: "Polycon Oy",
    logo: "https://www.polycon.fi/wp-content/uploads/2020/03/polycon_turkoosi_500x49-300x29.png",
    period: "2021 - Present",
    description: "Developing and maintaining software and databases for handling mobility aid items for Finnish hospital districts.",
    tools: [
      brandedItems.delphi,
      brandedItems.MSSQLServer,
      { name: "Sourcetree", logoUrl: "https://cdn.simpleicons.org/sourcetree" },
      { name: "Gitlab", logoUrl: "https://cdn.simpleicons.org/gitlab" },
      { name: "Git", logoUrl: "https://cdn.simpleicons.org/git" },
      { name: "RAD Studio", logoUrl: "https://cdn.simpleicons.org/radstudio" },
      brandedItems.vscode,
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: ""
  },
  {
    title: "Software Developer",
    company: "Semantum Oy",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4D0BAQFAENbYsHiSYw%2Fcompany-logo_200_200%2F0%2F1519861441759%3Fe%3D2147483647%26v%3Dbeta%26t%3D-NRp0a94ITtT3Ao_29IuWCKZA7gJRuCS2-mVtqpm7ZY&f=1&nofb=1&ipt=77d42a74743b9d75795b2ba80326a16db7c7a045450ca4874e082ce8f78f2f8c&ipo=images",
    period: "Feb 2020 - Sep 2020",
    description: "Developing LCA dashboard for assessing environmental impact of factory processes.",
    tools: [
      brandedItems.java,
      { name: "Haskell", logoUrl: "https://cdn.simpleicons.org/haskell" },
      { name: "InfluxDB", logoUrl: "https://cdn.simpleicons.org/influxdb" },
      { name: "Docker", logoUrl: "https://cdn.simpleicons.org/docker" },
      { name: "Git", logoUrl: "https://cdn.simpleicons.org/git" },
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: ""
  },
  {
    title: "Research Assistant",
    company: "Aalto University School of Science and Technology",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studyinfinland.fi%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fog_image%2Fpublic%2F2018-10%2FAalto%2520logo_0.png%3Fitok%3DBTbxbaXQ&f=1&nofb=1&ipt=03995a6c82b83b78a02c3bff036ae2161b5c9cd69e779ea2e0fb3332e85758eb&ipo=images",
    period: "Jun 2019 - Dec 2019",
    description: "Simulating and calculating the annihilating electron-positron pair momentum density in a solid in the atomic scale using quantum Monte Carlo methods (Master's thesis).",
    tools: [
      { name: "Fortran", logoUrl: "https://cdn.simpleicons.org/fortran" },
      { name: "Quantum ESPRESSO", logoUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.openscience.org%2Fblog%2Fwp-content%2Fuploads%2F2009%2F01%2Fquantum_espresso6_trasparentbg.png&f=1&nofb=1&ipt=b303839d6fc58b58a54f26025a3d2da3fec77c81e00caab2cba0cc06f75f650e&ipo=images" },
      { name: "CASINO", logoUrl: CASINOLogo },
      { name: "CSC Mahti", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregmedia.co.uk%2F2012%2F07%2F09%2Ffinland_csc_logo.jpg&f=1&nofb=1&ipt=5c1b8ca6fe262d409540e8e4ada27d4521b8e3c1269b1f146e48e0e93356dcb5&ipo=images" },
      { name: "Matlab", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdic.academic.ru%2Fpictures%2Fwiki%2Ffiles%2F77%2FMatlab_Logo.png&f=1&nofb=1&ipt=de8b9be6d426a4eeb2cfcff0b906bd53996e2b5a9945f3b004ab19acaabb3a9c&ipo=images" },
      { name: "Github", logoUrl: "https://cdn.simpleicons.org/github" },
      { name: "Git", logoUrl: "https://cdn.simpleicons.org/git" },
      { name: "Emacs", logoUrl: "https://cdn.simpleicons.org/gnuemacs" },
      { name: "Overleaf", logoUrl: "https://cdn.simpleicons.org/overleaf" },
      { name: "LaTeX", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F271-2710063_latex-latex-logo.png&f=1&nofb=1&ipt=9204a46bdc1dc961121943d7c194207dac92eff7addf95a23c6d41aade5cba0a&ipo=images" },
    ],
    pdfUrl: DippaPDF,
    pdfCaption: "Master's thesis",
    pdfUrl2: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.045201",
    pdfCaption2: "Research paper as co-author",
  },
  {
    title: "Research Assistant",
    company: "Aalto University School of Science and Technology",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.studyinfinland.fi%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fog_image%2Fpublic%2F2018-10%2FAalto%2520logo_0.png%3Fitok%3DBTbxbaXQ&f=1&nofb=1&ipt=03995a6c82b83b78a02c3bff036ae2161b5c9cd69e779ea2e0fb3332e85758eb&ipo=images",
    period: "Summer 2018",
    description: "Simulating and calculating the enhancement factor in a semiconductor in the atomic scale using quantum Monte Carlo methods (Special assignment).",
    tools: [
      { name: "Fortran", logoUrl: "https://cdn.simpleicons.org/fortran" },
      { name: "Quantum ESPRESSO", logoUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.openscience.org%2Fblog%2Fwp-content%2Fuploads%2F2009%2F01%2Fquantum_espresso6_trasparentbg.png&f=1&nofb=1&ipt=b303839d6fc58b58a54f26025a3d2da3fec77c81e00caab2cba0cc06f75f650e&ipo=images" },
      { name: "CASINO", logoUrl: CASINOLogo },
      { name: "CSC Mahti", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregmedia.co.uk%2F2012%2F07%2F09%2Ffinland_csc_logo.jpg&f=1&nofb=1&ipt=5c1b8ca6fe262d409540e8e4ada27d4521b8e3c1269b1f146e48e0e93356dcb5&ipo=images" },
      { name: "Matlab", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdic.academic.ru%2Fpictures%2Fwiki%2Ffiles%2F77%2FMatlab_Logo.png&f=1&nofb=1&ipt=de8b9be6d426a4eeb2cfcff0b906bd53996e2b5a9945f3b004ab19acaabb3a9c&ipo=images" },
      { name: "Github", logoUrl: "https://cdn.simpleicons.org/github" },
      { name: "Git", logoUrl: "https://cdn.simpleicons.org/git" },
      { name: "Emacs", logoUrl: "https://cdn.simpleicons.org/gnuemacs" },
      { name: "Overleaf", logoUrl: "https://cdn.simpleicons.org/overleaf" },
      { name: "LaTeX", logoUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F271-2710063_latex-latex-logo.png&f=1&nofb=1&ipt=9204a46bdc1dc961121943d7c194207dac92eff7addf95a23c6d41aade5cba0a&ipo=images" },
    ],
    pdfUrl: ErkkaPDF,
    pdfCaption: "Special assignment",
    pdfUrl2: "",
    pdfCaption2: ""
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

  const handlePdfDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  return (
    <section onMouseMove={handleMouseMove}>
      <h2 className="text-3xl font-semibold mb-12">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative">
            <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
            </div>
            <CardHeader className="pt-24 sm:pt-8 pb-4">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <p className="mb-6">{exp.description}</p>
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
                  {exp.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="flex flex-col items-center"
                      onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img src={`${tool.logoUrl}`} alt={`${tool.name} logo`} className="w-6 h-6 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            {exp.pdfUrl && (
              <div 
                className="absolute top-4 right-4 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, `${exp.pdfCaption}`)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handlePdfDownload(exp.pdfUrl)}
              >
                <BookOpenText className="w-6 h-6 text-gray-600 hover:text-gray-800" />
              </div>
            )}
            {exp.pdfUrl2 && (
              <div 
                className="absolute top-4 right-12 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, `${exp.pdfCaption2}`)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handlePdfDownload(exp.pdfUrl2)}
              >
                <BookOpenText className="w-6 h-6 text-gray-600 hover:text-gray-800" />
              </div>
            )}
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