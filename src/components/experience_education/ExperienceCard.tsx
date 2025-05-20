"use client"

import { brandedItems } from "@/lib/brandedItems"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Experience } from "@/lib/experiences"
import BrandedItemLogoWithTooltip, { BrandedItemLogo } from "../BrandedItemComponents"
import BookIconLink from "./BookIconLink"

export default function ExperienceCard({ experience }: { experience: Experience }) {
    const brandedItem = brandedItems[experience.company]  
    return (
    <Card
      className={
        `flex flex-col p-4
        ${(experience.detailsUrl !== '') ? 'cursor-pointer hover:shadow-lg' : '' }`
      }
      onClick={() => {
        if (experience.detailsUrl !== '') {
          window.open(experience.detailsUrl, '_self')
        }
      }}
    >
      <div className="flex flex-row">
        <div className={`mb-4
          ${(experience.company === 'polycon') ? 'w-24 h-6' : 'w-12 h-12'}
          `}
          >
          <BrandedItemLogo brandKey={experience.company} />
        </div>
        {(experience.pdfUrl !== "") && (
          <div className="flex-1 flex justify-end">
            {(experience.pdfUrl2 !== "") && (
              <div className="justify-end mr-1">
                <BookIconLink url={experience.pdfUrl2} label={experience.pdfCaption2}/>
              </div> 
            )}
            <BookIconLink url={experience.pdfUrl} label={experience.pdfCaption}/>
          </div> 
        )}
      </div>
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">{brandedItem.name}</p>
        <p className="text-sm text-gray-600 mb-4">{experience.period}</p>
        <p className="mb-6">{experience.description}</p>
        {experience.tools.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {experience.tools.map((tool) => (
              <div key={tool} className="w-6 h-6 inline-block" style={{ position: 'relative' }}>
                <BrandedItemLogoWithTooltip brandKey={tool} />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}