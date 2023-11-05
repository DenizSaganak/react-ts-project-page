import { Project } from "./Project";
import { MOCK_PROJECTS } from "./MockProjects"
import ProjectList from "./ProjectList"

function ProjectsPage() {
  const saveProject = (project: Project) => {
    console.log('Saving the project')
  }
  return (
    <>
    <h1>Projects</h1>
    <ProjectList projects={MOCK_PROJECTS} onSave={saveProject}/>
    </>
  )
}

export default ProjectsPage