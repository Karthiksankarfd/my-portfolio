import React from "react";
import BadgeName from "../components/BadgeName";
import MongoDB from "../assets/MongoDB.png"
import Node from "../assets/Node.png"
import Reacticon from "../assets/Reacticon.png"
import Express from "../assets/Express.png"
const SkillsSectionTwo = () => {
  return (
    <section  className="skills-section-two-parent-container  w-full py-10  bg-white   flex items-center">
      <div className="w-[80%]  mx-auto  flex flex-col  lg:flex-row  ">
        <div  className="left-inner-child flex-1  flex flex-col items-start project-card">
            <BadgeName content="My Skills"/>

          <h1 className="text-start text-4xl lg:text-7xl ">
            My Development <br /> Skills
          </h1>
        </div>

        <div className="right_inner_child flex-1  text-start">
          <div className="inner_child_right flex flex-col gap-5 ">
            <div className="skills_1 flex flex-col  gap-5  project-card">
              <div className="dwedaxqdqd flex items-end">
                <h3 className="skill_name text-4xl"> 
                1. MongoDB</h3>
                <img src={MongoDB} alt="png" className="h-15" />
              </div>

              <p>
                NoSQL database used for storing and managing application data in
                flexible JSON-like documents.
              </p>
              <hr />
            </div>
            <div className="skills_1 flex flex-col gap-5 project-card">
            <div className="dwedaxqdqd flex items-center gap-3">
                <h3 className="skill_name text-4xl"> 
                2. Express.js</h3>
                <img src={Express} alt="png" className="h-15" />
            </div>
              <p>
                Lightweight Node.js framework for handling API requests,
                middleware, and server logic.
              </p>
              <hr />
            </div>
            <div className="skills_1 flex flex-col gap-5 project-card">
            <div className="dwedaxqdqd flex items-center gap-3">
                <h3 className="skill_name text-4xl"> 
                3. React</h3>
                <img src={Reacticon} alt="png" className="h-15" />
            </div>
              <p>
                JavaScript library for building dynamic and interactive user
                interfaces.
              </p>
              <hr />
            </div>
            <div className="skills_1 flex flex-col gap-5 project-card">
            <div className="dwedaxqdqd flex items-center gap-3">
                <h3 className="skill_name text-4xl"> 
                4. Node.js</h3>
                <img src={Node} alt="png" className="h-15" />
            </div>
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
