import React from "react";
import PageContainer from "../../components/page_container/PageContainer";
import Nav from "../../components/nav/Nav";
import ToggleThemeBtn from "../../components/toggle_theme_btn/ToggleThemeBtn";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import { meta } from "../../data/siteContent";
import { projects } from "../../data/siteContent";
import ProjectList from "../../components/project_list/ProjectList";

const Projects = () => {
  return (
    <PageContainer>
      <AboutSnippet heading={meta.title} content={meta.content} />
      <ToggleThemeBtn />
      <Nav />
      <div
        id="projects_container"
        className="flex flex-col fixed left-5 md:left-28 bottom-8 md:bottom-20 w-full h-[66%] md:h-[60%] dark:text-white"
      >
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide w-1/2 md:w-2/5 xl:w-2/5 border-black dark:border-white border-r-2 border-b-2 mb-2 xl:mb-6">
          PROJECTS
        </h1>
        <ProjectList projects={projects} />
      </div>
    </PageContainer>
  );
};

export default Projects;
