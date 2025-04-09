import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkExperience from "@/components/ExperiencEducation/WorkExperience"
import Education from "@/components/ExperiencEducation/Education"

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
        <WorkExperience />
      </TabsContent>
      <TabsContent value="education">
        <Education />
      </TabsContent>
    </Tabs>
  )
}