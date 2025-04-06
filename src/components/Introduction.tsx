import { MapPin } from "lucide-react"
import ProficientItem from "./BrandedItemComponents"
import Image from "next/image"

export default function Introduction() {
    return(
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Photo Section */}
          <div className="shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-md">
              <Image 
                src="/HeadshotJanH.jpg" 
                alt="Jan Härkönen" 
                fill
                sizes="(max-width: 768px) 160px, 192px"
                priority
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-4 md:space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Jan Härkönen</h1>
            <div className="flex items-center justify-start">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Helsinki, Finland</span>
              <span className="ml-2">&#127467;&#127470;</span>
            </div>
            <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
            <p className="text-lg">
              Writing software that's pleasant to look at
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-8">I'm most proficient with</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
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
        </div>
    )
}