import ExperienceEducationTabs from "@/components/experience_education/ExperienceEducationTabs";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
    <div className="flex flex-col space-y-8 w-full">
      <Introduction />
      <ExperienceEducationTabs />
    </div>
    </>
  );
}
