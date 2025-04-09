"use client"

import { useState } from "react"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenText, X } from 'lucide-react'
//import ErkkaPDF from "../../src/Jan_Harkonen_Special_Assignment.pdf"
//import DippaPDF from "../../src/Jan_Harkonen_Masters_thesis.pdf"
import brandedItems, { BrandedItem } from "@/lib/brandedItems"
import BrandedItemLogoWithTooltip, { BrandedItemLogo } from "../BrandedItemComponents"

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  tools: string[]
  pdfUrl: string
  pdfCaption: string
  pdfUrl2: string
  pdfCaption2: string
}

const experiences: Experience[] = [
  {
    title: "Software Developer / CEO",
    company: "pionblanc",
    period: "2024 - present",
    description:
      "Automatic offer generating solution as desktop application with self-hosted database",
    tools: [
      "react",
      "python",
      "postgresql",
      "docker",
      "hetzner",
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Software Developer",
    company: "polycon",
    period: "2021 - 2024",
    description:
      "Developing and maintaining software and databases for handling mobility aid items for Finnish hospital districts",
    tools: [
      "delphi",
      "MSSQLServer",
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Software Developer / Data Analyst",
    company: "semantum",
    period: "Feb 2020 - Sep 2020",
    description: "Developing LCA dashboard for assessing environmental impact of factory processes",
    tools: [
      "java",
      "influxdb",
      "docker",
      "haskell",
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Research Assistant",
    company: "aaltosci",
    period: "Jun 2019 - Dec 2019",
    description:
      "Simulating and calculating the annihilating electron-positron pair momentum density in a solid in the atomic scale using quantum Monte Carlo methods (Master's thesis)",
    tools: [
      "fortran",
      "quantumespresso",
      "casino",
      "cscmahti",
    ],
    pdfUrl: "",
    pdfCaption: "Master's thesis",
    pdfUrl2: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.045201",
    pdfCaption2: "Research paper as co-author",
  },
  {
    title: "Research Assistant",
    company: "aaltosci",
    period: "Summer 2018",
    description:
      "Simulating and calculating the enhancement factor in a semiconductor in the atomic scale using quantum Monte Carlo methods (Special assignment)",
    tools: [
      "fortran",
      "quantumespresso",
      "casino",
      "cscmahti",
    ],
    pdfUrl: "",
    pdfCaption: "Special assignment",
    pdfUrl2: "",
    pdfCaption2: "",
  },
]

export const handlePdfDownload = (e: React.MouseEvent, pdfUrl: string) => {
  e.stopPropagation()
  window.open(pdfUrl, "_blank")
}

export default function WorkExperience() {
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 })
  const [selectedExp, setSelectedExp] = useState<number | null>(null)

  const handleMouseEnter = (e: React.MouseEvent, text: string) => {
    setTooltip({ show: true, text, x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: "", x: 0, y: 0 })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip.show) {
      setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
    }
  }


  return (
    <section onMouseMove={handleMouseMove}>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="relative cursor-pointer transition-all hover:shadow-md"
            onClick={() => console.log('redirect')}
          >
            <div className="absolute top-4 left-4 w-16 h-16">
              <BrandedItemLogo brandKey={exp.company} />
            </div>
            <CardHeader className="pt-24 sm:pt-8 pb-4">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{brandedItems[exp.company].name}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <p className="mb-6">{exp.description}</p>
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
                  {exp.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex flex-col items-center w-8 h-8"
                    >
                      <BrandedItemLogoWithTooltip brandKey={tool} />
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
                onClick={(e) => handlePdfDownload(e, exp.pdfUrl)}
              >
                <BookOpenText className="w-6 h-6 text-gray-600 hover:text-gray-800" />
              </div>
            )}
            {exp.pdfUrl2 && (
              <div
                className="absolute top-4 right-12 cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, `${exp.pdfCaption2}`)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handlePdfDownload(e, exp.pdfUrl2)}
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

