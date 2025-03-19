import React from "react";
import ProjectCards from "../components/ProjectCards";
import ProjectCardsTwo from "../components/ProjectCardsTwo";
import BadgeName from "../components/BadgeName";
import realestate from "../assets/mockupscreens/realestate.png"
import ecom from "../assets/mockupscreens/ecom.png"
import coffee from "../assets/mockupscreens/coffee.png"
import studentconnect from "../assets/mockupscreens/studentconnect.png"
const ProjectsSection = () => {
  const all_projects = [
    {
      name: "Real Estate Website",
      description:
        "A modern real estate platform to showcase plots and apartments, helping buyers explore property listings easily.",
      link: "https://prototyperakrealestate.netlify.app/",
      image: realestate,
    },
    {
      name: "E-Commerce Website",
      description:
        "An interactive e-commerce platform for browsing and purchasing products with a seamless user experience.",
      link: "https://luxury-monstera-5b2dad.netlify.app/",
      image: ecom,
    },
    {
      name: "Coffee Shop Themed Website",
      description:
        "A visually appealing website designed for coffee lovers, featuring a cozy theme and an online menu.",
      link: "https://coffeewithbrownies.netlify.app/",
      image: coffee,
    },
    {
      name: "Student Networking Platform",
      description:
        "A platform for students to connect, collaborate, and share knowledge, fostering professional and academic growth.",
      link: "https://student-connect-client.vercel.app/",
      image: studentconnect,
    },
  ];
  

  return (
    // <div className=" w-full flex flex-wrap gap-5 bg-[#f8f8f8] mx-auto">
    //   <div className=" w-[calc(100%-10%)] bg-red-800">
    //       {
    //       all_projects.map((project, index) => {
    //         return <ProjectCards key={index} {...project} />
    //       })
    //       }
    //   </div>
    // </div>

    <section className=" w-full flex justify-center bg-[#111111] py-10 overflow-hidden">
      <div className="w-[80%]  MAX-W-[1200px]  gap-y-10">
        <BadgeName content="PROJECTS" color="white"/>
        <h1 className=" text-4xl  lg:ml-0 lg:text-8xl text-start mb-5 font-thin text-white">PROJECTS</h1> 
        <div className="innerContainer w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            {all_projects.map((project, index) => (
              <ProjectCardsTwo key={index} {...project}/>
            ))}
        </div> 
      </div>
    </section>

    
  );
};

export default ProjectsSection;
