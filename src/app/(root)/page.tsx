import ExperienceEducationTabs from "@/components/experience_education/ExperienceEducationTabs";
import Introduction from "@/components/Introduction";
import FeaturedProjects from "@/components/featured_projects/FeaturedProjects";
import ContactMe from "@/components/ContactMe";
export default function Home() {
  return (
    <div className="flex flex-col space-y-16 w-full">
      <Introduction />
      <ExperienceEducationTabs />
      <FeaturedProjects />
      <ContactMe />
    </div>
  );
}
