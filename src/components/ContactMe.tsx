import { FileText, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactMe() {
  return (
      <div className="flex flex-col space-y-6 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <div className="flex flex-col space-y-4">
          <a href="mailto:jan.harkonen@pionblanc.fi" className="flex items-center justify-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
            <Mail className="h-6 w-6 sm:mr-2" />
            <span>jan.harkonen@pionblanc.fi</span>
          </a>
          <a href="tel:+358 50 4646 745" 
          className="flex items-center justify-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
            <Phone className="h-6 w-6 sm:mr-2" />
            <span>+358 50 4646 745</span>
          </a>
          <div className="flex justify-center space-x-6 pt-2">
            <a href="https://github.com/janharkonen" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/5 transition-colors">
                <Github className="h-6 w-6 sm:mr-2" />
            </a>
            <a href="https://linkedin.com/in/janharkonen" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/5 transition-colors">
                <Linkedin className="h-6 w-6 sm:mr-2" />
            </a>
            <a href="/pdf/resume" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/5 transition-colors">
              <FileText className="h-6 w-6 sm:mr-2" />
            </a>
          </div>
        </div>
      </div>
  );
}