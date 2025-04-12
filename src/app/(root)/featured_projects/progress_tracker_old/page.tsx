import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[4]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2021</h2>
      <img
      src="https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkAChHK1BHjs78wOL1SkFumPK6AanBb9YiqWI0"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
          Progress Tracker is an Android mobile app designed for personal use. 
          As a dedicated musician, I created it to help me track my progress in 
          learning 40 songs by heart for our music ensemble. The app allows me 
          to easily monitor my progress by color-coding each item in a scrollable list.
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
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Programming language:</span> 
                <BrandedItemBadge brandKey="java" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> 
                <BrandedItemBadge brandKey="androidstudio" />
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
            <li>Mobile development</li>
            <li>Android Studio</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
