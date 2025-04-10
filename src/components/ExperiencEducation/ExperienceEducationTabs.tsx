import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { educationExperiences } from "@/lib/experiences"
import ExperienceCard from "./ExperienceCard"
import { workExperiences } from "@/lib/experiences"

export default function ExperienceEducationTabs() {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-16 text-lg">
        <TabsTrigger value="experience" className="py-4 px-6">
          Work Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="py-4 px-6">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <ExperienceCard experience={workExperiences[0]} />
        <ExperienceCard experience={workExperiences[1]} />
        <ExperienceCard experience={workExperiences[2]} />
        <ExperienceCard experience={workExperiences[3]} />
        <ExperienceCard experience={workExperiences[4]} />
      </TabsContent>
      <TabsContent value="education">
        <ExperienceCard experience={educationExperiences[0]} />
        <ExperienceCard experience={educationExperiences[1]} />
        <ExperienceCard experience={educationExperiences[2]} />
      </TabsContent>
    </Tabs>
  )
}