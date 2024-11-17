import React, { useEffect } from 'react';
import Navbar from '../Components/navbar/navbar';
import Hero from '../Components/herosection/hero';
import Aboutme from '../Components/aboutme/aboutme';
import Education from '../Components/education/education';
import Projects from '../Components/projects/projects';
import Skills from '../Components/skills/skills';
import Works from '../Components/works/works';
import Codingprofile from '../Components/codingprofile/codingprofile';
import Contact from '../Components/contact/contact';

function HomePage() {
  useEffect(() => {
    // Smooth scroll function to handle anchor scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }, []);

  return (
    <main className="bg-[#101630] pt-6">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="codingprofile">
        <Codingprofile />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

export default HomePage;

