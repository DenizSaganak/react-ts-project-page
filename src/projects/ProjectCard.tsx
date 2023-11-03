import { Project } from "./Project"

type ProjectCardProps = {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{project.description}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
      </section>
    </div>
  )
}

export default ProjectCard