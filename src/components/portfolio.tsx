import Introduction from "./Introdution"
import FeaturedProjects from './FeaturedProjects'
import ContactMe from "./ContactMe"
import ExperienceEducationTabs from "./ExperienceEducationTabs"

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
          <ExperienceEducationTabs />
        </div>
        <div className="mt-36">
          <FeaturedProjects />
        </div>
      </div>
      <footer className="mt-36 pb-8 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; Jan Härkönen, 2024
          </p>
          <ContactMe />
        </div>
      </footer>
    </>
  )
}