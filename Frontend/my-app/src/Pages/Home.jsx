import React from 'react';
import '../index.css';
import Navbar from '../Components/navbar/navbar';
import Hero from '../Components/herosection/hero';
import Aboutme from '../Components/aboutme/aboutme';
import Education from '../Components/education/education';

function HomePage(){
    return (
        <main className="bg-[#101630] h-[600vh] pt-6">

        <Navbar />
        <Hero />
        <Aboutme />
        <Education />
        </main>
    )
};

export default HomePage;