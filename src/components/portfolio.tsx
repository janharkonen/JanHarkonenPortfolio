import WorkExperience from "./WorkExperience"
import Introduction from "./Introdution"
import PersonalProjects from './PersonalProjects'

export default function Portfolio() {

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex items-top justify-center">
        <Introduction />
      </div>
      <div className="flex items-top justify-center">
        <WorkExperience />
      </div>
      <div className="flex items-top justify-center">
        <PersonalProjects />
      </div>
    </div>
  )
}