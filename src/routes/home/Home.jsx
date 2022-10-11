import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Socials from "../../components/socials/Socials";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import { meta } from "../../data/siteContent";
import PageContainer from "../../components/page_container/PageContainer";
import HeroSketch from "../../art/HeroSketch";
import ToggleThemeBtn from "../../components/toggle_theme_btn/ToggleThemeBtn";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <PageContainer>
      <AboutSnippet heading={meta.title} content={meta.content} />
      <ToggleThemeBtn />
      <Nav />
      <Socials />
      <div
        id="art-container"
        className=" absolute w-full adjusted_max_h bg-none"
      >
        <HeroSketch parent={"art-container"} />
      </div>
      <Link
        to={"/projects"}
        className="fixed z-100 left-[50%] top-[50%] rounded-3xl lg:rounded-none lg:hover:rounded-[2.5rem] transition-all ease-in-out duration-200 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 border-black dark:border-white border-2 lg:border-4 py-2 px-4 dark:text-white text-xl md:text-2xl lg:text-4xl"
      >
        View Work <FiArrowUpRight className="inline rotate-45" />
      </Link>
    </PageContainer>
  );
};

export default Home;
