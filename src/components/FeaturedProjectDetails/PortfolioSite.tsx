import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const PortfolioSite = () => {
  return (
    <div className="max-w-4xl">
      <img
      src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkjGPA6wr1sfHKch8JrDNk9IYtMnRBeEzQvW0F"}
      alt="Portfolio site"
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
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
      
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Programming language:</span> 
                {brandedItemBadge("typescript")}
                {brandedItemBadge("javascript")}
                {brandedItemBadge("html5")}
                {brandedItemBadge("css3")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Framework:</span> 
                {brandedItemBadge("react")}
                {brandedItemBadge("vite")}
                {brandedItemBadge("nodejs")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>UI:</span> 
                {brandedItemBadge("tailwind")}
                {brandedItemBadge("shadcn")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                {brandedItemBadge("vercel")}
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
            <li>Web development</li>
            <li>Web deployment</li>
            <li>DNS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}