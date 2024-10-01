
import { Button } from "@/components/ui/button"
import { FileText, Linkedin, Github, Mail } from "lucide-react"

function ContactMe() {
  return (
    <div className="mt-12">
          <div className="flex justify-center space-x-4">
            <Button variant="outline" asChild>
              <a href="../../src/CV_en_Jan_Härkönen.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/janharkonen" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/janharkonen" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:jan.harkonen@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
  )
}

export default ContactMe