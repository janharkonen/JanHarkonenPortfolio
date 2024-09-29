import { MapPin } from "lucide-react"
import { useState } from 'react'

const proficientTools = [
    { name: "Python", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fpython-logo.png&f=1&nofb=1&ipt=95475181fb9a4f55667f208bbfd828765bc3a421b010de17cfbd8d9288552b18&ipo=images" },
    { name: "Delphi", logo: "https://cdn.simpleicons.org/delphi" },
    { name: "React", logo: "https://cdn.simpleicons.org/react" },
    { name: "SQL", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsubstackcdn.com%2Fimage%2Ffetch%2Ff_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep%2Fhttps%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F85be1fac-45e8-4f67-88d0-cc3d042fbd01_935x935.png&f=1&nofb=1&ipt=4843986c2d499092d931f4ff467356dd3c2bfdcd9e8425aa171d0a71ac7959d7&ipo=images" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git" },
]

export default function Introduction() {
    const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 })

    const handleMouseEnter = (e: React.MouseEvent, text: string) => {
        setTooltip({ show: true, text, x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
        setTooltip({ show: false, text: '', x: 0, y: 0 })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (tooltip.show) {
            setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
        }
    }

    return(
        <header className="text-center space-y-6" onMouseMove={handleMouseMove}>
          <h1 className="text-5xl font-bold">Jan Härkönen</h1>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Helsinki, Finland</span>
            <span className="ml-2">&#127467;&#127470;</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">Full Stack Developer</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Passionate and versatile full stack developer with a strong background in both front-end and back-end technologies. 
            Experienced in creating efficient, scalable, and user-friendly web applications. 
            Committed to continuous learning and staying up-to-date with the latest industry trends and best practices.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Most proficient with</h3>
            <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
              {proficientTools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                  onMouseEnter={(e) => handleMouseEnter(e, tool.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={tool.logo} alt={`${tool.name} logo`} className="w-12 h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
          {tooltip.show && (
            <div 
              className="fixed pointer-events-none bg-black text-white px-2 py-1 rounded text-sm"
              style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y + 10}px` }}
            >
              {tooltip.text}
            </div>
          )}
        </header>
    )
}