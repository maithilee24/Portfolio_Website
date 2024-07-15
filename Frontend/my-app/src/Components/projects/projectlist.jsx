import React from "react";
import Arrow from "../education/Arrow.png";
import { Link } from "react-router-dom";

function ProjectList({ no, title, discription, link,image }) {
    const isEven = no % 2 === 0;

    return (
        <div className="flex flex-row mb-12 sm:mb-28">
            {isEven ? (
                <>
                    <div className=" hidden relative sm:flex flex-col w-1/2 justify-center items-center">
                        <div className="bg-[#D9D9D9] absolute w-[60%] h-full rounded-xl z-20 top-0 left-10"><img src={image} alt="" className="object-cover w-full h-full rounded-xl"></img></div>
                        <div className="bg-[#101630] absolute border-[8px] border-[#4EB8DC] w-[60%] h-full rounded-xl z-0 left-0 -bottom-10"></div>
                    </div>
                    <div className="flex flex-col sm:w-1/2">
                        <div className="text-[#4EB8DC] text-[1.1rem] md:text-[1.3rem] lg:text-[1.7rem] mb-2">PROJECT {no}</div>
                        <div className="text-white text-[1.1rem] md:text-[1.3rem] lg:text-[1.7rem] font-medium mb-2">{title}</div>
                        <div className="text-white font-light text-[0.8rem] md:text-base lg:text-lg mb-7 sm:mb-10">{discription}</div>
                        <Link to={link}>
                            <div className="flex flex-row justify-center items-center relative">
                                <div className="text-white absolute left-0 text-base sm:text-lg">Github link</div>
                                <div className="absolute left-32 sm:left-40"><img src={Arrow} alt="" className="rotate-[90deg] h-16 sm:h-auto"></img></div>
                            </div>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col sm:w-1/2">
                        <div className="text-[#4EB8DC] text-[1.1rem] md:text-[1.3rem] lg:text-[1.7rem] mb-2">PROJECT {no}</div>
                        <div className="text-white text-[1.1rem] md:text-[1.3rem] lg:text-[1.7rem] font-medium mb-2">{title}</div>
                        <div className="text-white font-light text-[0.8rem] md:text-base lg:text-lg mb-7 sm:mb-10">{discription}</div>
                        <Link to={link}>
                            <div className="flex flex-row justify-center items-center relative">
                                <div className="text-white absolute left-0 text-base sm:text-lg">Github link</div>
                                <div className="absolute left-32 sm:left-40"><img src={Arrow} alt="" className="rotate-[90deg] h-16 sm:h-auto"></img></div>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden relative sm:flex flex-col w-1/2 justify-center items-center">
                        <div className="bg-[#D9D9D9] absolute w-[60%] h-full rounded-xl z-20 top-0 right-10"><img src={image} alt="" className="object-cover w-full h-full rounded-xl"></img></div>
                        <div className="bg-[#101630] absolute border-[8px] border-[#4EB8DC] w-[60%] h-full rounded-xl z-0 right-0 -bottom-10"></div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProjectList;
