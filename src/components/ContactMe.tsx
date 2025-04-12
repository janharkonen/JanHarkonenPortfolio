export default function ContactMe() {
  return (
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <div className="flex flex-col space-y-2">
          <p>Email: <a href="mailto:jan.harkonen@pionblanc.fi" className="text-blue-500 hover:underline">jan.harkonen@pionblanc.fi</a></p>
          <p>Phone: <a href="tel:+358405559777" className="text-blue-500 hover:underline">+358 40 555 9777</a></p>
          <div className="flex space-x-4">
            <a href="https://github.com/janharkonen" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/janharkonen" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="/pdf/resume" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Resume</a>
          </div>
        </div>
      </div>
  );
}