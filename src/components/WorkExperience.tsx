import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: "Leading development of scalable web applications using React and Node.js."
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description: "Developed and maintained e-commerce platforms using MERN stack."
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2015 - 2017",
    description: "Created responsive websites and implemented CMS solutions."
  }
]

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}