import React from "react";
import V1 from "./V1.png";
import V2 from "../assets/V2.png";
import Profile from "./Profile.png";

const Aboutme = () => {
    return (
        <div className="flex flex-col mt-[30rem]">
            <div className="flex flex-row mx-24">
                <div className="relative w-1/2 flex justify-center items-center">
                    <div className="absolute -top-[5.5rem] right-24">
                        <img src={V1} alt="" />
                    </div>
                    <div className="bg-[#D9D9D9] absolute w-[55%] h-96 -top-16 rounded-xl z-20">
                        <img src={Profile} alt="" className="w-full h-full rounded-xl object-cover" />
                    </div>
                    <div className="bg-[#101630] absolute border-[8px] border-[#4EB8DC] w-[55%] h-96 rounded-xl z-0 right-[6.5rem] bottom-4"></div>
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="text-white text-3xl font-medium mb-4">ABOUT ME</div>
                    <div className="text-white text-lg font-light mb-4 mr-[100px]">
                        I’m Maithilee Pardhi, currently a third-year student at National Institute of Technology Patna, majoring in Electronics and Communication Engineering. My passion lies in design, web development, and problem-solving through competitive programming. I thrive on the creativity and technical challenges that these fields present, constantly seeking opportunities to learn and grow. Whether it’s crafting intuitive user interfaces, developing dynamic web applications, or tackling complex coding problems, I am always eager to take on new challenges and push my boundaries.
                    </div>
                    <a href="https://drive.google.com/drive/folders/1SQMC2Ph8AJDQLpg9kUhVE3aHWXwKESwD?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="bg-gradient-to-r from-[#559BD8] to-[#4933C2] rounded-lg p-4 h-14 w-32 flex justify-center items-center text-white font-medium">
                            RESUME
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                <img src={V2} alt="" />
            </div>
        </div>
    );
};

export default Aboutme;
