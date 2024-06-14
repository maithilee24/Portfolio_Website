import React from 'react';
import '../index.css';
import Navbar from '../Components/navbar/navbar';
import Hero from '../Components/herosection/hero';
import Aboutme from '../Components/aboutme/aboutme';

function HomePage(){
    return (
        <main className="bg-[#101630] h-[600vh] pt-6">

        <Navbar />
        <Hero />
        <Aboutme />
        </main>
    )
};

export default HomePage;