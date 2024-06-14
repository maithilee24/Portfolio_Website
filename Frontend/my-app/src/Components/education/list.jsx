import React from "react";
import Arrow from "./Arrow.png";

function List({year,title,specification,grade}){
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-r from-[#559BD8] to-[#4933C2] h-14 w-14 rounded-[1.75rem] border-b-2 border-r-2 border-[#4EB8DC]"></div>
                <div className="my-4"><img src={Arrow} alt=""></img></div>
            </div>
            <div className="flex flex-col mt-10 ml-10">
                <div className="flex justify-center items-center text-white bg-[#101630] border-[1px] border-[#4EB8DC] h-10 w-16 rounded-lg font-medium">{year}</div>
                <div className="flex flex-row mt-4">
                    <div className="flex flex-col">
                        <div className="text-white font-medium">{title}</div>
                        <div className="text-white font-light italic">{specification}</div>
                    </div>
                    <div className="text-white mx-20">{grade}</div>
                </div>
            </div>
        </div>
    )
}
export default List;