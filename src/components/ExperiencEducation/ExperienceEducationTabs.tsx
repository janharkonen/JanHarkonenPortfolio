import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkExperience from "@/components/ExperiencEducation/WorkExperience"
import Education from "@/components/ExperiencEducation/Education"

export default function ExperienceEducationTabs() {
  return (
    <Tabs defaultValue="experience" className="w-full mt-8">
      <TabsList className="grid w-full grid-cols-2 h-12 text-lg">
        <TabsTrigger value="experience">
          Work Experience
        </TabsTrigger>
        <TabsTrigger value="education">
          Education
        </TabsTrigger>
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