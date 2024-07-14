import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import ProjectList from "./projectlist";
import Portfolio from "../images/Portfolio.png";
import Work from "../images/Work.png";

const proInfo = [
    {
        key: 1,
        no: 1,
        title :"Portfolio",
        image:Portfolio,
        discription :"This is the portfolio website built with React.js and styled using Tailwind CSS, it reflects my proficiency in creating sleek, responsive, and user-friendly web applications. The website serves as a comprehensive showcase of my skills, projects, and experiences.",
        link : "https://github.com/maithilee24/Portfolio_Website"
    },
    {
        key: 2,
        no: 2,
        image:Work,
        title :"DesCo Club Website",
        discription :"As a frontend developer for the Desco Club's official website, I contributed to showcasing the works and skills of our design-focused members. I developed the 'Get in Touch' section and the 'Works' page using React.js and Tailwind CSS, with Firebase for dynamic content management. This project allowed me to collaborate effectively with my team and enhance my skills in creating responsive, modern web applications.",
        link : "https://github.com/maithilee24/club-website"
    },
];

function Projects (){
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star} alt=""></img></div>
                <div className="text-white text-3xl mx-2 font-medium">PROJECTS</div>
                <div><img src={Star} alt=""></img></div>
            </div>
            <div className="mt-16 mx-52">
                {proInfo.map((items) => (
                    <ProjectList
                        key={items.key}
                        title={items.title}
                        no={items.no}
                        image={items.image}
                        discription={items.discription}
                        link={items.link}
                    />
                ))}
            </div>
            <div>
                <img src={V2} alt=""></img>
            </div>
        </div>
    )
}
export default Projects;