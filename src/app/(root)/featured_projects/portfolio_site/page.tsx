import { BrandedItemBadge } from "@/components/BrandedItemComponents";

export default function Home() {
  return (
      <div className="max-w-4xl">
      <img
      src={"https://picapi.janharkonen.fi/api/pics/0cebe3a64ade44858fd946e58dd6b540.png?BGc=white&BG=101"}
      alt="Portfolio site"
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview (V2)</h3>
        <p className="text-base">
          This portfolio website highlights my professional journey and projects 
          as a full-stack developer in the most appropriate fashion.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
            <li>Simple and clean landing page</li>
            <li>Interactive elements</li>
            <li>Professional experience, education and personal projects</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Programming language:</span> 
                <BrandedItemBadge brandKey="typescript" />
                <BrandedItemBadge brandKey="javascript" />
                <BrandedItemBadge brandKey="html" />
                <BrandedItemBadge brandKey="css" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Framework:</span> 
                <BrandedItemBadge brandKey="react" />
                <BrandedItemBadge brandKey="vite" />
                <BrandedItemBadge brandKey="nodejs" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>UI:</span> 
                <BrandedItemBadge brandKey="tailwind" />
                <BrandedItemBadge brandKey="shadcn" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                <BrandedItemBadge brandKey="vercel" />
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
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> 
                <BrandedItemBadge brandKey="vscode" />
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
          
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Cloud VPS deployment</li>
            <li>Containerization and Docker</li>
            <li>Authentication and JWT</li>
            <li>Deploying relational databases</li>
            <li>CRON jobs</li>
            <li>Bash scripts</li>
            <li>Multi-tenancy</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
