import { MapPin } from "lucide-react"
import Image from "next/image"
import { BrandedItemLogoWithCaption } from "./BrandedItemComponents"

export default function Introduction() {
    return(
        <div>
          <div className="flex flex-col md:flex-row-reverse md:items-start gap-8">
            {/* Photo Section - Fixed width on desktop, centered on mobile */}
            <div className="md:w-48 flex justify-center md:justify-end md:flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-md">
                <Image 
                  src="/HeadshotJanH.jpg" 
                  alt="Jan Härkönen" 
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                  className="object-cover object-[75%_15%]"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex-grow space-y-4 md:space-y-6 text-left">
              <h1 className="text-4xl md:text-5xl font-bold">Jan Härkönen</h1>
              <div className="flex items-center justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Helsinki, Finland</span>
                <span className="ml-2">&#127467;&#127470;</span>
              </div>
              <h2 className="text-2xl font-semibold">Senior Full Stack Developer</h2>
              <p className="text-lg">
                Writing software that&apos;s pleasant to look at
              </p>
              <div className="mt-6 md:mt-8">
                <h3 className="text-xl font-semibold mb-8">I&apos;m most proficient with</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-y-8 gap-x-4 sm:gap-12">
            {[
              'nextjs', 
              'python', 
              'golang', 
              'postgresql', 
              'redis', 
              'linux', 
            ].map((brandKey) => (
              <div key={brandKey} className="w-12 h-12">
                <BrandedItemLogoWithCaption brandKey={brandKey} />
              </div>
            ))}
          </div>
        </div>
    )
}