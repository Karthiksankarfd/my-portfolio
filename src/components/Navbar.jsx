import { motion } from "framer-motion";
import { NavLink, Link} from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import avatar from "../assets/avatar.webp"
const Navbar = () => {

  const [shownavbar, setNavbar] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // NavLink active styles
  const navlinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "400",
    textDecoration: "none",
    color: isActive ? "#34D399" : "white",
  });

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
          <NavLink to="/" style={navlinkStyle}   onClick={()=>handleScroll("about")}>About Me</NavLink>
          <NavLink to="/skills" style={navlinkStyle} onClick={()=>handleScroll("skill")}>Skills</NavLink>
          <NavLink to="/project" style={navlinkStyle}  onClick={()=>handleScroll("project")}>Projects</NavLink>
          <NavLink to="/contact" style={navlinkStyle} onClick={()=>handleScroll("contact")}>Contact</NavLink>
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
          <NavLink to="/men" className="py-2" onClick={() => {handleScroll("about") ;setNavbar(false)} }>About Me</NavLink>
          <NavLink to="/women" className="py-2" onClick={() => {handleScroll("skills"); setNavbar(false)} }>Skills</NavLink>
          <NavLink to="/kids" className="py-2" onClick={() => {handleScroll("project") ;setNavbar(false)}} >Projects</NavLink>
          <NavLink to="/myorder" className="py-2" onClick={() => {handleScroll("contact");setNavbar(false)} }>Education</NavLink>
          <NavLink to="/profile" className="py-2" onClick={() => {handleScroll("contact") ;setNavbar(false)} }>Contact</NavLink>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
