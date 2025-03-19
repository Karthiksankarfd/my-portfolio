import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className='bg-white p-5'>
        <section className='w-[80%] mx-auto flex justify-center gap-5 flex-wrap'>
            <Link onClick={()=>handleScroll("about")} className='font-thin text-sm' to="/">About Me</Link>
            <Link onClick={()=>handleScroll("project")} className='font-thin text-sm' to="/projects">Projects</Link>
            <Link onClick={()=>handleScroll("skills")} className='font-thin text-sm' to="/skills">Skills</Link>
            <Link onClick={()=>handleScroll("education")} className='font-thin text-sm' to="/education">Education</Link>
            <Link onClick={()=>handleScroll("contact")} className='font-thin text-sm' to="/contact">Contact</Link>
        </section>
    </footer>
  )
}

export default Footer
