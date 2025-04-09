import Education from "@/components/ExperiencEducation/Education";
import ExperienceEducationTabs from "@/components/ExperiencEducation/ExperienceEducationTabs";
import WorkExperience from "@/components/ExperiencEducation/WorkExperience";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Introduction />
      <WorkExperience />
    </div>
    </>
  );
}
