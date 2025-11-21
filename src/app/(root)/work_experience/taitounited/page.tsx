import { BrandedItemBadge, BrandedItemLogo } from "@/components/BrandedItemComponents";
import brandedItems from "@/lib/brandedItems";
import { Experience, workExperiences } from "@/lib/experiences";
const experience: Experience = workExperiences[workExperiences.length - 6]
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
        Developing product data management software.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front end:</span> 
                <BrandedItemBadge brandKey="react" />
                <BrandedItemBadge brandKey="typescript" />
                <BrandedItemBadge brandKey="vite" />
                <BrandedItemBadge brandKey="pandaCSS" />
                <BrandedItemBadge brandKey="uikit" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>State management:</span> 
                <BrandedItemBadge brandKey="zustand" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Server side:</span> 
                <BrandedItemBadge brandKey="nodejs" />
                <BrandedItemBadge brandKey="graphql" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>ORM:</span> 
                <BrandedItemBadge brandKey="drizzle" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                <BrandedItemBadge brandKey="postgresql" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Auth:</span> 
                <BrandedItemBadge brandKey="keycloak" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Containerization:</span> 
                <BrandedItemBadge brandKey="docker" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                <BrandedItemBadge brandKey="kubernetes" />
                <BrandedItemBadge brandKey="gcp" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Reverse proxy:</span> 
                <BrandedItemBadge brandKey="nginx" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>CI/CD:</span> 
                <BrandedItemBadge brandKey="githubactions" />
                <BrandedItemBadge brandKey="playwright" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>AI tools:</span> 
                <BrandedItemBadge brandKey="cursor" />
                <BrandedItemBadge brandKey="mcp" />
                <BrandedItemBadge brandKey="t3chat" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> 
                <BrandedItemBadge brandKey="cursor" />

              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Version control</span>
                <BrandedItemBadge brandKey="git" />
                <BrandedItemBadge brandKey="github" />
                <BrandedItemBadge brandKey="gitkraken" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
