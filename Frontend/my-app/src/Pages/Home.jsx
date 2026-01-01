import React from 'react';
import Navbar from '../Components/navbar/navbar';
import Hero from '../Components/herosection/hero';
import Aboutme from '../Components/aboutme/aboutme';
import Education from '../Components/education/education';
import Projects from '../Components/projects/projects';
import Skills from '../Components/skills/skills';
import Works from '../Components/works/works';
import Codingprofile from '../Components/codingprofile/codingprofile';
import Contact from '../Components/contact/contact';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <main className="bg-[#101630] pt-6">
      <Navbar />
      
      <motion.div 
        id="home"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        id="aboutme"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Aboutme />
      </motion.div>
      
      <motion.div
        id="education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Education />
      </motion.div>
      
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.div>
      
      <motion.div
        id="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.div>
      
      <motion.div
        id="works"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Works />
      </motion.div>
      
      <motion.div
        id="codingprofile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Codingprofile />
      </motion.div>
      
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </main>
  );
}
export default HomePage;
