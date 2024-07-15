import React from "react";
import Arrow from "./Arrow.png";

function List({year,title,specification,grade}){
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-r from-[#559BD8] to-[#4933C2] h-8 w-8 rounded-[1rem] sm:h-10 sm:w-10 sm:rounded-[1.25rem] lg:h-14 lg:w-14 lg:rounded-[1.75rem] border-b-2 border-r-2 border-[#4EB8DC]"></div>
                <div className="my-4"><img src={Arrow} alt="" className="h-24 lg:h-auto"></img></div>
            </div>
            <div className="flex flex-col mt-6 ml-4 sm:mt-8 sm:ml-8 lg:mt-10 lg:ml-10">
                <div className="flex justify-center items-center text-[0.7rem] sm:text-base text-white bg-[#101630] border-[1px] border-[#4EB8DC] h-6 w-12 sm:h-8 sm:w-14 lg:h-10 lg:w-16 rounded-lg font-medium">{year}</div>
                <div className="flex flex-row mt-4 lg:mt-4">
                    <div className="flex flex-col">
                        <div className="text-white text-[0.75rem] sm:text-base lg:text-lg font-medium">{title}</div>
                        <div className="text-white text-[0.7rem] sm:text-base lg:text-lg font-light italic">{specification}</div>
                    </div>
                    <div className="text-white text-[0.7rem] sm:text-base lg:text-lg mx-2 sm:mx-10 lg:mx-20">{grade}</div>
                </div>
            </div>
        </div>
    )
}
export default List;