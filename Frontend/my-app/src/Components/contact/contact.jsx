import React from "react";
import V1 from "./v1.png";
import V2 from "./V2.png";
import Card from "./card";
import Star from "./Star.png"

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
                        <div className="text-white text-[0.95rem] font-light italic mr-16 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        <div className="flex flex-row">
                            <div></div>
                            <div className="flex flex-col">
                                <div className="text-white font-medium">MAIL ME</div>
                                <div className="text-white">maithilipardhi12gmail.com</div>
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
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3"></div>
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3"></div>
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3"></div>
                    <div className="bg-[#4933C2] w-16 h-16 rounded-xl mx-3"></div>
                </div>
                <div className="absolute z-0 top-0"><img src={V2} alt=""></img></div>
            </div>
        </div>
    )
}
export default Contact;
