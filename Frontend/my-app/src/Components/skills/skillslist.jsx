import React from "react";

function SkillsList({title, onClick}){
    return(
        <div className="flex justify-center items-center mb-6 ">
                <div className="bg-[#4EB8DC] w-[14rem] h-8 rounded-[5rem] sm:w-[25rem] sm:h-14 sm:rounded-[5rem] lg:w-[30rem] lg:h-16 lg:rounded-[5rem] flex justify-center items-center text-[#101630] text-lg sm:text-xl font-medium" onClick={onClick}>
                    {title}
                </div>
        </div>
    )
}
export default SkillsList;