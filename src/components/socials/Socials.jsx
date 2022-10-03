import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <div
      data-testid="socials"
      className="absolute z-50 left-5 md:left-28 bottom-8 md:bottom-20 flex flex-col space-y-4 md:space-y-6"
    >
      <a
        href="https://google.com"
        target="_blank"
        rel="noreferrer"
        className="md:w-8 md:h-8 group overflow-hidden relative"
      >
        <AiFillLinkedin className="text-lg md:text-3xl dark:text-white md:w-8 md:h-8 md:p-1" />
        <span className="hidden md:block md:absolute md:duration-200 md:delay-0 md:bg-black dark:md:bg-white md:h-[2px] md:w-8 md:top-0 md:-left-8 md:group-hover:left-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[100ms] md:bg-black dark:md:bg-white md:w-[2px] md:h-8 md:-top-8 md:right-0 md:group-hover:top-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[200ms] md:bg-black dark:md:bg-white md:h-[2px] md:w-8 md:bottom-0 md:left-8 md:group-hover:left-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[300ms] md:bg-black dark:md:bg-white md:w-[2px] md:h-0 md:bottom-0 md:left-0 md:group-hover:h-8"></span>
      </a>
      <a
        href="https://google.com"
        target="_blank"
        rel="noreferrer"
        className="md:w-8 md:h-8 group overflow-hidden relative"
      >
        <AiFillGithub className="text-lg md:text-3xl dark:text-white md:w-8 md:h-8 md:p-1" />
        <span className="hidden md:block md:absolute md:duration-200 md:delay-0 md:bg-black dark:md:bg-white md:h-[2px] md:w-8 md:top-0 md:-left-8 md:group-hover:left-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[100ms] md:bg-black dark:md:bg-white md:w-[2px] md:h-8 md:-top-8 md:right-0 md:group-hover:top-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[200ms] md:bg-black dark:md:bg-white md:h-[2px] md:w-8 md:bottom-0 md:left-8 md:group-hover:left-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[300ms] md:bg-black dark:md:bg-white md:w-[2px] md:h-0 md:bottom-0 md:left-0 md:group-hover:h-8"></span>
      </a>
      <a
        href="https://google.com"
        target="_blank"
        rel="noreferrer"
        className="md:w-8 md:h-8 group overflow-hidden relative"
      >
        <AiFillInstagram className="text-lg md:text-3xl dark:text-white md:w-8 md:h-8 md:p-1" />
        <span className="hidden md:block md:absolute md:duration-200 md:delay-0 md:bg-black dark:md:bg-white md:h-[2px] md:w-8 md:top-0 md:-left-8 md:group-hover:left-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[100ms] md:bg-black dark:md:bg-white md:w-[2px] md:h-8 md:-top-8 md:right-0 md:group-hover:top-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[200ms] md:bg-black dark:md:bg-white md:h-[2px] md:w-8 md:bottom-0 md:left-8 md:group-hover:left-0"></span>
        <span className="hidden md:block md:absolute md:duration-200 md:delay-[300ms] md:bg-black dark:md:bg-white md:w-[2px] md:h-0 md:bottom-0 md:left-0 md:group-hover:h-8"></span>
      </a>
    </div>
  );
};

export default Socials;
