import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=150&width=250"
  },
  {
    title: "Task Management App",
    description: "A React Native mobile app for task management with real-time updates.",
    image: "/placeholder.svg?height=150&width=250"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard using Vue.js and OpenWeatherMap API.",
    image: "/placeholder.svg?height=150&width=250"
  },
  {
    title: "Blog CMS",
    description: "A custom Content Management System built with Laravel and MySQL.",
    image: "/placeholder.svg?height=150&width=250"
  }
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Personal Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}