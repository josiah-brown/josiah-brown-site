import React from "react";
import Nav from "../../components/nav/Nav";
import Socials from "../../components/socials/Socials";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import { meta } from "../../data/siteContent";
import PageContainer from "../../components/page_container/PageContainer";
import HeroSketch from "../../art/HeroSketch";
import ToggleThemeBtn from "../../components/toggle_theme_btn/ToggleThemeBtn";

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
    </PageContainer>
  );
};

export default Home;
