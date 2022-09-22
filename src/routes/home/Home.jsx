import React from "react";
import Nav from "../../components/nav/Nav";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import PageContainer from "../../components/page_container/PageContainer";
import HeroSketch from "../../art/HeroSketch";
import ToggleTheme from "../../components/ToggleTheme";

const Home = () => {
  return (
    <PageContainer>
      <AboutSnippet />
      <ToggleTheme />
      <Nav />
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
