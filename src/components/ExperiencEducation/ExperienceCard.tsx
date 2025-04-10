import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Experience } from "@/lib/experiences"

export default function ExperienceCard({ experience }: { experience: Experience }) {
    return (
    <Card>
      <CardHeader>
        <CardTitle>{experience.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{experience.description}</p>
      </CardContent>
    </Card>
  )
}