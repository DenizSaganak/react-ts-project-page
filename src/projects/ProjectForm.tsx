import { Project } from "./Project";
import { SyntheticEvent } from "react";

type ProjectFormProps = {
    onCancel: () => void;
    onSave: (project: Project) => void;
}

function ProjectForm({ onCancel, onSave }: ProjectFormProps) {
  const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      onSave(new Project({ name: 'Updated Project'}))
  };

  return (
    <form 
        onSubmit={handleSubmit}
        className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" />
      
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" />
      
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />
      
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />
      
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button onClick={onCancel} type="button" className="bordered medium">
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;