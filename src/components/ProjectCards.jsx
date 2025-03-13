import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ProjectCards = ({ ...project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    className="bg-[#ffffff]  p-8 hover:shadow-none hover:bg-[#ffffgg] shadow-lg text-black text-left  rounded-2xl transition-all duration-200 "
    >
      <h3 className="font-semibold text-2xl">{project.name}</h3>
      <p className="font-normal">{project.description}</p>
      <Link
        to={project.link}
        className="bg-black text-green-500 py-2 px-4 inline-block font-semibold mt-5 hover:bg-black/80"
      >
        View Project
      </Link>
    </motion.div>
  );
};

export default ProjectCards;
