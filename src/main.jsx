import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from "motion/react";
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import { ToastContainer } from 'react-toastify';
import './index.css';

const Main = () => {
  const { scrollYProgress } = useScroll();

  return (
    <BrowserRouter>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          backgroundColor: "#8860d0",
          width: "100%",
          height: "5px",
          position: "fixed",
          top: "0",
          left: "0",
          transformOrigin: "left",
          scaleX: scrollYProgress,
          zIndex: 1000,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Navbar & Routes */}
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render the app
createRoot(document.getElementById('root')).render(<Main />);
