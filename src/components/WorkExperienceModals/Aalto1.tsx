import { BookOpenText } from "lucide-react"
import { Experience, handlePdfDownload } from "../WorkExperience"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"

export const Aalto1 = ({ experience }: {experience: Experience}) => {
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
              <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {experience.tools.map((tool: any, toolIndex: number) => (
                    <div key={toolIndex} className="flex flex-col items-center gap-2">
                    <img src={`${tool.logoUrl}`} alt={`${tool.name} logo`} className="w-10 h-10 object-contain" />
                    <span className="text-sm text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {(experience.pdfUrl || experience.pdfUrl2) && (
                <div>
                <h3 className="text-lg font-semibold mb-2">Documents</h3>
                <div className="flex gap-4">
                  {experience.pdfUrl && (
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                      onClick={(e) => handlePdfDownload(e, experience.pdfUrl)}
                    >
                      <BookOpenText className="w-5 h-5" />
                      <span>{experience.pdfCaption}</span>
                    </button>
                  )}
                  {experience.pdfUrl2 && (
                      <button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                      onClick={(e) => handlePdfDownload(e, experience.pdfUrl2)}
                    >
                      <BookOpenText className="w-5 h-5" />
                      <span>{experience.pdfCaption2}</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
    )
} 