import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[5]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2015</h2>
      <img
      src="https://picapi.janharkonen.fi/api/pics/2dce025429824c5595654267c848d3de.png"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
          The Lens and Mirror Simulator is a desktop application that visualizes the
          behavior of light as it passes through various optical elements. It allows users to place lenses and mirrors
          of different shapes and properties on a canvas and observe how light rays interact with them. It was 
          created as a part of my programming course in university (Y2).
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Real-time simulation of light ray trajectories</li>
          <li>Optical elements (lenses and mirrors) could be dragged and dropped</li>
          <li>Customizable lens and mirror properties</li>
        </ul>
      </div>
          
      <div className="overflow-x-hidden ">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Programming language:</span> 
                <BrandedItemBadge brandKey="python" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>UI library:</span> 
                <BrandedItemBadge brandKey="pyqt4" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Editor of choice:</span> 
                <BrandedItemBadge brandKey="sublime" />
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
            <li>Building a desktop GUI</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
