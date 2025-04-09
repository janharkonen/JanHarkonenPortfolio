import ExperienceCard from "@/components/ExperiencEducation/ExperienceCard";
import Introduction from "@/components/Introduction";
import { workExperiences, educationExperiences } from "@/lib/experiences";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Introduction />
      <ExperienceCard experience={workExperiences[0]} />
      <ExperienceCard experience={workExperiences[1]} />
      <ExperienceCard experience={workExperiences[2]} />
      <ExperienceCard experience={workExperiences[3]} />
      <ExperienceCard experience={workExperiences[4]} />
      <ExperienceCard experience={educationExperiences[0]} />
      <ExperienceCard experience={educationExperiences[1]} />
      <ExperienceCard experience={educationExperiences[2]} />
    </div>
    </>
  );
}
