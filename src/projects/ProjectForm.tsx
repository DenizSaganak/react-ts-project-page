import { Project } from "./Project";
import { useState, SyntheticEvent } from "react";

type ProjectFormProps = {
    project: Project,
    onCancel: () => void;
    onSave: (project: Project) => void;
}

function ProjectForm({ onCancel, onSave, project: initialProject }: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  })

  const validate = (project: Project) => {
    let errors = { name: "", description: "", budget: "" }
    if(project.name.length === 0) errors.name = "Name is required";
    if(project.name.length > 0 && project.name.length < 3) errors.name = "Name needs to be at least 3 characters long."
    if(project.description.length === 0) errors.description = "Description is required";
    if(project.budget < 0 || project.budget === 0) errors.budget = "Budget must be greater than $0";
    return errors;
  }

  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }


  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === 'checkbox' ? checked : value;

    if(type === "number") updatedValue = Number(updatedValue);

    const change = {
        [name]: updatedValue,
    }

    let updatedProject: Project;

    setProject((p) => {
        updatedProject = new Project({ ...p, ...change });
        return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  }

  const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      if(!isValid()) return;
      onSave(project);
  };

  return (
    <form 
        onSubmit={handleSubmit}
        className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" value={project.name} onChange={handleChange} placeholder="enter name" />

      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}

      <label htmlFor="description">Project Description</label>
      <textarea name="description" value={project.description} onChange={handleChange} placeholder="enter description" />
 
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}

      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" value={project.budget} onChange={handleChange} placeholder="enter budget" />
 
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" checked={project.isActive} onChange={handleChange} />
      
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button 
          onClick={onCancel}
          type="button" 
          className="bordered medium"
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;