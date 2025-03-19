import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/heroSection";
import ProjectsSection from "./sections/projectsSection";
import SkillsSectionTwo from "./sections/SkillsSectionTwo";
import Footer from "./components/Footer";

function App() {
 
  const [activeLink, setActiveLink] = useState("")

  useEffect(()=>{
      setTimeout(() => {
        const cards = document.querySelectorAll(".project-card")
        console.log(cards)
       
        const cardObserver = new IntersectionObserver(entries => {
          console.log(entries)
          entries.forEach(entry => { 
            console.log("this section is active", activeLink)
            setActiveLink(entry.target)
            entry.target.classList.toggle("show", entry.isIntersecting)
          })
        },{
          threshold:0.3
        })
      
        // calling observe method 
        cards.forEach(card => {
          cardObserver.observe(card)
        })
        
        return ()=>{
          cards.forEach(card => {
            cardObserver.unobserve(card)
          })
        }
      }, 500);
  },[])


  return (
    <div className="flex flex-col bg-[#111111]">
      <Navbar activeLink ={activeLink} />
      <section  id="about" className="overflow-hidden">
        <HeroSection />
      </section >
      <section id="project" className="overflow-hidden">
        <ProjectsSection />
      </section>
      <section id="skills" className="overflow-hidden">
        <SkillsSectionTwo />
      </section>
      <section id="education"  className="overflow-hidden">
        <EducationSection />
      </section>
      <section id="contact" className="overflow-hidden">
        <ContactSection />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
