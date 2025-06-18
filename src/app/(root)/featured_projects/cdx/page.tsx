import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[6]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2025</h2>
      <img
      src="https://picapi.janharkonen.fi/api/pics/e7d1b08fd20847abb202b427a8e8f2ba.png"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm">cdx</code> 
          is yet again a tool I made to make my life easier.
        </p>
        <p className="text-base mt-4">
          It is a fast and intuitive directory navigation tool for Linux that lets you quickly cd into directories using fuzzy search.
        </p>
        <p className="text-base mt-4">
          Basically I encountered countless times that I needed to 
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm">cd</code> 
          into a directory, but I couldn&apos;t remember the exact name
          let alone the exact path. Usually I would just 
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm">cd</code> 
          into the home directory and then use 
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm">ls</code> 
          again and again to find the exact directory I needed.
        </p>
        <p className="text-base mt-4">
          The amount of time this saves is <b>astronomical</b>.
        </p>
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Shell:</span> 
                <BrandedItemBadge brandKey="bash" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Text editor of choice:</span>
                <BrandedItemBadge brandKey="vim" />
              </div>
            </li>
          </ul>
        </div>
      </div>
          
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Improved my bash scripting skills</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
