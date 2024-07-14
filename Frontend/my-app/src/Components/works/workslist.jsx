import React from "react";

function WorkList({ image }) {
    return (
        <div className="w-[18.2rem] h-[18.2rem] mr-6 bg-gradient-to-r from-[#559BD8] to-[#4933C2] flex justify-center items-center">
            <div className="w-72 h-72 bg-[#101630]">
                <img src={image} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
}

export default WorkList;
