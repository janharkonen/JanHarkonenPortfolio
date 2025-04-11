import { BrandedItemBadge, BrandedItemLogo } from "@/components/BrandedItemComponents";
import brandedItems from "@/lib/brandedItems";
import { Experience, workExperiences } from "@/lib/experiences";
const experience: Experience = workExperiences[2]
const company = brandedItems[experience.company]
import DocumentButton from "../DocumentButton";

export default function Home() {
  return (
    <div className="grid gap-6">
      <div>
        <div className="w-16 h-16">
          <BrandedItemLogo brandKey={experience.company} />
        </div> 
        <h2 className="text-lg font-semibold my-2">{experience.title}</h2>
        <h3 className="text-lg mb-2">{company.name} | {experience.period}</h3>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-base">
          Developing LCA (Lifetime Cycle Assessment) dashboard for assessing 
          environmental impact of factory processes.
        </p>
      </div>
      <div className="overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap text-nowrap gap-4">
          <ul className="list-disc pl-5 space-y-1 ">
              <li>
                <div className="flex items-center gap-2">
                  <span>Programming language:</span> 
                  <BrandedItemBadge brandKey="java" />
                  <BrandedItemBadge brandKey="haskell" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Database:</span> 
                  <BrandedItemBadge brandKey="influxdb" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Containerization:</span> 
                  <BrandedItemBadge brandKey="docker" />
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
