'use client'

import { useState } from 'react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenText } from 'lucide-react'
import DippaPDF from "../../src/Jan_Harkonen_Masters_thesis.pdf"
import KandiPDF from "../../src/Jan_Harkonen_Bachelors_thesis.pdf"
import brandedItems from "../data/BrandedItems.tsx"

const educations = [
  {
    title: "Master's Degree",
    company: brandedItems.aaltosci,
    period: "2018 - 2020",
    description: "Major: mathematics, minor: engineering physics",
    pdfUrl: DippaPDF,
    pdfCaption: "Master's thesis",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Exchange studies",
    company: brandedItems.kaist,
    period: "2016 - 2017",
    description: "School of Computing",
    pdfUrl: "",
    pdfCaption: "",
    pdfUrl2: "",
    pdfCaption2: "",
  },
  {
    title: "Bachelor's degree",
    company: brandedItems.aaltosci,
    period: "2014 - 2018",
    description: "Major: engineering physics and mathematics, minor: electrical engineering",
    pdfUrl: KandiPDF,
    pdfCaption: "Bachelor's thesis",
    pdfUrl2: "",
    pdfCaption2: "",
  },
]

export default function Education() {
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
      <div className="space-y-6">
        {educations.map((exp, index) => (
          <Card key={index} className="relative">
            <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img src={exp.company.logoUrl} alt={`${exp.company.name} logo`} className="w-full h-full object-contain" />
            </div>
            <CardHeader className="pt-24 sm:pt-8 pb-4">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company.name}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <p className="mb-6">{exp.description}</p>
              <div className="flex justify-center">
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