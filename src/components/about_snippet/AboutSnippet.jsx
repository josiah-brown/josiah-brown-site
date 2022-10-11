import React from "react";
import { BsArrowUpLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const AboutSnippet = ({ heading, content, url }) => {
  let head = heading ? heading : "No Heading...";
  let text = content ? content : "No Content...";
  let linked = url ? true : false;

  return (
    <div
      data-testid="about-snippet"
      className="fixed z-50 left-5 md:left-20 lg:left-28 xl:left-40 top-6 flex flex-col md:top-12 text-black dark:text-white"
    >
      <h1 className="text-2xl font-semibold w-full md:text-5xl">
        <Link to="/" className="cursor-pointer" rel="canonical">
          {head}
        </Link>
      </h1>
      <h3 className="text-sm font-extralight w-1/2 md:text-xl">
        {linked ? (
          <Link to={url} className="cursor-pointer md:hover:italic">
            <BsArrowUpLeft className="inline" />
            {" " + text}
          </Link>
        ) : (
          text
        )}
      </h3>
    </div>
  );
};

export default AboutSnippet;
