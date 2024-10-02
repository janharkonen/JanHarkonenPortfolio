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
      <div className="max-w-4xl mx-auto pt-20 px-4">
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
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground order-2 sm:order-1">
            &copy; Jan Härkönen, 2024
          </p>
          <div className="order-1 sm:order-2 w-full sm:w-auto">
            <ContactMe />
          </div>
        </div>
      </footer>
    </>
  )
}