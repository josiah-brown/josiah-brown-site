import React from "react";
import Nav from "../../components/nav/Nav";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import PageContainer from "../../components/page_container/PageContainer";
import HeroSketch from "../../art/HeroSketch";

const Home = () => {
  return (
    <PageContainer>
      <AboutSnippet />
      <Nav />
      <div id="art-container" className=" absolute w-full h-screen -z-10">
        <HeroSketch parent={"art-container"} />
      </div>
    </PageContainer>
  );
};

export default Home;
