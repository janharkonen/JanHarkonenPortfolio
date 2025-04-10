import { brandedItems } from "@/lib/brandedItems"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Experience } from "@/lib/experiences"
import { BrandedItemLogo } from "../BrandedItemComponents"
import BookIconLink from "./BookIconLink"

export default function ExperienceCard({ experience }: { experience: Experience }) {
    const brandedItem = brandedItems[experience.company]  

    return (
    <Card className="flex flex-col">
      <div className="flex flex-row">
        <div className={`mb-4
          ${experience.company === 'polycon' ? 'w-24 h-6' : 'w-12 h-12'}
          `}
          >
          <BrandedItemLogo brandKey={experience.company} />
        </div>
        {(experience.pdfUrl !== "") && (
          <div className="flex-1 flex justify-end space-x-2">
            <BookIconLink experience={experience} />
            {(experience.pdfUrl2 !== "") && (
              <BookIconLink experience={experience} />
            )}
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
      </CardContent>
      <p>asd</p>
    </Card>
  )
}