import { Project } from "./Project";
import { Link } from 'react-router-dom';

type ProjectCardProps = {
    project: Project;
    onEdit: (project: Project) => void;
}

function ProjectCard({ project, onEdit }: ProjectCardProps) {
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  }

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <Link to={'/projects/' + project.id}>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{project.description}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button onClick={() => handleEditClick(project)} className=" bordered">
          <span className="icon-edit "></span>
             Edit
        </button>
      </section>
    </div>
  )
}

export default ProjectCard