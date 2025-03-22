import { Experience } from "../WorkExperience"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const SemantumModal = ({ experience }: {experience: Experience}) => {
    return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl">
                <img
                    src={experience.company.logoUrl || "/placeholder.svg"}
                    
                    className="w-24 h-24 object-cover"
                    />
              {experience.title}
            </DialogTitle>
            <DialogDescription className="text-lg font-medium">
              {experience.company.name} | {experience.period}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-base">
                Developing LCA (Lifetime Cycle Assessment) dashboard for assessing 
                environmental impact of factory processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-4">
                <ul className="list-disc pl-5 space-y-1 ">
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Programming language:</span> 
                        {brandedItemBadge("java")}
                        {brandedItemBadge("haskell")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Database:</span> 
                        {brandedItemBadge("influxdb")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Containerization:</span> 
                        {brandedItemBadge("docker")}
                      </div>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
} 