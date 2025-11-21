import { BrandedItemBadge, BrandedItemLogo } from "@/components/BrandedItemComponents";
import brandedItems from "@/lib/brandedItems";
import { Experience, workExperiences } from "@/lib/experiences";
const experience: Experience = workExperiences[workExperiences.length - 1]
const company = brandedItems[experience.company]
import DocumentButton from "../DocumentButton";

export default function Home() {
  return (
    <div className="grid gap-6">
      <div>
        <div className="w-16 h-16">
          <BrandedItemLogo brandKey={experience.company} />
        </div> 
        <h2 className="text-lg font-semibold mb-2">{experience.title}</h2>
        <h3 className="text-lg mb-2">{company.name} | {experience.period}</h3>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-base">
          Simulating and calculating the enhancement factor in a 
          semiconductor in the atomic scale using quantum Monte Carlo 
          methods. I did it as a special assignment eligible for extra credits 
          for university. Take a look (below).
        </p>
      </div>
      <div>
          <h3 className="text-lg font-semibold mb-2">Documents</h3>
          <div className="flex gap-4">
              <DocumentButton url={experience.pdfUrl} label={experience.pdfCaption} />
          </div>
      </div>
      <div className="overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap text-nowrap gap-4">
          <ul className="list-disc pl-5 space-y-1 ">
              <li>
                <div className="flex items-center gap-2">
                  <span>Programming language:</span> 
                  <BrandedItemBadge brandKey="fortran" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Quantum Monte Carlo simulation software:</span> 
                  <BrandedItemBadge brandKey="casino" />
                  <BrandedItemBadge brandKey="quantumespresso" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>HPC computing:</span> 
                  <BrandedItemBadge brandKey="cscmahti" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Editor of choice:</span> 
                  <BrandedItemBadge brandKey="emacs" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Thesis:</span> 
                  <BrandedItemBadge brandKey="latex" />
                  <BrandedItemBadge brandKey="overleaf" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Other:</span> 
                  <BrandedItemBadge brandKey="matlab" />
                  <BrandedItemBadge brandKey="github" />
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
