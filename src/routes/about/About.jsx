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
        className="flex flex-col fixed left-5 md:left-28 bottom-8 md:bottom-20 w-full h-[70%] md:h-[60%] dark:text-white w-2/3"
      >
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-5xl tracking-wide w-1/2 md:w-2/5 xl:w-2/5 border-black dark:border-white border-r-2 border-b-2 mb-2 xl:mb-6">
          ABOUT
        </h1>
        <div className="about_content flex flex-col overflow-auto my-4 space-y-4">
          <a
            href={RESUME}
            download={"resume.png"}
            className="bg-black dark:bg-white text-white dark:text-neutral-800 p-2 mr-auto"
          >
            DOWNLOAD RESUME <FiArrowUpRight className="inline text-xl" />
          </a>
          <div className="about_text w-full font-light text-sm flex flex-col space-y-4 leading-6 tracking-wide">
            {about.text.map((p, i) => {
              return <p key={i}>{p}</p>;
            })}
          </div>
          <div className="about_tech w-full">
            <h2 className="font-bold mt-4 tracking-wide">
              Technologies I've Used...
            </h2>
            <div className="my-4 grid grid-cols-3 justify-items-center text-3xl gap-8 dark:text-white">
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
