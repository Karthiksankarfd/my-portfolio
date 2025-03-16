import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCards from "./components/ProjectCards";
import ScrollingComponent from "./components/ScrollingComponent";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/heroSection";
import ProjectsSection from "./sections/projectsSection";
import SkillsSection from "./sections/SkillsSection";
import SkillsSectionTwo from "./sections/SkillsSectionTwo";

function App() {


  useEffect(()=>{
      setTimeout(() => {
        const cards = document.querySelectorAll(".project-card")
        console.log(cards)
       
        const cardObserver = new IntersectionObserver(entries => {
          console.log(entries)
          entries.forEach(entry => {
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
    <div className="flex flex-col bg-black">
      <Navbar/>
      <section  id="about" className="overflow-hidden">
        <HeroSection />
      </section >
      <section id="project" className="overflow-hidden">
        <ProjectsSection />
      </section>
      <section  id="skills" className="overflow-hidden">
        <SkillsSectionTwo />
      </section>
      <section id="education"  className="overflow-hidden">
        <EducationSection />
      </section>
      <section id="contact" className="overflow-hidden">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
