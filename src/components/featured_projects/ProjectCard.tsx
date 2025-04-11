"use client"

import { FeaturedProject } from "@/lib/featuredProjects";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import BrandedItemLogoWithTooltip from "../BrandedItemComponents";

export default function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg"
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover" />
      <CardHeader className="px-4 pt-4">
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="text-sm text-gray-600 mb-4">{project.period}</p>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-4 justify-center" onClick={(e) => e.stopPropagation()}>
          {project.tools.map((tool, toolIndex) => (
            <div
              key={toolIndex}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-6">
                <BrandedItemLogoWithTooltip brandKey={tool} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}