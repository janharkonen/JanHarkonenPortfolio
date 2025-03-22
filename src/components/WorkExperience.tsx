import { useState } from "react"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenText, X } from 'lucide-react'
import ErkkaPDF from "../../src/Jan_Harkonen_Special_Assignment.pdf"
import DippaPDF from "../../src/Jan_Harkonen_Masters_thesis.pdf"
import brandedItems, { BrandedItem } from "../data/BrandedItems.tsx"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"
import { Aalto1 } from "./WorkExperienceModals/Aalto1.tsx"
import { Aalto2 } from "./WorkExperienceModals/Aalto2.tsx"
import { SemantumModal } from "./WorkExperienceModals/SemantumModal.tsx"
import { PolyconModal } from "./WorkExperienceModals/PolyconModal.tsx"
import { PionBlancModal } from "./WorkExperienceModals/PionBlancModal.tsx"

export interface Experience {
  title: string
  company: BrandedItem
  period: string
  description: string
  tools: BrandedItem[]
  pdfUrl: string
  pdfCaption: string
  pdfUrl2: string
  pdfCaption2: string
  modal: React.ComponentType<{ experience : Experience}>;
}

const experiences: Experience[] = [
  {
    title: "Software Developer / CEO",
    company: brandedItems.pionblanc,
    period: "2024 - present",
    description:
      "Automatic offer generating solution as desktop application with self-hosted database",
    tools: [
      brandedItems.react,
      brandedItems.python,
      brandedItems.postgresql,
      brandedItems.docker,
      brandedItems.hetzner,
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
    modal: PionBlancModal,
  },
  {
    title: "Software Developer",
    company: brandedItems.polycon,
    period: "2021 - 2024",
    description:
      "Developing and maintaining software and databases for handling mobility aid items for Finnish hospital districts",
    tools: [
      brandedItems.delphi,
      brandedItems.MSSQLServer,
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
    modal: PolyconModal,
  },
  {
    title: "Software Developer / Data Analyst",
    company: brandedItems.semantum,
    period: "Feb 2020 - Sep 2020",
    description: "Developing LCA dashboard for assessing environmental impact of factory processes",
    tools: [
      brandedItems.java,
      brandedItems.influxdb,
      brandedItems.docker,
      brandedItems.haskell,
    ],
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
    modal: SemantumModal,
  },
  {
    title: "Research Assistant",
    company: brandedItems.aaltosci,
    period: "Jun 2019 - Dec 2019",
    description:
      "Simulating and calculating the annihilating electron-positron pair momentum density in a solid in the atomic scale using quantum Monte Carlo methods (Master's thesis)",
    tools: [
      brandedItems.fortran,
      brandedItems.quantumespresso,
      brandedItems.casino,
      brandedItems.cscmahti,
    ],
    pdfUrl: DippaPDF,
    pdfCaption: "Master's thesis",
    pdfUrl2: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.045201",
    pdfCaption2: "Research paper as co-author",
    modal: Aalto2,
  },
  {
    title: "Research Assistant",
    company: brandedItems.aaltosci,
    period: "Summer 2018",
    description:
      "Simulating and calculating the enhancement factor in a semiconductor in the atomic scale using quantum Monte Carlo methods (Special assignment)",
    tools: [
      brandedItems.fortran,
      brandedItems.quantumespresso,
      brandedItems.casino,
      brandedItems.cscmahti,
    ],
    pdfUrl: ErkkaPDF,
    pdfCaption: "Special assignment",
    pdfUrl2: "",
    pdfCaption2: "",
    modal: Aalto1,
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


  const openModal = (index: number) => {
    setSelectedExp(index)
  }

  const closeModal = () => {
    setSelectedExp(null)
  }

  return (
    <section onMouseMove={handleMouseMove}>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="relative cursor-pointer transition-all hover:shadow-md"
            onClick={() => openModal(index)}
          >
            <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img
                src={exp.company.logoUrl || "/placeholder.svg"}
                alt={`${exp.company.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader className="pt-24 sm:pt-8 pb-4">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company.name}</p>
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

      {/* Modal Dialog */}
      <Dialog open={selectedExp !== null} onOpenChange={closeModal}>
        {selectedExp !== null && (
          <DialogContent className="sm:max-w-3xl">
            {/* Render the modal component with the experience as props */}
            {React.createElement(experiences[selectedExp].modal, { 
              experience: experiences[selectedExp] 
            })}

            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
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

