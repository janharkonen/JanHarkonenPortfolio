import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[4]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2025</h2>
      <img
      src={"https://picapi.janharkonen.fi/api/pics/0cebe3a64ade44858fd946e58dd6b540.png?BGc=white&BG=101"}
      alt={project.title}
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
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Framework:</span> 
                <BrandedItemBadge brandKey="react" />
                <BrandedItemBadge brandKey="nextjs" />
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
                <BrandedItemBadge brandKey="cursor" />
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
            <li>Next.js</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Older version</h2>
        <h2 className="text-xl mb-4">2024</h2>
        <img
        src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkjGPA6wr1sfHKch8JrDNk9IYtMnRBeEzQvW0F"}
        alt="Portfolio site old"
        className="w-full h-auto max-h-[500px] object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold mb-2">Overview (V1)</h3>
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
            <li>React</li>
            <li>Web development</li>
            <li>Web deployment</li>
            <li>DNS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
