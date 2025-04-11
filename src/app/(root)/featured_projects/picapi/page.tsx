import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[0]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2025</h2>
      <img
      src="https://picapi.janharkonen.fi/api/pics/d40795b1bb8b4987b965e11d241bbf78.png"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base">
          PICAPI was spawned out of frustration.
        </p>
        <p className="text-base mt-4">
          Placing and framing images in React is annoying. Whenever I need padding
          or cropping for my pictures or simply just adding a solid background, 
          I had to open MS paint, make changes, save it in my React project&apos;s 
          public directory and then hope that the placement is adequate. It was 
          time consuming and I hated it.
        </p>
        <p className="text-base mt-4">
          I tried using AWS S3, which freed me from the shackles of saving 
          images in my React public directory, since I could get a URL for 
          each picture. But it was still annoying to modify the picture and 
          to reupload the image into S3 and copypasting the new URL.
        </p>
        <p className="text-base mt-4">
          Next I tried UploadThing (made by
          {<a href="https://www.youtube.com/@t3dotgg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-1">
                Theo
          </a>}
          ). It was an improvement compared to S3, since the uploading 
          process was a simple as a drag and drop. But it was still 
          annoying to first modify the picture and then reuploading and 
          re-copying the URL.
        </p>
        <p className="text-base mt-4">
          That spawned a simple idea: why not use URL parameters to manipulate images?
          I wasn&apos;t aware of any product like that. &ldquo;Dammit, I&apos;ll make it myself&ldquo;, I 
          thought. And so PICAPI was born.
        </p>
        <p className="text-base mt-4"> 
          PICAPI also offers a simple front-end, where you can upload your pictures 
          in a cloud server by simply dragging and dropping, and copying the image URL 
          is only one click away.
        </p>
        <p className="text-base mt-4"> 
          As a simple example, using the URL
        </p>
        <div className="bg-gray-100 rounded p-2 my-2 font-mono text-sm break-all">
            <a href="https://picapi.janharkonen.fi/api/pics/20c610e3647d4e9582fd2bf469025a92.png" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline">
              https://picapi.janharkonen.fi/api/pics/20c610e3647d4e9582fd2bf469025a92.png
            </a>
        </div>
        <p className="text-base mt-4"> 
          we get this picture as is with no manipulation:
        </p>
        <div className="flex justify-center mt-4">
          <img src="https://picapi.janharkonen.fi/api/pics/20c610e3647d4e9582fd2bf469025a92.png" 
          alt="Example" 
          className="w-32 h-32 object-contain rounded-md"
          />
        </div>
        <p className="text-base mt-4"> 
          To manipulate this picture with PICAPI , we can add URL parameters, for example 
          <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
            ?BGc=gray&BG=120
          </code>.
          So the URL becomes
        </p>
        <div className="bg-gray-100 rounded p-2 my-2 font-mono text-sm break-all">
            <a href="https://picapi.janharkonen.fi/api/pics/20c610e3647d4e9582fd2bf469025a92.png?BGc=gray&BG=125" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline">
              https://picapi.janharkonen.fi/api/pics/20c610e3647d4e9582fd2bf469025a92.png?BGc=gray&BG=125
            </a>
        </div>
        <p className="text-base mt-4"> 
          and the picture is manipulated to have a gray background with a 125% padding:
        </p>
        <div className="flex justify-center mt-4">
          <img src="https://picapi.janharkonen.fi/api/pics/20c610e3647d4e9582fd2bf469025a92.png?BGc=gray&BG=125" 
          alt="Example" 
          className="w-48 h-48 object-contain rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manipulating images with URL parameters</li>
          <li>Uploading images to the cloud with a simple drag and drop</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front-end:</span> 
                <BrandedItemBadge brandKey="vanillajs" />
                <BrandedItemBadge brandKey="html" />
                <BrandedItemBadge brandKey="css" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>API:</span> 
                <BrandedItemBadge brandKey="python" />
                <BrandedItemBadge brandKey="flask" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                <BrandedItemBadge brandKey="sqlite" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Containerization:</span> 
                <BrandedItemBadge brandKey="docker" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                <BrandedItemBadge brandKey="hetzner" />
                <BrandedItemBadge brandKey="debian" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Reverse proxy:</span> 
                <BrandedItemBadge brandKey="nginx" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>DNS:</span> 
                <BrandedItemBadge brandKey="cloudflare" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>AI tools:</span> 
                <BrandedItemBadge brandKey="Claude" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> 
                <BrandedItemBadge brandKey="vscode" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Version control</span>
                <BrandedItemBadge brandKey="git" />
              </div>
            </li>
          </ul>
        </div>
      </div>
          
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Making a simple front-end with vanilla JS, HTML and CSS with no fancy frameworks</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
