import React from "react";

function WorkList({ image, onClick }) {
    return (
        <div
            className="w-[12.2rem] h-[12.2rem] mb-4 sm:mb-0 sm:w-[10.2rem] sm:h-[10.2rem] md:w-[14.2rem] md:h-[14.2rem] lg:w-[16.2rem] lg:h-[16.2rem] xl:w-[18.2rem] xl:h-[18.2rem] mx-2 bg-gradient-to-r from-[#559BD8] to-[#4933C2] flex justify-center items-center cursor-pointer"
            onClick={onClick}
        >
            <div className="w-48 h-48 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-[#101630]">
                <img src={image} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
}

export default WorkList;



