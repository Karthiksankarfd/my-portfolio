import React from "react";

const ScrollingComponent = () => {
  const skills = [
    { name: "React", image: "../assets/react.svg" },
    { name: "JavaScript", image: "/assets/javascript.png" },
    { name: "Node.js", image: "/assets/nodejs.png" },
    { name: "Express.js", image: "/assets/express.png" },
    { name: "MongoDB", image: "/assets/mongodb.png" },
    { name: "HTML", image: "/assets/html.png" },
    { name: "CSS", image: "/assets/css.png" },
    { name: "Tailwind CSS", image: "/assets/tailwind.png" },
    { name: "Git", image: "/assets/git.png" },
    { name: "Figma", image: "/assets/figma.png" },
  ];
  return (
    <section className="slider" style="--height:">
      <div className="list flex border-2 border-fuchsia-400 max-w-[1200px] w-[70%] mx-auto overflow-hidden">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill_name_container flex items-center  w-fit p-2 rounded-lg bg-white font-semibold min-w-40 hover:bg-black text-secondary hover:text-[var(--secondary-color)]  "
          >
            <div>
              <span>{skill.name}</span>
            </div>
            <img src={skill.image} alt="" className="h-[50px] w-[50px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingComponent;
