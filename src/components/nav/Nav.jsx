import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/links";

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
    <nav className="fixed z-50 flex flex-col right-5 md:right-20 lg:right-28 xl:right-40 bottom-8 md:bottom-20 items-end text-base md:text-2xl space-y-2 md:space-y-8 font-extralight text-black dark:text-white border-black dark:border-white border-l-2 pl-2 md:border-t-2 md:pt-2">
      {navLinks.map((l) => {
        return (
          <Link
            to={l.path}
            key={l.text}
            data-testid={"nav-link-" + l.text}
            className="md:relative md:before:content-[''] md:before:absolute md:before:w-full md:before:h-[2px] md:before:bg-black dark:md:before:bg-white md:before:bottom-0 md:before:left-0 md:before:origin-right md:before:scale-x-0 md:before:transition-transform md:before:duration-300 md:before:ease-in-out md:hover:before:origin-left md:hover:before:scale-x-[100%]"
          >
            {l.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
