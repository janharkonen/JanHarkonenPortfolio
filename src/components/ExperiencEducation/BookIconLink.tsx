"use client"

import { Experience } from "@/lib/experiences";
import { BookOpenText } from "lucide-react";
import { useState } from "react";

export const handlePdfDownload = (e: React.MouseEvent, pdfUrl: string) => {
    e.stopPropagation()
    window.open(pdfUrl, "_blank")
}

export default function BookIconLink({ url, label }: { url: string, label: string }) {
    const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 })
  
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
        <>
            <div>
              <BookOpenText 
                className="cursor-pointer text-gray-600 hover:text-gray-800" 
                onMouseEnter={(e) => handleMouseEnter(e, label)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`/${url}`, "_blank");
                }}
              />
            </div>
            {tooltip.show && (
              <div
                className="fixed pointer-events-none bg-black text-white px-2 py-1 rounded text-sm"
                style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
              >
                {tooltip.text}
              </div>
            )}
        </>
    )
}