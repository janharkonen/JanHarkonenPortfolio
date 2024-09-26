import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Developer",
    company: "Polycon Oy",
    logo: "https://www.polycon.fi/wp-content/uploads/2020/03/polycon_turkoosi_500x49-300x29.png",
    period: "2021 - Present",
    description: "Leading development of scalable web applications using React and Node.js.",
    tools: [
      { name: "Delphi", logo: "https://cdn.simpleicons.org/delphi" },
      { name: "Microsoft SQL Server", logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7TIOHIVieZJ564CaI1B8LQAAAA%26pid%3DApi&f=1&ipt=aed1fbd637221218c13f8b4fc98bf59ba08fb142938dfdc707d75acdffba2f78&ipo=images" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Sourcetree", logo: "https://cdn.simpleicons.org/sourcetree" },
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFAENbYsHiSYw/company-logo_100_100/company-logo_100_100/0/1631308807980?e=1735171200&v=beta&t=IKs180dCzhvSZs0VhMKd6XhWv9TWOBM08QMu1x5cB3I",
    period: "2017 - 2020",
    description: "Developed and maintained e-commerce platforms using MERN stack.",
    tools: [
      { name: "MongoDB", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Express", logo: "/placeholder.svg?height=24&width=24" },
      { name: "React", logo: "/placeholder.svg?height=24&width=24" },
      { name: "Node.js", logo: "/placeholder.svg?height=24&width=24" },
    ]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    logo: "/placeholder.svg?height=40&width=40",
    period: "2015 - 2017",
    description: "Created responsive websites and implemented CMS solutions.",
    tools: [
      { name: "HTML5", logo: "/placeholder.svg?height=24&width=24" },
      { name: "CSS3", logo: "/placeholder.svg?height=24&width=24" },
      { name: "JavaScript", logo: "/placeholder.svg?height=24&width=24" },
      { name: "WordPress", logo: "/placeholder.svg?height=24&width=24" },
    ]
  }
]

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative">
            <div className="absolute top-4 left-4">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-20 h-20 object-contain" />{/*className={index === 0 ? "w-30 h-30 object-contain" : "w-20 h-20 object-contain"} />*/}
            </div>
            <CardHeader className="pt-16 pb-4">
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <p className="mb-6">{exp.description}</p>
              <div className="flex justify-center items-center space-x-4">
                {exp.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex flex-col items-center">
                    
                    <img src={`${tool.logo}`} alt={`${tool.name} logo`} className="w-6 h-6 object-contain mb-1" />
                    <span className="text-xs text-gray-600">{tool.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}