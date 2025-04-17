import { BrandedItemBadge, BrandedItemLogo } from "@/components/BrandedItemComponents";
import brandedItems from "@/lib/brandedItems";
import { Experience, workExperiences } from "@/lib/experiences";
const experience: Experience = workExperiences[0]
const company = brandedItems[experience.company]

export default function Home() {
  return (
    <div className="grid gap-6">
      <div>
        <div className="w-16 h-16">
          <BrandedItemLogo brandKey={experience.company} />
        </div> 
        <h2 className="text-lg font-semibold my-4">{experience.title}</h2>
        <h3 className="text-lg mb-2">{company.name} | {experience.period}</h3>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-base">
          The value we bring to the table for small businesses is helping them 
          navigate their massive product data pipeline in more cost-effective 
          ways as well as developing an offer generation solution for their customers 
          as a web app to boost their sales processes. For more details see 
          {<a href="/featured_projects/offer_generator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-1">
                &quot;Features projects / Offer generator&quot;
          </a>}
        </p>
      </div>
      <div className="overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
          <div className="flex flex-wrap text-nowrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <div className="flex items-center gap-2">
                <span>Front end:</span> 
                <BrandedItemBadge brandKey="react" />
                <BrandedItemBadge brandKey="typescript" />
                <BrandedItemBadge brandKey="vite" />
                <BrandedItemBadge brandKey="tailwind" />
                <BrandedItemBadge brandKey="shadcn" />
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
                <span>APIs:</span> 
                <BrandedItemBadge brandKey="golang" />
                <BrandedItemBadge brandKey="python" />
                <BrandedItemBadge brandKey="flask" />
                <BrandedItemBadge brandKey="pandas" />
                <BrandedItemBadge brandKey="gunicorn" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>ORM:</span> 
                <BrandedItemBadge brandKey="sqlalchemy" />
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
                <BrandedItemBadge brandKey="auth0" />
                <BrandedItemBadge brandKey="jwt" />
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
                <BrandedItemBadge brandKey="hetzner" />
                <BrandedItemBadge brandKey="ubuntu" />
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
                <span>DNS:</span> 
                <BrandedItemBadge brandKey="cloudflare" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>AI tools:</span> 
                <BrandedItemBadge brandKey="Claude" />
                <BrandedItemBadge brandKey="V0" />
                <BrandedItemBadge brandKey="ChatGPT" />
                <BrandedItemBadge brandKey="lechat" />
                <BrandedItemBadge brandKey="deepseek" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> <BrandedItemBadge brandKey="vscode" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Version control</span>
                <BrandedItemBadge brandKey="git" />
                <BrandedItemBadge brandKey="gitkraken" />
              </div>
            </li>
          </ul> 
        </div>
      </div>
    </div>
  )
}
