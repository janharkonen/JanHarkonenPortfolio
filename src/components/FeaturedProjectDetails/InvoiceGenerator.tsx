import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const InvoiceGenerator = () => {
  return (
    <div className="max-w-4xl">
      <img
      src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPktof3qLIQx7Uzq0RnSYy3cApovfTXwsGjLeON"}
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
            <li>Cloud VPS deployment</li>
            <li>Containerization</li>
            <li>Authentication</li>
            <li>Deploying relational databases</li>
            <li>CRON jobs</li>
            <li>Multi-tenancy</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Previous version (V2)</h3>
        <img
        src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkMw3r8kWvGnxFZoQ0yXh5u7Ow8mJea6lVbpY2"}
        alt="Portfolio site"
        className="w-full h-auto max-h-[500px] object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base mb-4">
          Let's go back in time and see what our application looked like before.
          At this stage it was still a work in progress but and some mainTechnologies 
          didn't make it to the next major version, for good reason. Before using Zustand 
          I used Redux for state management, but it turned out to be a pain to use 
          for our use case. Also MSSQL server was ditched for PostgreSQL eventually. 
          I've only heard shade being thrown towards MSSQL, and my experience with 
          it kind of confirmed it. The biggest issues were installing ODBC drivers, not 
          being open-source software and being more designed for Windows OS environments. 
          Also our whole tech stack was a mess before using Docker. The front-end React 
          app was deployed on Vercel, the Flask API was deployed on a Hetzner cloud VPS 
          with a different domain name, and our MSSQL database was self hosted on my 
          laptop at home. Now we of course deploy it all on one VPS in 3 different 
          Docker containers.
        </p>
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
                {brandedItemBadge("redux")}
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
                <span>Database:</span> 
                {brandedItemBadge("MSSQLServer")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Auth:</span> 
                {brandedItemBadge("auth0")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                {brandedItemBadge("hetzner")}
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
                {brandedItemBadge("ChatGPT")}
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
            <li>Front-end web development</li>
            <li>Advanced front-end state management</li>
            <li>Authorization</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Previous version (V1)</h3>
        <img
        src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkp8xlCWLmK7jIaWX2v9gyeotRC4SMzb1D6QYx"}
        alt="Portfolio site"
        className="w-full h-auto max-h-[500px] object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base mb-4">
          Looking back even further back in time I can clearly see how can I've 
          gone and how much I've learned in such a short time. This version was 
          done as a desktop application mainly for user validation. In the 
          beginning we made a timelessly classic mistake: we developed the app 
          without consideration in deployment. Surprise, surprise, when it was 
          time for deployment, it was a pain. Especially since our first user 
          used MacOS. I wish there was a tool where an app and its dependencies 
          work on any machine! In the very beginning we usedd pure .csv files as 
          our database, but we quickly pivoted to MSSQL server, since I had it 
          already installed in my laptop, and we actually deployed it from my 
          home laptop. Also making the UI for a Python desktop app is a huge 
          pain, and I knew that this is not the modern way of creating let 
          alone deploying front-end applications. 
        </p>
      </div>
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Desktop app:</span> 
                {brandedItemBadge("python")}
                {brandedItemBadge("pandas")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>UI library:</span> 
                {brandedItemBadge("tkinter")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                {brandedItemBadge("MSSQLServer")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>AI tools:</span> 
                {brandedItemBadge("Claude")}
                {brandedItemBadge("V0")}
                {brandedItemBadge("ChatGPT")}
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
            <li>Leading a small team of devs</li>
            <li>Database deployment</li>
            <li>MSSQL sucks</li>
            <li>Front-end with Python sucks</li>
          </ul>
        </div>
      </div>
    </div>
  )
}