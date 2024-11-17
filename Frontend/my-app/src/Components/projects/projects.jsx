import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import ProjectList from "./projectlist";
import Portfolio from "../images/Portfolio.png";
import Work from "../images/Work.png";
import Meme from "./Meme.png";
import Drums from "./Drums.png";
import Simon from "./Simon.png";
import Ocean from "./ocean-route.png";
import { motion } from "framer-motion";

const proInfo = [
    {
        no: 1,
        title: "Portfolio",
        image: Portfolio,
        discription: "This is the portfolio website built with React.js and styled using Tailwind CSS, it reflects my proficiency in creating sleek, responsive, and user-friendly web applications. The website serves as a comprehensive showcase of my skills, projects, and experiences.",
        link: "https://github.com/maithilee24/Portfolio_Website",
    },
    {
        no: 2,
        title: "DesCo Club Website",
        image: Work,
        discription: "As a frontend developer for the Desco Club's official website, I contributed to showcasing the works and skills of our design-focused members. I developed the 'Get in Touch' section and the 'Works' page using React.js and Tailwind CSS, with Firebase for dynamic content management. This project allowed me to collaborate effectively with my team and enhance my skills in creating responsive, modern web applications.",
        link: "https://github.com/maithilee24/club-website",
    },
    {
        no: 3,
        title: "Meme-Response",
        image: Meme,
        discription: "This project is a fun and creative take on HTTP protocols, where each status code is humorously represented with a corresponding meme! This project delivers a lighthearted way to learn or laugh about HTTP responses. Built using Next.js for seamless performance and Tailwind CSS for clean and responsive styling, Meme-Response combines technology with humor to make the web a more enjoyable place. Perfect for developers and meme enthusiasts alike!",
        link: "https://github.com/maithilee24/meme_response",
    },
    {
        no: 4,
        title: "Ocean-Route",
        image: Ocean,
        discription: "Ocean-Route is an innovative web application that calculates and displays the optimal path between two ports, factoring in variables such as cost, weather conditions, and route safety. This project leverages the power of machine learning to determine the most efficient route and visualizes it using MapTiler for an interactive map-based experience.As a collaborative effort, my contribution focused on the frontend development, where I utilized Next.js and Tailwind CSS to create a seamless user interface for inputting port requests and displaying the model's response. The optimized route is dynamically rendered on the map, providing users with a clear and intuitive way to understand the suggested path.",
        link: "https://github.com/maithilee24/ocean-route-proto",
    },
    {
        no: 5,
        title: "Drum kit",
        image: Drums,
        discription: "Drum Kit is a fun and interactive project that lets users create rhythmic sounds using their keyboard. Each of the five drums is assigned a unique sound and a corresponding alphabet key, enabling users to compose their own beats and enjoy a playful drumming experience.Built with HTML,JavaScript and CSS,this project focuses on simplicity and creativity, making it easy for anyone to explore their musical side. ",
        link: "https://github.com/maithilee24/Drums",
    },
    {
        no: 6,
        title: "Simon Game",
        image: Simon,
        discription: "Simon Game is a memory-based interactive game that challenges players to replicate a sequence generated by the server. Starting with the letter A,players must press the buttons in the correct order as displayed by the game. With each correct input, the sequence grows longer, increasing the difficulty and testing the player's memory and reflexes.Built using HTML, CSS, and JavaScript, Simon Game delivers an engaging and entertaining experience.",
        link: "https://github.com/maithilee24/Simon_Game",
    },
    
];

function Projects() {
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            {/* Header Section with Framer Motion animation */}
            <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Animate to opacity 1
                transition={{ duration: 1 }} // Transition duration of 1 second
            >
                <div>
                    <img src={Star} alt="Star Icon" className="h-8 sm:h-auto" />
                </div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">
                    PROJECTS
                </div>
                <div>
                    <img src={Star} alt="Star Icon" className="h-8 sm:h-auto" />
                </div>
            </motion.div>

            {/* Project List Section with Framer Motion */}
            <motion.div
                className="mt-10 sm:mt-16 mx-10 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44"
                initial={{ opacity: 0, y: 50 }} // Start off-screen, slightly faded
                animate={{ opacity: 1, y: 0 }} // Slide into view and fade in
                transition={{ duration: 1, delay: 0.2 }} // Add slight delay
            >
                {proInfo.map((item) => (
                    <motion.div
                        key={item.no}
                        initial={{ opacity: 0, x: -50 }} // Slide from left
                        animate={{ opacity: 1, x: 0 }} // Slide into place
                        transition={{ duration: 0.5, delay: item.no * 0.1 }} // Stagger delay for each item
                    >
                        <ProjectList
                            no={item.no}
                            title={item.title}
                            image={item.image}
                            discription={item.discription}
                            link={item.link}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer Decoration with Framer Motion animation */}
            <motion.div
                initial={{ opacity: 0 }} // Fade in
                animate={{ opacity: 1 }} // Fade into view
                transition={{ duration: 1, delay: 0.5 }} // Delay to make it appear after project list
            >
                <img src={V2} alt="Decorative Icon" className="w-20 sm:w-auto" />
            </motion.div>
        </div>
    );
}

export default Projects;