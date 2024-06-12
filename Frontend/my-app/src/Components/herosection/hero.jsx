import React from "react";
import V1 from "./V1.png";
import V2 from "./V2.webp"
const Hero=()=>{
    return (
        <div className="relative">
            <div className="z-0 absolute -top-[6rem] right-0 -left-6"><img src={V1} alt=""></img></div>
            <div className="z-20 flex flex-col">
                <div className="text-white absolute left-24 top-32 text-3xl">HELLO, I’m</div>
                <div className="flex flex-row absolute left-24 top-40 justify-center items-center">
                    <div className="text-white text-6xl font-bold">MAITHILEE PARDHI</div>
                    <div><img src={V2} alt=""></img></div>
                </div>
                <div className="text-white text-xl absolute left-24 top-60 italic font-light">Web Developer ,UI-UX Designer and Graphic Designer</div>
            </div>
        </div>
    )
}

export default Hero;