import React from "react";

function SkillsList({title, onClick}){
    return(
        <div className="flex justify-center items-center mb-6 ">
                <div className="bg-[#4EB8DC] w-[30rem] h-16 rounded-[5rem] flex justify-center items-center text-[#101630] text-xl font-medium" onClick={onClick}>
                    {title}
                </div>
        </div>
    )
}
export default SkillsList;