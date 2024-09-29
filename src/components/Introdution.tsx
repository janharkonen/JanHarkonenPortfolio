import { MapPin } from "lucide-react"
import { useState } from 'react'

const proficientTools = [
    { name: "Python", logo: "https://cdn.simpleicons.org/python" },
    { name: "Delphi", logo: "https://cdn.simpleicons.org/delphi" },
    { name: "React", logo: "https://cdn.simpleicons.org/react" },
    { name: "SQL", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart-library.com%2F2023%2FRcdgAAE9i.png&f=1&nofb=1&ipt=7b02fc23d34b57b0e8bbae7891ae996de53002c3b9068a16d0a867768600f10e&ipo=images" },
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