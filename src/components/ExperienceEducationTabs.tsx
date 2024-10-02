import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkExperience from "./WorkExperience"
import Education from "./Education"

export default function ExperienceEducationTabs() {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="experience">Work Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <WorkExperience />
      </TabsContent>
      <TabsContent value="education">
        <Education />
      </TabsContent>
    </Tabs>
  )
}