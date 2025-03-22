import { BookOpenText } from "lucide-react"
import { Experience, handlePdfDownload } from "../WorkExperience"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const Aalto2 = ({ experience }: {experience: Experience}) => {
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
                Simulating and calculating the annihilating electron-positron 
                pair momentum density in a solid in the atomic scale using 
                quantum Monte Carlo methods. I did it as my Master's thesis. 
                My research also spawned another paper where I was inserted 
                as a co-author. Take a look (below).
              </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Documents</h3>
                  <div className="flex gap-4">
                      <button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                      onClick={(e) => handlePdfDownload(e, experience.pdfUrl)}
                      >
                      <BookOpenText className="w-5 h-5" />
                      <span>{experience.pdfCaption}</span>
                      </button>
                      <button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                      onClick={(e) => handlePdfDownload(e, experience.pdfUrl2)}
                      >
                      <BookOpenText className="w-5 h-5" />
                      <span>{experience.pdfCaption2}</span>
                      </button>
                  </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-4">
                <ul className="list-disc pl-5 space-y-1 ">
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Programming language:</span> 
                        {brandedItemBadge("fortran")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Quantum Monte Carlo simulation software:</span> 
                        {brandedItemBadge("casino")}
                        {brandedItemBadge("quantumespresso")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>HPC computing:</span> 
                        {brandedItemBadge("cscmahti")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Editor of choice:</span> 
                        {brandedItemBadge("emacs")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Thesis:</span> 
                        {brandedItemBadge("latex")}
                        {brandedItemBadge("overleaf")}
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <span>Other:</span> 
                        {brandedItemBadge("matlab")}
                        {brandedItemBadge("github")}
                      </div>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
} 