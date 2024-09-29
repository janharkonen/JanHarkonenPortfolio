import { MapPin } from "lucide-react"

export default function Introduction() {
    return(
        <header className="text-center space-y-6">
          <h1 className="text-5xl font-bold">Jan Härkönen</h1>
          <div className="flex items-center justify-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Helsinki, Finland</span>
            <span className="ml-2">&#127467;&#127470;</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">Full Stack Developer</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Versatile full stack developer with a strong background in both front-end and back-end technologies. 
            Experienced in creating efficient, scalable, and user-friendly web applications. 
            Committed to continuous learning and staying up-to-date with the latest industry trends and best practices.
          </p>
        </header>
    )
}