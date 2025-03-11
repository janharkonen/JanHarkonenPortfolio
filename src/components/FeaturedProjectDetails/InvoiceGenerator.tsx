import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"
import TarjousGeneraattoriPic from "../../assets/tarjousgeneraattori.png"
import TarjousGeneraattoriPic2 from "../../assets/tarjousgeneraattori2.png"
import TarjousGeneraattoriPic3 from "../../assets/tarjousgeneraattori3.png"

export const InvoiceGenerator = () => {
  return (
    <div className="max-w-4xl">
      <img
      src={TarjousGeneraattoriPic3 || "/placeholder.svg"}
      alt="Portfolio site"
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview (V3)</h3>
        <p className="text-base mb-4">
          Offer generator is a web app we build in our startup that 
          me and a few friends have founded. It is aimed for small businesses to 
          speed up their product offer process. The app offers an intuitive
          UI gathering product info and saves it into a database. The app then 
          generates a PDF file with the product info to be sent to their customers.
          The main time-saving feature for our client is our over 100 000 product
          catalogue from different suppliers has been integrated within the software 
          in an easily digestible format.
        </p>
        <p className="text-base">
          This was built by our startup Pion Blanc Oy. We are a small team of 3 
          software developers. More info in our website 
          {<a href="https://www.pionblanc.fi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-1">
                www.pionblanc.fi
          </a>}. This has been my biggest personal project yet that I have built format
          scratch, and what a journey it has been! This project has seen lots of iterations, 
          and I've learned so much about software development. In terms of tech stack I will 
          divide the major iterations into 3 parts, the latest of which is obviously the 
          best one yet.  
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
            <li>Web-based interface accessible from anywhere</li>
            <li>User authentication with Auth0</li>
            <li>Cloud database with PostgreSQL</li>
            <li>API integration data retrieval</li>
        </ul>
      </div>
      
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front end:</span> 
                {brandedItemBadge("react")}
                {brandedItemBadge("typescript")}
                {brandedItemBadge("vite")}
                {brandedItemBadge("tailwind")}
                {brandedItemBadge("shadcn")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>State managment:</span> 
                {brandedItemBadge("zustand")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>API:</span> 
                {brandedItemBadge("python")}
                {brandedItemBadge("pandas")}
                {brandedItemBadge("flask")}
                {brandedItemBadge("gunicorn")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>ORM:</span> 
                {brandedItemBadge("sqlalchemy")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                {brandedItemBadge("postgresql")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Auth:</span> 
                {brandedItemBadge("auth0")}
                {brandedItemBadge("jwt")}
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
                {brandedItemBadge("hetzner")}
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
            <li>Cloud platforms and VPS</li>
            <li>Containerization</li>
            <li>Advanced front end state management</li>
            <li>Authorization and authentication</li>
            <li>REST APIs</li>
            <li>Deploying databases</li>
          </ul>
        </div>
      </div>
    </div>
  )
}