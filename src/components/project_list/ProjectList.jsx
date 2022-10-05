import React from "react";
import ProjectSnippet from "../project_snippet/ProjectSnippet";
import { projects } from "../../data/siteContent";

const ProjectList = () => {
  return (
    <div
      data-testid="projects-list"
      className="flex flex-col space-y-4 lg:space-y-8 my-4 overflow-auto"
    >
      {projects.map((p) => {
        return <ProjectSnippet project={p} key={p.id} />;
      })}
    </div>
  );
};

export default ProjectList;
