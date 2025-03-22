import { Experience } from "../WorkExperience"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const PionBlancModal = ({ experience }: {experience: Experience}) => {
    return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl">
                <img
                    src={experience.company.logoUrl || "/placeholder.svg"}
                    
                    className="mb-4 w-32 h-32 object-contain"
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
                Automatic offer generating solution as desktop 
                application with self-hosted database. For more 
                details see "Features projects / Offer generator"
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-4">
                <ul className="list-disc pl-5 space-y-1 ">
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Front end:</span> 
                      {brandedItemBadge("react")}
                      {brandedItemBadge("typescript")}
                      {brandedItemBadge("vite")}
                      {brandedItemBadge("tailwind")}
                      {brandedItemBadge("shadcn")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>State management:</span> 
                      {brandedItemBadge("zustand")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>API:</span> 
                      {brandedItemBadge("python")}
                      {brandedItemBadge("pandas")}
                      {brandedItemBadge("flask")}
                      {brandedItemBadge("gunicorn")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>ORM:</span> 
                      {brandedItemBadge("sqlalchemy")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Database:</span> 
                      {brandedItemBadge("postgresql")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Auth:</span> 
                      {brandedItemBadge("auth0")}
                      {brandedItemBadge("jwt")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Containerization:</span> 
                      {brandedItemBadge("docker")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Deployment:</span> 
                      {brandedItemBadge("hetzner")}
                      {brandedItemBadge("ubuntu")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Reverse proxy:</span> 
                      {brandedItemBadge("nginx")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>DNS:</span> 
                      {brandedItemBadge("cloudflare")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>AI tools:</span> 
                      {brandedItemBadge("Claude")}
                      {brandedItemBadge("V0")}
                      {brandedItemBadge("ChatGPT")}
                      {brandedItemBadge("lechat")}
                      {brandedItemBadge("deepseek")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>IDE:</span> {brandedItemBadge("vscode")}
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <span>Version control</span>
                      {brandedItemBadge("git")}
                      {brandedItemBadge("gitkraken")}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
} 