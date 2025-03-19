import React from "react";
import bg1 from "../assets/bg1.jpg";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import MongoDB from "../assets/MongoDB.png";
import Node from "../assets/Node.png";
import Reacticon from "../assets/Reacticon.png";
import Express from "../assets/Express.png";
const HeroSection = () => {
  return (
    <>
      <section className="hero-section md:h-dvh text-white  relative  bg-[#111111] gap-5 flex flex-col md:flex-row items-center justify-center ">
        {/* Name Section */}
        <main className="mx-auto w-[80%] py-10 flex flex-col lg:flex-row relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left flex-1 w-full"
          >
            <div className="flex items-center">
              {/* <div className=" text-2xl md:text-7xl font-thin project-card  bg-gradient-to-tr from-purple-900  to-blue-500 bg-clip-text"> */}
              <h1 className=" text-2xl md:text-7xl font-thin project-card  bg-gradient-to-tr from-purple-900  to-blue-500 bg-clip-text">
                Karthikeyan
              </h1>
              {/* </div> */}


              <div className="flex flex-col">
                <div className="h-16 w-16 bg-green-300 ">
                  <img src={MongoDB} alt="" />
                </div>
                <div className="flex">
                  <div className="h-16 w-16 ">
                    <img src={Express} alt="" />
                  </div>
                  <div className="h-16 w-16 bg-green-300  ">
                    <img src={Reacticon} alt="" />
                  </div>
                </div>
                <div className="h-16 w-16 bg-green-300">
                  <img src={Node} alt="" />
                </div>
                {/* <span className="text-green-500"> MERN Developer</span> */}
                <div className="typewriter">
                  <Typewriter
                    className="text-green-300"
                    words={[
                      "MERN Stack Developer",
                      "UI/UX Enthusiast",
                      "Problem Solver",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="text-start max-w-2xl border-l-6  border-green-500 pl-3">
              <h3 className="text-2xl md:text-7xl font-thin  mb-5">Hello,</h3>
              <p className="  md:xl font-thin project-card">
                Hi, I'm <strong>Karthikeyan Sankar</strong>, a{" "}
                <strong>MERN Stack Developer</strong> and{" "}
                <strong>UI/UX Enthusiast</strong>, passionate about crafting
                clean, user-friendly, and functional web applications. Currently
                pursuing a{" "}
                <strong>B.Sc. in UI/UX Design and Development</strong> at{" "}
                <strong>ICAT Design and Media College, Bangalore</strong>, I
                enjoy combining design and development to create intuitive
                digital experiences.
              </p>
            </div>
          </motion.div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
