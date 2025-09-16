import { featuredProjects } from "@/lib/featuredProjects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <ProjectCard project={featuredProjects[10]} />
        <ProjectCard project={featuredProjects[9]} />
        <ProjectCard project={featuredProjects[8]} />
        <ProjectCard project={featuredProjects[7]} />
        <ProjectCard project={featuredProjects[6]} />
        <ProjectCard project={featuredProjects[5]} />
        <ProjectCard project={featuredProjects[4]} />
        <ProjectCard project={featuredProjects[3]} />
        <ProjectCard project={featuredProjects[2]} />
        <ProjectCard project={featuredProjects[1]} />
        <ProjectCard project={featuredProjects[0]} />
      </div>
    </div>
  );
}