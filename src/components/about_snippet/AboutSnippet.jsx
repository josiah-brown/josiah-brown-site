import React from "react";

const AboutSnippet = ({ heading, content }) => {
  let head = heading ? heading : "No Heading...";
  let text = content ? content : "No Content...";
  return (
    <div
      data-testid="about-snippet"
      className="fixed z-50 left-5 md:left-28 top-6 flex flex-col md:top-12 text-black dark:text-white"
    >
      <h1 className="text-2xl font-semibold w-1/2 md:text-5xl">{head}</h1>
      <h3 className="text-sm font-extralight w-1/2 md:text-xl">{text}</h3>
    </div>
  );
};

export default AboutSnippet;
