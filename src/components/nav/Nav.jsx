import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="absolute flex flex-col right-0 bottom-8 md:bottom-20 items-end text-base md:text-2xl gap-2 md:gap-4 font-extralight">
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>Projects</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Contact</Link>
      <Link to={"/"}>Art</Link>
      <Link to={"/"}>Blog</Link>
    </nav>
  );
};

export default Nav;
