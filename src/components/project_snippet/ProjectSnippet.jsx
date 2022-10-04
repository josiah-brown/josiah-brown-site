import React from "react";
import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectSnippet = ({ project }) => {
  const p = project;

  let attached = false;
  let imgContainer = null;

  useEffect(() => {
    imgContainer = document.querySelector("#img-" + p.id);
  }, []);

  const followMouse = (e) => {
    imgContainer.style.left = e.x + 200 + "px";
    imgContainer.style.top = e.y - 100 + "px";
  };

  const showImg = () => {
    if (!attached) {
      attached = true;
      imgContainer.style.visibility = "visible";
      document.addEventListener("pointermove", followMouse);
    }
  };

  const hideImg = () => {
    attached = false;
    imgContainer.style.visibility = "hidden";
    document.removeEventListener("pointermove", followMouse);
  };

  return (
    <div
      className="flex flex-col items-start border-black dark:border-white border-l-2 pl-2 group w-fit hover:cursor-pointer"
      onPointerEnter={showImg}
      onPointerLeave={hideImg}
    >
      <a href={p.infoUrl}>
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
      </a>
      <div
        id={"img-" + p.id}
        className="fixed invisible w-[200px] border-black dark:border-white border-2 pointer-events-none"
      >
        <img src={p.photo} />
      </div>
    </div>
  );
};

export default ProjectSnippet;
