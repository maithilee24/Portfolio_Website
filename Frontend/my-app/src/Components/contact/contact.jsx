import React from "react";
import V1 from "./v1.png";
import V2 from "./V2.png";
import Card from "./card";
import Star from "./Star.png";
import Instagram from "../images/Instagram.png";
import Github from "../images/Github.png";
import Discord from "../images/Discord.png";
import Linkedln from "../images/Linkedln.png";

function Contact(){
    return (
        <div className="flex flex-col mt-8 bg-gradient-to-r from-[#4A39C3] to-[#509AD7] h-[100vh] rounded-t-[12rem]">
            <div className="flex justify-center items-center mt-10">
                <div><img src={Star} alt=""></img></div>
                <div className="text-white text-3xl mx-2 font-medium">CONATCT</div>
                <div><img src={Star} alt=""></img></div>
            </div>
            <div className="flex flex-row mx-40 mt-20">
                <div className="flex flex-col w-1/2">
                        <div className="text-white text-3xl font-medium mb-3">DON'T BE SHY!</div>
                        <div className="text-white text-[0.95rem] font-light italic mr-16 mb-3">"Let's make something great together! Contact me for collaborations, freelance opportunities, or any inquiries about my work. I'm looking forward to hearing from you."</div>
                        <div className="flex flex-row">
                            <div></div>
                            <div className="flex flex-col">
                                <div className="text-white font-medium">MAIL ME</div>
                                <div className="text-white">maithilee948@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div></div>
                            <div className="flex flex-col">
                                <div className="text-white font-medium">CALL ME</div>
                                <div className="text-white">8805001960</div>
                            </div>
                        </div>
                </div>
                <div className="flex flex-row w-1/2 justify-center items-center relative">
                        <div className="absolute -top-14 left-6 z-30"><img src={V1} alt=""></img></div>
                        <div className="w-[28rem] h-[20rem] z-20">
                            <Card />
                        </div>
                </div>
            </div>
            <div className="flex flex-col relative">
                <div className="flex flex-row z-20 absolute left-40 top-10">
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3">
                    <a href="https://www.linkedin.com/in/maithilee-pardhi-2a6947256" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedln} className="object-cover w-full h-full rounded-xl px-3 py-3"></img></a>
                    </div>
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3">
                    <a href="https://github.com/maithilee24" target="_blank" rel="noopener noreferrer">
                    <img src={Github} className="object-cover w-full h-full rounded-xl bg-[#4933C2] px-3 py-3"></img></a>
                    </div>
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3">
                    <a href="https://discord.com/channels/maithilee_pardhi" target="_blank" rel="noopener noreferrer">
                    <img src={Discord} className="object-cover w-full h-full rounded-xl px-3 py-3"></img></a>
                    </div>
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3">
                    <a href="https://www.instagram.com/maithilee_pardhi?igsh=Z3NndnhtM3hqMHU5" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} className="object-cover w-full h-full rounded-xl px-3 py-3"></img></a>
                    </div>
                </div>
                <div className="absolute z-0 top-0"><img src={V2} alt=""></img></div>
            </div>
        </div>
    )
}
export default Contact;
