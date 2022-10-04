import React from "react";
import PageContainer from "../../components/page_container/PageContainer";
import Nav from "../../components/nav/Nav";
import ToggleThemeBtn from "../../components/toggle_theme_btn/ToggleThemeBtn";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import { meta } from "../../data/siteContent";
import { about } from "../../data/siteContent";
import { FiArrowUpRight } from "react-icons/fi";
import RESUME from "../../assets/project-1.png";

const About = () => {
  return (
    <PageContainer>
      <AboutSnippet heading={meta.title} content={meta.content} />
      <ToggleThemeBtn />
      <Nav />
      <div
        id="about_container"
        className="flex flex-col fixed left-5 md:left-20 lg:left-28 xl:left-40 bottom-8 md:bottom-20 h-[70%] md:h-[66%] lg:h-[60%] dark:text-white w-2/3 md:w-3/5"
      >
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-6xl xl:text-6xl tracking-wide w-1/2 md:w-2/5 xl:w-2/5 border-black dark:border-white border-r-2 border-b-2 mb-2 xl:mb-6">
          ABOUT
        </h1>
        <div
          id="about_content"
          className="flex flex-col overflow-y-scroll my-4 space-y-4 lg:space-y-8"
        >
          <a
            href={RESUME}
            download={"resume.png"}
            className="bg-black dark:bg-white text-white dark:text-neutral-800 p-2 mr-auto md:text-xl lg:text-2xl xl:text-3xl"
          >
            DOWNLOAD RESUME <FiArrowUpRight className="inline text-xl" />
          </a>
          <div className="about_text w-full font-light text-sm md:text-lg lg:text-xl flex flex-col space-y-4 leading-6 tracking-wide">
            {about.text.map((p, i) => {
              return <p key={i}>{p}</p>;
            })}
          </div>
          <div className="about_tech w-full">
            <h2 className="font-bold md:text-xl xl:text-2xl mt-4 tracking-wide">
              Technologies I've Used...
            </h2>
            <div className="my-4 grid grid-cols-3 justify-items-center text-3xl md:text-5xl gap-8 md:gap-12 dark:text-white">
              {about.logos.map((l) => {
                return l;
              })}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
