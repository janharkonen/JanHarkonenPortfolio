import { brandedItemBadge } from "@/data/BrandedItemsComponents.tsx"

export const LensMirrorSimulator = () => {
  return (
    <div className="max-w-4xl">
      <img
      src={"https://i4ndcxhbcg.ufs.sh/f/Qdvn5pODvKPkdKzb1U8lQmz1vNV5LD4rko93Gt87hBHbiXI6"}
      alt="Progress tracker"
      className="w-full h-[500px] object-cover rounded-md"
      />
      <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Overview</h3>
      <p className="text-base">
        The Lens and Mirror Simulator is a desktop application that visualizes the
        behavior of light as it passes through various optical elements. It allows users to place lenses and mirrors
        of different shapes and properties on a canvas and observe how light rays interact with them.
      </p>
      </div>
      <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Real-time simulation of light ray trajectories</li>
        <li>Interactive canvas for placing optical elements</li>
        <li>Customizable lens and mirror properties</li>
      </ul>
      </div>
      
      <div>
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
      <div className="flex flex-wrap gap-4">
      <ul className="list-disc pl-5 space-y-1 ">
        <li>
          <div className="flex items-center gap-2">
          <span>Programming language:</span> {brandedItemBadge("python")}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <span>UI library:</span> {brandedItemBadge("pyqt4")}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <span>Editor of choice:</span> {brandedItemBadge("sublime")}
          </div>
        </li>
        </ul>
      </div>
      </div>
      
      <div>
      <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
      <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Desktop GUI</li>
        </ul>
      </div>
      </div>
    </div>
  )
}