import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"
import GCHProgressTrackerPic from "../../assets/GCHProgressTracker.png"

export const ProgressTrackerOld = () => {
  return (
    <div className="max-w-4xl">
      <img
      src={GCHProgressTrackerPic || "/placeholder.svg"}
      alt="Progress tracker"
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
        The Progress Tracker is an Android mobile app designed for personal use. 
        As a dedicated musician, I created it to help me track my progress in 
        learning 40 songs by heart for our music ensemble. The app allows me 
        to easily monitor my progress by color-coding each song in a simple list.
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
                <span>Programming language:</span> {brandedItemBadge("java")}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> {brandedItemBadge("androidstudio")}
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