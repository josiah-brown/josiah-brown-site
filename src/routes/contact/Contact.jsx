import React from "react";
import PageContainer from "../../components/page_container/PageContainer";
import Nav from "../../components/nav/Nav";
import ToggleThemeBtn from "../../components/toggle_theme_btn/ToggleThemeBtn";
import AboutSnippet from "../../components/about_snippet/AboutSnippet";
import { meta } from "../../data/siteContent";

const Contact = () => {
  return (
    <PageContainer>
      <AboutSnippet heading={meta.title} content={meta.content} />
      <ToggleThemeBtn />
      <Nav />
      <div
        id="contact_container"
        className="flex flex-col fixed left-5 md:left-20 lg:left-28 xl:left-40 bottom-8 md:bottom-20 h-[70%] md:h-[66%] lg:h-[60%] dark:text-white w-full md:w-3/5"
      >
        <h1 className="font-semibold text-2xl md:text-5xl xl:text-6xl tracking-wide w-1/2 md:w-3/5 border-black dark:border-white border-r-2 border-b-2 mb-2 md:mb-4 xl:mb-6">
          CONTACT
        </h1>
        <div
          id="contact_content"
          className="w-2/3 md:w-full font-light text-sm md:text-xl lg:text-xl flex flex-col space-y-4 md:space-y-8 leading-6 tracking-wide"
        >
          <p>
            I am currently searching for a full-time job in front-end
            development. As a result, it is unlikely that I can accomodate
            freelance requests at this time.
          </p>
          <p>
            That being said, I'm still willing to consider freelance jobs in the
            off chance that I can take on your project. Or you could just send
            me an email telling me about how your day is going :)
          </p>
          <p>josiah.webdev@gmail.com</p>
          <a
            href="mailto:josiah.webdev@gmail.com"
            className="md:text-2xl border-black border-2 dark:border-white p-2 px-6 md:px-6 xl:px-12 w-fit text-center bg-black dark:bg-white text-white dark:text-neutral-800 hover:cursor-pointer hover:bg-white hover:dark:bg-neutral-800 hover:text-black hover:dark:text-white"
          >
            SEND EMAIL
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
