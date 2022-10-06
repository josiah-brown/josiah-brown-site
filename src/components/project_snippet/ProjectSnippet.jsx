import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectSnippet = ({ project }) => {
  const p = project;

  let attached = false;
  let imgContainer = useRef(null);

  useEffect(() => {
    imgContainer.current = document.querySelector("#img-" + p.id);
  }, [p.id]);

  const followMouse = (e) => {
    imgContainer.current.style.left = e.x + 200 + "px";
    imgContainer.current.style.top = e.y - 100 + "px";
  };

  const showImg = () => {
    if (!attached) {
      attached = true;
      imgContainer.current.style.visibility = "visible";
      document.addEventListener("pointermove", followMouse);
    }
  };

  const hideImg = () => {
    attached = false;
    imgContainer.current.style.visibility = "hidden";
    document.removeEventListener("pointermove", followMouse);
  };

  return (
    <div
      className="flex flex-col items-start border-black dark:border-white border-l-2 pl-2 group w-fit hover:cursor-pointer"
      onPointerEnter={showImg}
      onPointerLeave={hideImg}
      data-testid={"project-snippet-" + p.id}
    >
      <Link to={p.infoUrl} data-testid="project-snippet-anchor">
        <h3 className="font-semibold text-xs md:text-sm lg:text-xl xl:text-2xl">
          {"0" + p.id + "."}
        </h3>
        <div className="flex flex-row">
          <h2 className="italic font-light text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {p.title}
          </h2>

          <FiArrowUpRight className="lg:group-hover:-rotate-[135deg] lg:duration-200 my-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl" />
        </div>
        <p className="font-light text-xs md:text-sm lg:text-base xl:text-lg">
          {p.skills.join(", ")}
        </p>
      </Link>
      <div
        id={"img-" + p.id}
        className="fixed invisible w-[200px] border-black dark:border-white border-2 pointer-events-none"
      >
        <img src={p.photo} alt="project preview" />
      </div>
    </div>
  );
};

export default ProjectSnippet;
