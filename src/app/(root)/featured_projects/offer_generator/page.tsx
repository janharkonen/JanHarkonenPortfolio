import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[2]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">{project.period}</h2>
      <img
      src={"https://picapi.janharkonen.fi/api/pics/3f7e838a1aad493ab7f7176bbb203620.png?BGc=white&BG=101"}
      alt="Portfolio site"
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview (V3)</h3>
        <p className="text-base mb-4">
          Offer generator is a web app we build in our startup that 
          me and my friends have founded. It is aimed for small businesses to 
          have their product info up to data and speed up their product offer 
          process for their customers. The app offers an intuitive UI for 
          generating a PDF file with the product info to be sent to 
          their customers.
        </p>
        <p className="text-base mb-4">
          The main time-saving feature for our client is our over 100 000 product
          catalogue from different suppliers has been integrated within the software 
          in an easily filterable UI and fully accessible even if a supplier&apos;s 
          website crashes (which happens quite frequently).
        </p>
        <p className="text-base">
          This was built within our startup Pion Blanc Oy. We are a small team of 3 
          software developers. More info in our website 
          {<a href="https://www.pionblanc.fi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-1">
                www.pionblanc.fi
          </a>}. This has been my biggest personal project yet that I have built from
          scratch, and what a journey it has been! This project has seen lots of iterations, 
          and I&apos;ve learned a lot about software development.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
            <li>Up-to-date product catalogue with over 100 000 products</li>
            <li>Web app interface for automated offer generation</li>
            <li>User authentication with Auth0</li>
            <li>Cloud database with PostgreSQL</li>
            <li>API integration for data retrieval</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
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
              <span>API:</span> 
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
          
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Cloud VPS deployment</li>
            <li>Containerization and Docker</li>
            <li>Authentication and JWT</li>
            <li>Deploying PostgreSQL server</li>
            <li>CRON jobs</li>
            <li>Bash scripts</li>
            <li>Multi-tenancy</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Older version</h2>
        <h2 className="text-xl mb-4">2024</h2>
        <img
        src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkMw3r8kWvGnxFZoQ0yXh5u7Ow8mJea6lVbpY2"}
        alt="Portfolio site"
        className="w-full h-auto max-h-[500px] object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold my-2">Overview (V2)</h3>
        <p className="text-base mb-4">
          At this stage the app was still work-in-progress, but we made huge improvements
          compared to the previous version. For example we actually started using React 
          and for good reason.
          I tried using Redux for state management, but I felt it was way too 
          complicated for <b>A)</b>. an inexperienced front-end dev and <b>B)</b> for our use case.
        </p>
        <p className="text-base mb-4">
          MSSQL server was something that I&apos;ve only heard shade being thrown towards, 
          and my experience with it kind of confirmed it. The biggest issues were 
          1) installing ODBC drivers, 2) not being open-source software and 
          3) being more designed for Windows environments. 
        </p>
        <p className="text-base mb-4">
          The whole tech stack was just kinda of weird. We used Flask for the API, 
          which was deployed on a Hetzner VPS, our React app was deployed on 
          Vercel and the MSSQL database ran on my home laptop.
        </p>
      </div>
      <div className="overflow-x-auto">
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
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
                <span>State managment:</span> 
                <BrandedItemBadge brandKey="redux" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>API:</span> 
                <BrandedItemBadge brandKey="python" />
                <BrandedItemBadge brandKey="pandas" />
                <BrandedItemBadge brandKey="flask" />
                <BrandedItemBadge brandKey="gunicorn" />
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
                <span>Auth:</span> 
                <BrandedItemBadge brandKey="auth0" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                <BrandedItemBadge brandKey="hetzner" />
                <BrandedItemBadge brandKey="ubuntu" />
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
                <BrandedItemBadge brandKey="ChatGPT" />
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
        <h2 className="text-2xl font-bold mb-4">MVP</h2>
        <img
        src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkp8xlCWLmK7jIaWX2v9gyeotRC4SMzb1D6QYx"}
        alt="Portfolio site"
        className="w-full h-auto max-h-[500px] object-contain rounded-md"
        />
        <h3 className="text-lg font-semibold mb-2">Overview (V1)</h3>
        <p className="text-base mb-4">
          Looking back I can see how far we've gotten in such a short time. 
          This version was done as a desktop application as our first MVP.
        </p>
        <p className="text-base mb-4">
          Deployment was something we haven&apos;t considered initially. 
          I think this is one of the inexperienced dev&apos;s classic 
          blunder even though it is inevitable
          eventually. Surprise, surprise, when it was time for deployment, 
          it was a huge pain, since our first user used MacOS and installing 
          Python and the appropriate dependencies was next to impossible. 
          I wish there was a tool where an app and its dependencies would 
          work on any machine!
        </p>
        <p className="text-base mb-4">
          As our database we used simple .csv files as in the beginning,
          but we quickly pivoted to an SQL database. I already had MSSQL Server 
          on my laptop, and we actually deployed it from my home laptop.
        </p>
        <p className="text-base mb-4">
          Building a UI for a Python desktop app sucks. It was a lesson I had too
          learn the hard way. I quickly realized that this cannot be the 
          modern way of creating front-end applications. 
        </p>
      </div>
      <div className="overflow-x-auto">
        <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Desktop app:</span> 
                <BrandedItemBadge brandKey="python" />
                <BrandedItemBadge brandKey="pandas" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>UI library:</span> 
                <BrandedItemBadge brandKey="tkinter" />
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
                <span>AI tools:</span> 
                <BrandedItemBadge brandKey="Claude" />
                <BrandedItemBadge brandKey="ChatGPT" />
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
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Leading a small team of devs</li>
            <li>Database deployment (kinda)</li>
            <li>TCP/IP configuration</li>
            <li>The fact that MSSQL Server sucks</li>
            <li>The fact that UI development in Python sucks</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
