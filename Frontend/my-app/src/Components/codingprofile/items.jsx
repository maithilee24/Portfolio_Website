import React from "react";

function CPItems({image,detail}){
    return (
        <div className="flex flex-col justify-center items-center mb-6 mr-6">
            <div className="w-96 h-60 bg-[#D9D9D9] rounded-lg"><img src={image}></img></div>
            <div className="text-base text-white mt-4 font-light mx-28  text-center">{detail}</div>
        </div>
    )
}

export default CPItems;