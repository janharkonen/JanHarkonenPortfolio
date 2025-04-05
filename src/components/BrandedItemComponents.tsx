"use client"

import { useState } from 'react'
import brandedItems, { BrandedItem } from "@/lib/brandedItems"

export default function ProficientItem({brandKey} : {brandKey: string}) {
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
        <div>
            <div
              key={brandKey}
              className="flex flex-col items-center"
              onMouseEnter={(e) => handleMouseEnter(e, brandedItems[brandKey].name)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
                <img src={brandedItems[brandKey].logoUrl} alt={`${brandedItems[brandKey].name} logo`} className="w-12 h-12 object-contain" />
            </div>
            {tooltip.show && (
              <div 
                className="fixed pointer-events-none bg-black text-white px-2 py-1 rounded text-sm"
                style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
              >
                {tooltip.text}
              </div>
            )}
        </div>
    )
}