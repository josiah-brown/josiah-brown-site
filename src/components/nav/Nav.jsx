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
    <nav className="fixed z-50 flex flex-col right-5 md:right-28 bottom-8 md:bottom-20 items-end text-base md:text-2xl space-y-2 md:space-y-8 font-extralight text-black dark:text-white">
      {navLinks.map((l) => {
        return (
          <Link to={l.path} key={l.text} data-testid={"nav-link-" + l.text}>
            {l.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
