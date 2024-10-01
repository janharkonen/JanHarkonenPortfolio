import { useRef, useEffect, useState } from 'react'
import WorkExperience from "./WorkExperience"
import Introduction from "./Introdution"
import PersonalProjects from './PersonalProjects'

export default function Portfolio() {
  const workExperienceRef = useRef(null)
  const [showWorkExperience, setShowWorkExperience] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWorkExperience(true)
        }
      },
      { threshold: 0.1 }
    )

    if (workExperienceRef.current) {
      observer.observe(workExperienceRef.current)
    }

    return () => {
      if (workExperienceRef.current) {
        observer.unobserve(workExperienceRef.current)
      }
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="min-h-screen flex items-center justify-center">
        <Introduction />
      </div>
      <div ref={workExperienceRef}>
        {showWorkExperience && <WorkExperience />}
      </div>
      <PersonalProjects />
    </div>
  )
}