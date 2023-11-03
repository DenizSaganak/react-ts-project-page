import { Project } from "./Project"
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
    projects: Project[];
}



function ProjectList({ projects }: ProjectListProps) {
    console.log(projects)
  return (
    <div className="row">
     {projects.map((project) => (
        <div key={project.id} className="cols-sm">
       <ProjectCard project={project} />
       </div>
     ))}
   </div>
)
}

export default ProjectList