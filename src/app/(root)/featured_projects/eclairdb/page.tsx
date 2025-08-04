import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[8]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2025</h2>
      <img
      src="https://picapi.janharkonen.fi/api/pics/dfc3ddcb9eb44c1ab760920c4d36610a.png"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">Overview</h3>
      <p className="text-base mt-4">
        ÉclairDB is a tool built to solve a personal issue I had while exploring large databases.
        While there already exists many database explorer clients, such as pgAdmin or DBeaver, as well 
        as web clients built into Neon and Supabase, they all suffered from the same fundamental issue: 
        <b> too many features</b>.
      </p>
      <p className="text-base mt-4">
        What I mean by that is twofold. First of all, the UI to find a table is too time-consuming. 
        This is the case especially in pgAdmin, where finding the list of tables for a schema, 
        you have to navigate through 7 layers of the treeview. I don&apos;t know about you, but table selection 
        is where I spend most of my time when exploring a database. Most of the time I don&apos;t even care 
        at all about login/group Roles, event triggers, foreign tables, indexes and heck, even the keys 
        or foreign keys or even the types. I just want to find the table I&apos;m looking for and maybe do 
        some basic filtering and sorting and that&apos;s it.

        The second issue is exactly that: filtering and sorting. Many database exploring clients 
        make it difficult to filter and sort the data. The main reason for this is that in a SQL database, 
        the types of data matter and the way to filter each type have their own quirks. Sure, you can filter 
        however your heart desires using the SQL query, but that&apos;s not what I want. Usually, when I just want 
        a quick overview of the data, I would just want to filter strings, and that&apos;s it.
      </p>
      <p className="text-base mt-4">
        I went on to do just that. I built a simple Vue app that allows me to find a table from a 
        PostgreSQL database, then for any column in that table you can <b> sort the table and filter 
          using only strings with lightning speed</b>.
        The choice to use strings was indeed opinionated but deliberate. At the end of the day, anything you write 
        on a computer is a string, and since the purpose of ÉclairDB is to be simple and fast to use, using 
        strings was the way to go. Sure, the functionalities are very limited, but that&apos;s the point. 
        It is by design a read-only database viewer with lightning fast table filtering thanks to a 
        concurrent backend Go backend.
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Filter and sort databases with pagination</li>
          <li>Great UX with extremely fast filtering performance</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front-end:</span> 
                <BrandedItemBadge brandKey="vue" />
                <BrandedItemBadge brandKey="typescript" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>UI:</span> 
                <BrandedItemBadge brandKey="tailwind" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>API:</span> 
                <BrandedItemBadge brandKey="golang" />
                <BrandedItemBadge brandKey="gin" />
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
                <span>CI/CD:</span> 
                <BrandedItemBadge brandKey="githubactions" />
                <BrandedItemBadge brandKey="dockerhub" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                <BrandedItemBadge brandKey="aws" />
                <BrandedItemBadge brandKey="ecr" />
                <BrandedItemBadge brandKey="apprunner" />
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
                <span>IDE / AI:</span> 
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
            <li>Vue</li>
            <li>SSEvents</li>
            <li>Github Actions</li>
            <li>AWS ECR</li>
            <li>AWS App Runner</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
