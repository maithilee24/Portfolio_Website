import React from 'react';
import '../index.css';
import Navbar from '../Components/navbar/navbar';
import Hero from '../Components/herosection/hero';
import Aboutme from '../Components/aboutme/aboutme';
import Education from '../Components/education/education';
import Projects from '../Components/projects/projects';
import Skills from '../Components/skills/skills';
import Works from '../Components/works/works';
import Codingprofile from '../Components/codingprofile/codingprofile';
import Contact from '../Components/contact/contact';

function HomePage(){
    return (
        <main className="bg-[#101630] h-[850vh] pt-6">

        <Navbar />
        <Hero />
        <Aboutme />
        <Education />
        <Projects />
        <Skills />
        <Works />
        <Codingprofile />
        <Contact />
        </main>
    )
};

export default HomePage;