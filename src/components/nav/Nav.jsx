import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  // Effect adds a dot next to the active link in the nav
  useEffect(() => {
    const path = window.location.pathname;
    document.querySelectorAll("nav a").forEach((link) => {
      if (
        // If the end of the href matches the path, it is the current page
        link.href.slice(link.href.length - path.length, link.href.length) ===
        path
      ) {
        link.innerHTML = link.innerHTML + " •";
      }
    });
  }, []);

  return (
    <nav className="absolute z-50 flex flex-col right-0 bottom-8 md:bottom-20 items-end text-base md:text-2xl gap-2 md:gap-4 font-extralight text-black dark:text-white">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/art"}>Art</Link>
      <Link to={"/blog"}>Blog</Link>
    </nav>
  );
};

export default Nav;
