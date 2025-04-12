import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[1]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2025</h2>
      <img
      src="https://picapi.janharkonen.fi/api/pics/99c5a0b0dc4d4e9a9ce85413039a6916.png?BGc=white&BG=101"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
          Progress Tracker is a continuation of my 2021 mobile app. 
          As a dedicated musician, I created it to help me track my progress in 
          learning 40 songs by heart for our music ensemble. The app allows me 
          to easily monitor my progress by color-coding each item in a scrollable 
          list. This time it is not only for personal use but also for 3 other 
          members of our ensemble. I also had an ulterior motive to make a simple
          project using new technologies. This is my first time using Svelte, Redis 
          and AWS. I also wanted the data to update ultra-fast. That&apos;s why I 
          used a websocket and Redis as an in-memory database
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Minimalist and intuitive user interface</li>
          <li>Color-coded progress stages for easy tracking</li>
          <li>Interactive item color change on click</li>
          <li>Real-time data updates for all users</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front-end:</span> 
                <BrandedItemBadge brandKey="svelte" />
                <BrandedItemBadge brandKey="typescript" />
                <BrandedItemBadge brandKey="vite" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Websocket API:</span> 
                <BrandedItemBadge brandKey="nodejs" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                <BrandedItemBadge brandKey="redis" />
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
                <BrandedItemBadge brandKey="aws" />
                <BrandedItemBadge brandKey="ec2" />
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
                <BrandedItemBadge brandKey="ChatGPT" />
                <BrandedItemBadge brandKey="lechat" />
                <BrandedItemBadge brandKey="deepseek" />
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
              </div>
            </li>
          </ul>
        </div>
      </div>
          
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Svelte</li>
            <li>Redis</li>
            <li>AWS EC2</li>
            <li>Websocket technology</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
