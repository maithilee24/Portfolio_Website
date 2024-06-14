import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import WorkList from "./workslist";

const imageInfo = [
    {
        key:1,
        imageurl:""
    },
    {
        key:2,
        imageurl:""
    },
    {
        key:3,
        imageurl:""
    },
    {
        key:4,
        imageurl:""
    },
    {
        key:5,
        imageurl:""
    },
    {
        key:6,
        imageurl:""
    }
]

function Works (){
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star} alt=""></img></div>
                <div className="text-white text-3xl mx-2 font-medium">PROJECTS</div>
                <div><img src={Star} alt=""></img></div>
            </div>
            <div className="text-white italic font-extralight mt-6 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="mt-10 mx-40 flex flex-col">
                <div className="flex flex-row justify-center mb-4">
                    {imageInfo.slice(0, 3).map((item) => (
                        <WorkList key={item.key} image={item.imageurl} />
                    ))}
                </div>
                <div className="flex flex-row justify-center mt-4">
                    {imageInfo.slice(3, 6).map((item) => (
                        <WorkList key={item.key} image={item.imageurl} />
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <img src={V2} alt=""></img>
            </div>
        </div>
    )
}
export default Works;