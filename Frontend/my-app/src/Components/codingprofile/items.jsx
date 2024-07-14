import React from "react";

function CPItems({image,detail,link}){
    return (
        <div className="flex flex-col justify-center items-center mb-6 mr-6">
            <div className="w-96 h-60 bg-[#D9D9D9] rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} className="object-cover w-full h-full" alt="Work Item" />
                </a></div>
            <div className="text-base text-white mt-4 font-light  text-center">{detail}</div>
        </div>
    )
}

export default CPItems;