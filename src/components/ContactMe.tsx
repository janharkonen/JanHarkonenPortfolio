
import { Button } from "@/components/ui/button"
import { FileText, Linkedin, Github, Mail } from "lucide-react"
import CVPDF from "../../src/CV_en_Jan_Härkönen.pdf"

function ContactMe() {
  return (
    <div>
          <div className="flex justify-center space-x-4">   
            <Button variant="outline" asChild>
              <div onClick={() => window.open(CVPDF, '_blank')}>
                <FileText className="h-4 w-4 mr-2" />
                <span className="sm:hidden">CV</span>
                <span className="hidden sm:inline">Resume</span>
              </div>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/janharkonen" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/janharkonen" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">Github</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:jan.harkonen@gmail.com">
                <Mail className="h-4 w-4 mr-0 sm:mr-2" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </Button>
          </div>
        </div>
  )
}

export default ContactMe