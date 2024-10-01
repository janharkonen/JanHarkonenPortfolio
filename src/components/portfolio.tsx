import WorkExperience from "./WorkExperience"
import Introduction from "./Introdution"
import PersonalProjects from './PersonalProjects'
import ContactMe from "./ContactMe"

export default function Portfolio() {

  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <ContactMe />
      </div>
      <div className="mt-24">
        <Introduction />
      </div>
      <div className="mt-36">
        <WorkExperience />
      </div>
      <div className="mt-36">
        <PersonalProjects />
      </div>
    </div>
  )
}