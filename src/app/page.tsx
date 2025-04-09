import Education from "@/components/ExperiencEducation/Education";
import ExperienceEducationTabs from "@/components/ExperiencEducation/ExperienceEducationTabs";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Introduction />
      <Education />
    </div>
    </>
  );
}
