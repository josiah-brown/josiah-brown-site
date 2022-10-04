import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div
      data-testid="footer"
      className="flex flex-col space-y-4 xl:space-y-8 items-center"
    >
      <div className="flex space-x-12  xl:space-x-20 mt-4">
        <a
          href="https://www.linkedin.com/in/josiah-brown99/"
          target="_blank"
          rel="noreferrer"
          className="md:w-8 md:h-8"
        >
          <AiFillLinkedin className="text-lg md:text-3xl dark:text-white md:w-8 md:h-8 md:hover:text-neutral-500" />
        </a>
        <a
          href="https://github.com/josiah-brown"
          target="_blank"
          rel="noreferrer"
          className="md:w-8 md:h-8"
        >
          <AiFillGithub className="text-lg md:text-3xl dark:text-white md:w-8 md:h-8 md:hover:text-neutral-500" />
        </a>
        <a
          href="https://www.instagram.com/eclipse_generative_art/"
          target="_blank"
          rel="noreferrer"
          className="md:w-8 md:h-8"
        >
          <AiFillInstagram className="text-lg md:text-3xl dark:text-white md:w-8 md:h-8 md:hover:text-neutral-500" />
        </a>
      </div>
      <p className="text-xs font-extralight">© Josiah Brown {year}</p>
    </div>
  );
};

export default Footer;
