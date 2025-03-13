import React from "react";
import BadgeName from "../components/BadgeName";

const SkillsSectionTwo = () => {
  return (
    <section className="skills-section-two-parent-container  w-full h-dvh lg:h-dvh lg:px-5  flex items-center">
      <div className="w-[80%]  mx-auto  flex flex-col  lg:flex-row  ">
        <div className="left-inner-child flex-1  flex flex-col items-start">
            <BadgeName content="My Skills"/>

          <h1 className="text-start text-4xl lg:text-7xl">
            My Development <br /> Skills
          </h1>
        </div>

        <div className="right_inner_child flex-1  text-start">
          <div className="inner_child_right flex flex-col gap-5 ">
            <div className="skills_1 flex flex-col  gap-5 ">
              <h3 className="skill_name text-4xl">1. MongoDB</h3>
              <p>
                NoSQL database used for storing and managing application data in
                flexible JSON-like documents.
              </p>
              <hr />
            </div>
            <div className="skills_1 flex flex-col gap-5">
              <h3 className="skill_name text-4xl">2. Express.js</h3>
              <p>
                Lightweight Node.js framework for handling API requests,
                middleware, and server logic.
              </p>
              <hr />
            </div>
            <div className="skills_1 flex flex-col gap-5">
              <h3 className="skill_name text-4xl">3. React</h3>
              <p>
                JavaScript library for building dynamic and interactive user
                interfaces.
              </p>
              <hr />
            </div>
            <div className="skills_1 flex flex-col gap-5">
              <h3 className="skill_name text-4xl">4. Node.js</h3>
              <p>
                JavaScript runtime for running the backend server and handling
                requests asynchronously.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionTwo;
