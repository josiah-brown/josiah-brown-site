import React from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/page_container/PageContainer";
import ToggleThemeBtn from "../../components/toggle_theme_btn/ToggleThemeBtn";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import { meta, projects } from "../../data/siteContent";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectInfo = () => {
  const params = useParams();
  let currProject;
  projects.forEach((p) => {
    if (p.infoUrl.includes(params.projectTitle)) {
      currProject = p;
    }
  });

  return (
    <PageContainer>
      <AboutSnippet
        heading={meta.title}
        content={"Return to projects"}
        url={"/projects"}
      />
      <ToggleThemeBtn />
      <div className="fixed mx-5 md:mx-20 lg:mx-28 xl:mx-40 bottom-8 md:bottom-20 h-[80%] md:h-[74%] lg:h-[66%] xl:h-[70%] dark:text-white lg:space-y-8">
        <h2 className="w-fit h-[8%] text-center text-2xl md:text-4xl lg:text-5xl lg:border-black dark:lg:border-white lg:border-b-2 mx-auto">
          {"0" + currProject.id + ". "}
          <span className="font-semibold">{currProject.title}</span>
        </h2>
        <div className="h-[92%] flex flex-col items-center space-y-6 lg:space-y-12 overflow-y-scroll">
          <div className="relative border-[1px] border-black dark:border-white">
            {window.innerWidth < 1280 ? (
              <img src={currProject.photo} />
            ) : (
              <img src={currProject.photo_lg} />
            )}
          </div>
          <div className="flex space-x-8 lg:space-x-16 w-fit">
            <a
              href={currProject.github}
              target="_blank"
              rel="noreferrer"
              className="z-50 border-2 border-black dark:border-white md:hover:bg-black md:hover:text-white dark:md:hover:bg-white dark:md:hover:text-neutral-800 py-2 px-10 text-2xl lg:text-4xl text-center cursor-pointer"
            >
              <FaGithub className="inline" />
            </a>
            <a
              href={currProject.link}
              target="_blank"
              rel="noreferrer"
              className="z-50 border-2 border-black dark:border-white md:hover:bg-black md:hover:text-white dark:md:hover:bg-white dark:md:hover:text-neutral-800 py-2 px-10 text-2xl lg:text-4xl text-center cursor-pointer"
            >
              <HiOutlineExternalLink className="inline" />
            </a>
          </div>
          <div className="overview space-y-4 lg:space-y-6 w-full">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold w-1/2 md:w-1/3 border-black dark:border-white border-b-2 border-r-2">
              Overview
            </h3>
            {currProject.overview.map((p, i) => {
              return (
                <p
                  className="text-sm md:text-base lg:text-lg"
                  key={p.slice(0, 10) + i}
                >
                  {p}
                </p>
              );
            })}
          </div>
          <div className="process space-y-4 lg:space-y-6 w-full">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold w-1/2 md:w-1/3 border-black dark:border-white border-b-2 border-r-2">
              Process
            </h3>
            {currProject.process.map((p, i) => {
              return (
                <p
                  className="text-sm md:text-base lg:text-lg"
                  key={p.slice(0, 10) + i}
                >
                  {p}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectInfo;
