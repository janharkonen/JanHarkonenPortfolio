import WorkExperience from "./WorkExperience"
import Introduction from "./Introdution"
// import Projects from "./Projects"

export default function Portfolio() {
    return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <Introduction /> 
      <WorkExperience />
      {/*<Projects />*/}
    </div>
  )
}