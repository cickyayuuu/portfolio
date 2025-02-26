import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import {motion} from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className='navbar' 
      style={{
        backgroundColor: "white",
        boxShadow: "0 4px 6px -2px rgba(128, 128, 128, 0.2)"
      }}
    >
      <div className='nav'>
        <NavLink to='/' onClick={closeMenu}>
          <img src="./vickylogo.png" alt="logo" className='logo' />
        </NavLink> 
      </div>

      <div className='desktopmenu'>
        <NavLink 
          to='/projects' 
          end
          className={({ isActive }) => 
            `desktopmenuicon ${isActive ? 'active' : ''}`
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to='/contact' 
          end
          className={({ isActive }) => 
            `desktopmenuicon ${isActive ? 'active' : ''}`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Hamburger Icon */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Mobile Menu */}
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:50}} transition={{duration: 0.5, ease: "easeOut"}} className={`mobilemenu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink 
          className='mobilemenuicon' 
          to='/projects'
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink 
          className='mobilemenuicon' 
          to='/contact'
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </motion.div>
    </nav>
  );
}

export default Navbar;