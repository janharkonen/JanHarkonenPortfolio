import { MapPin } from "lucide-react"
import ProficientItem from "./BrandedItemComponents"

export default function Introduction() {
    return(
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Jan Härkönen</h1>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Helsinki, Finland</span>
            <span className="ml-2">&#127467;&#127470;</span>
          </div>
          <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
          <p className="max-w-2xl text-lg">
            Writing software that's pleasant to look at
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">I'm most proficient with</h3>
            <div className="flex flex-wrap gap-8 max-w-2xl mx-auto">
              {[
                'react', 
                'python', 
                'postgresql', 
                'docker', 
                'linux', 
                'git',
              ].map((brandKey) => (
                <div key={brandKey}>
                  <ProficientItem brandKey={brandKey} />
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}