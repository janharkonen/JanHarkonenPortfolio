import { Experience } from "../WorkExperience"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const PolyconModal = ({ experience }: {experience: Experience}) => {
    return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl">
                <img
                    src={experience.company.logoUrl || "/placeholder.svg"}
                    
                    className="mb-3 w-36 h-12 object-contain"
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
              Developing and maintaining software and databases for 
              handling mobility aid items for Finnish hospital districts.
              I worked with Effector's desktop app (Windows).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-4">
                <ul className="list-disc pl-5 space-y-1 ">
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Programming language:</span> 
                        {brandedItemBadge("delphi")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Database:</span> 
                        {brandedItemBadge("MSSQLServer")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>IDE:</span> 
                        {brandedItemBadge("radstudio")}
                        {brandedItemBadge("vscode")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Version control:</span> 
                        {brandedItemBadge("git")}
                        {brandedItemBadge("sourcetree")}
                        {brandedItemBadge("gitlab")}
                      </div>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
} 