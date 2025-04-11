import { BrandedItemBadge, BrandedItemLogo } from "@/components/BrandedItemComponents";
import brandedItems from "@/lib/brandedItems";
import { Experience, workExperiences } from "@/lib/experiences";
const experience: Experience = workExperiences[1]
const company = brandedItems[experience.company]

export default function Home() {
  return (
    <div className="grid gap-6">
      <div>
        <div className="w-64 h-16">
          <BrandedItemLogo brandKey={experience.company} />
        </div> 
        <h2 className="text-lg font-semibold mb-2">{experience.title}</h2>
        <h3 className="text-lg mb-2">{company.name} | {experience.period}</h3>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-base">
        Developing and maintaining software and databases for 
        handling mobility aid items for Finnish hospital districts.
        I worked with Effector desktop app (Windows).
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1 ">
              <li>
                <div className="flex items-center gap-2">
                  <span>Programming language:</span> 
                  <BrandedItemBadge brandKey="delphi" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Database:</span> 
                  <BrandedItemBadge brandKey="MSSQLServer" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>IDE:</span> 
                  <BrandedItemBadge brandKey="radstudio" />
                  <BrandedItemBadge brandKey="vscode" />
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span>Version control:</span> 
                  <BrandedItemBadge brandKey="git" />
                  <BrandedItemBadge brandKey="sourcetree" />
                  <BrandedItemBadge brandKey="gitlab" />
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
