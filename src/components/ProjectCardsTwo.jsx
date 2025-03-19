import React from "react";
import { Link } from "react-router-dom";

const ProjectCardsTwo = ({ ...project }) => {
  return (
    <a
      href={project?.link}
      target="_self"
      className="project-card w-auto rounded-3xl border-[1px] border-gray-300 overflow-hidden relative group"
    >
      <div className="project_name flex">
        <p className="name p-5 text-white">{project.name}</p>
      </div>

      <div
        className="h-fit relative"

      >
        {/* Text Overlay */}
        {/* <p className="absolute bottom-5 left-5 text-white text-sm font-thin z-10 text-nowrap">
          {project?.description}
        </p> */}

        {/* Background Image */}
        <img         style={{
          maskImage: "linear-gradient(to bottom, black 30%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent)",
        }} className="rounded-3xl object-fill w-full h-full " src={project?.image} alt="" />
      </div>
    </a>
  );
};

export default ProjectCardsTwo;
