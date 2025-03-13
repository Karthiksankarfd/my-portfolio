import React from "react";

const SkillsSection = () => {
  const skills = [
    { name: "React", image: "/assets/react.png" },
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
    <section className="skills py-10 bg-[#111111] ">
      <div className="child_container lg:w-[70%] mx-auto h-full overflow-hidden">
        <h1 className=" text-4xl ml-0 lg:ml-0 lg:text-8xl text-start mb-5 font-thin text-white">
          SKILLS
        </h1>
        <div className="innerContainer-skills w-full relative h-fit flex  lg:flex-row  items-start gap-5">
          <div className="vertical_line_main h-[400px] w-1 bg-[var(--secondary-color)] "></div>
          <div className="flex-1">

            <div className="main_container_for_skill_pipe_structure flex items-center  -ml-7 mb-15">
              <div className="square h-14 w-14 bg-[var(--secondary-color)] flex-shrink-0"></div>
              <div className="line_from_squrae_to_skill_label h-1 w-1/4 bg-[var(--secondary-color)]"></div>
              <div className="skill_label_card w-full h-14 lg:w-1/4 bg-[var(--secondary-color)]"></div>
            </div>

     
            <div className="main_container_for_skill_pipe_structure flex items-center flex-1 -ml-7">
              <div className="square h-14 w-14 bg-[var(--secondary-color)] flex-shrink-0"></div>
              <div className="line_from_squrae_to_skill_label h-1 w-1/4 bg-[var(--secondary-color)]"></div>
              <div className="skill_label_card w-full h-14 lg:w-1/4 bg-[var(--secondary-color)]"></div>
            </div>
          </div>
          {/* {skills.map((skill, index) => (
            <div
              key={index}
              className="skill_name_container  scrolling-text p-2 rounded-lg bg-white font-semibold min-w-40 hover:bg-black text-secondary hover:text-[var(--secondary-color)]  "
            >
              <div>
                <span>{skill.name}</span>
              </div>
              <img src={skill.index} alt="" />
            </div>
          ))} */}
                    {/* {skills.map((skill, index) => (
            <div
              key={index}
              className="skill_name_container scrolling-text p-2 rounded-lg bg-white font-semibold min-w-40 hover:bg-black text-secondary hover:text-[var(--secondary-color)]  "
            >
              <div>
                <span>{skill.name}</span>
              </div>
              <img src={skill.index} alt="" />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
