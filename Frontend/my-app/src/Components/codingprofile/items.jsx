import React from "react";

function CPItems({image,detail,link}){
    return (
        <div className="flex flex-col justify-center items-center mb-6 ">
            <div className="w-48 h-40 sm:w-[13rem] sm:h-44 md:w-[16rem] md:h-52 lg:w-80 lg:h-56 xl:w-96 xl:h-60 bg-[#D9D9D9] rounded-xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} className="object-cover w-full h-full rounded-lg" alt="Work Item" />
                </a></div>
            <div className="text-base text-white mt-4 font-light  text-center">{detail}</div>
        </div>
    )
}

export default CPItems;