"use client"

import { MapPin } from "lucide-react"
import { useState } from 'react'
import brandedItems, { BrandedItem } from "@/lib/brandedItems"
import { ProficientItem } from "./BrandedItemComponents"


const proficientTools: BrandedItem[] = [
    brandedItems.react,
    brandedItems.python,
    brandedItems.postgresql,
    brandedItems.docker,
    brandedItems.ubuntu,
    brandedItems.git,
]

export default function Introduction() {
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

    return(
        <div className="space-y-6" onMouseMove={handleMouseMove}>
          <h1 className="text-5xl font-bold">Jan Härkönen</h1>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Helsinki, Finland</span>
            <span className="ml-2">&#127467;&#127470;</span>
          </div>
          <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
          <p className="max-w-2xl text-lg">
            Writing software that's pleasant to look at
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">I'm most proficient with</h3>
            <div className="flex flex-wrap gap-8 max-w-2xl mx-auto">
              {proficientTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                  onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={tool.logoUrl} alt={`${tool.name} logo`} className="w-12 h-12 object-contain" />
                </div>
              ))}
              {ProficientItem("typescript")}
            </div>
          </div>
        </div>
    )
}