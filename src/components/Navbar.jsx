import { motion } from "framer-motion";
import { NavLink, Link, useLocation} from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import avatar from "../assets/avatar.webp"
const Navbar = () => {

  const [shownavbar, setNavbar] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

    // condition will run when ever url changes 
    const location = useLocation()
  return (
    <>

      {/* Navbar */}
      <nav className="backdrop-blur-sm   text-gray-500 py-2 flex justify-between items-center px-5 lg:px-10 sticky top-0 z-[10]">
        {/* Left: Logo & Menu Button */}
        <div className="flex items-center gap-4">
          <GiHamburgerMenu
            className="lg:hidden text-gray-400 text-2xl cursor-pointer"
            onClick={() => setNavbar(true)}
          />
          <div className="text-start">
                <h1 className="text-gray-400 text-xl font-semibold">KARTHIKEYAN</h1>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-x-10">
          <NavLink to="/" className= {location.pathname === "/" ? "text-green-500" : "text-gray-500"}   onClick={()=>handleScroll("about")}>About Me</NavLink>
          <NavLink to="/skills" className={location.pathname === "/skills" ? "text-green-500" : "text-gray-500"} onClick={()=>handleScroll("skills")}>Skills</NavLink>
          <NavLink to="/project" className={location.pathname === "/project" ? "text-green-500" : "text-gray-500"}  onClick={()=>handleScroll("project")}>Projects</NavLink>
          <NavLink to="/contact" className={location.pathname === "/contact" ? "text-green-500" : "text-gray-500"} onClick={()=>handleScroll("contact")}>Contact</NavLink>
        </div>

        {/* Right: Icons & Profile */}
        <div className="flex items-center gap-5">
          <img src={avatar} alt="avatar" className="aspect-square h-14 border-2 rounded-full border-green-500" />
          {/* <Link to="/profile" className="text-white hidden lg:block">Profile</Link> */}
          <div className="animated_call_to_action_btn">
            <div>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {shownavbar && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-start pl-5 py-5 text-white z-50"
        >
          <button onClick={() => setNavbar(false)} className="self-end pr-5">
            <FaTimes className="text-3xl" />
          </button>
          <NavLink to="/" className="py-2" onClick={() => {handleScroll("about") ;setNavbar(false)} }>About Me</NavLink>
          <NavLink to="/skills" className="py-2" onClick={() => {handleScroll("skills"); setNavbar(false)} }>Skills</NavLink>
          <NavLink to="/projects" className="py-2" onClick={() => {handleScroll("project") ;setNavbar(false)}} >Projects</NavLink>
          <NavLink to="/education" className="py-2" onClick={() => {handleScroll("contact");setNavbar(false)} }>Education</NavLink>
          <NavLink to="/contact" className="py-2" onClick={() => {handleScroll("contact") ;setNavbar(false)} }>Contact</NavLink>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
