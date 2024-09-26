import { MapPin } from "lucide-react"
import WorkExperience from "./WorkExperience"
// import Projects from "./Projects"

export default function Portfolio() {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Jan Härkönen</h1>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Helsinki, Finland</span>
            <span className="ml-2">&#127467;&#127470;</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">Full Stack Developer</h2>
        </header>
      <WorkExperience />
      {/*<Projects />*/}
    </div>
  )
}