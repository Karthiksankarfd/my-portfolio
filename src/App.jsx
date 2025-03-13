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

  return (
    <div className="flex flex-col">
      <Navbar/>
      <section  id="about">
        <HeroSection />
      </section >
      <section id="project">
        <ProjectsSection />
      </section>
      <section id="skill">
        <SkillsSectionTwo />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
