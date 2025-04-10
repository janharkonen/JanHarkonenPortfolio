import ExperienceEducationTabs from "@/components/ExperiencEducation/ExperienceEducationTabs";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
    <div className="flex flex-col space-y-8">
      <Introduction />
      <ExperienceEducationTabs />
    </div>
    </>
  );
}
