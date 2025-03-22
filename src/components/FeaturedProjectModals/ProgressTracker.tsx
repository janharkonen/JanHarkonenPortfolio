import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const ProgressTracker = () => {
  return (
    <div className="max-w-4xl">
      <img
      src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkAChHK1BHjs78wOL1SkFumPK6AanBb9YiqWI0"}
      alt="Progress tracker"
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
        The Progress Tracker is a continuation of my 2021 mobile app. 
        As a dedicated musician, I created it to help me track my progress in 
        learning 40 songs by heart for our music ensemble. The app allows me 
        to easily monitor my progress by color-coding each item in a scrollable 
        list. This time it is not only for personal use but also for 3 other 
        members of our ensemble. I wanted to make a simple project but using 
        new technologies. This is my first time using Svelte, Redis and AWS. I 
        also wanted the data to update ultra-fast. That's why I used a websocket 
        and Redis as a RAM database.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
            <li>Minimalist and intuitive user interface</li>
            <li>Color-coded progress stages for easy tracking</li>
            <li>Interactive item color change on click</li>
        </ul>
      </div>
      
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front end:</span> 
                {brandedItemBadge("svelte")}
                {brandedItemBadge("typescript")}
                {brandedItemBadge("vite")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Websocket:</span> 
                {brandedItemBadge("nodejs")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                {brandedItemBadge("redis")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Containerization:</span> 
                {brandedItemBadge("docker")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                {brandedItemBadge("aws")}
                {brandedItemBadge("ec2")}
                {brandedItemBadge("ubuntu")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Reverse proxy:</span> 
                {brandedItemBadge("nginx")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>DNS:</span> 
                {brandedItemBadge("cloudflare")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>AI tools:</span> 
                {brandedItemBadge("Claude")}
                {brandedItemBadge("V0")}
                {brandedItemBadge("ChatGPT")}
                {brandedItemBadge("lechat")}
                {brandedItemBadge("deepseek")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> {brandedItemBadge("vscode")}
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Mobile development</li>
          </ul>
        </div>
      </div>
    </div>
  )
}