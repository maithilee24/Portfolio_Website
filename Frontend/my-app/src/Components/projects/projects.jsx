import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import ProjectList from "./projectlist";

const proInfo = [
    {
        key: 1,
        no: 1,
        title :"Portfolio",
        discription :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link : ""
    },
    {
        key: 2,
        no: 2,
        title :"Portfolio",
        discription :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link : ""
    },
    {
        key: 3,
        no: 3,
        title :"Portfolio",
        discription :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link : ""
    },
    {
        key: 4,
        no: 4,
        title :"Portfolio",
        discription :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link : ""
    }
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