import WorkExperience from "./WorkExperience"
import Introduction from "./Introdution"
import FeaturedProjects from './FeaturedProjects'
import ContactMe from "./ContactMe"

export default function Portfolio() {
  return (
    <>
      <div className="top-0 left-0 right-0 z-10 bg-background">
        <ContactMe />
      </div>
      <div className="max-w-4xl mx-auto pt-20">
        <div className="mt-24">
          <Introduction />
        </div>
        <div className="mt-36">
          <WorkExperience />
        </div>
        <div className="mt-36">
          <FeaturedProjects />
        </div>
      </div>
    </>
  )
}