import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import WorkList from "./workslist";
import Post3 from "../images/Post3.png";
import Post1 from "../images/Post1.png";
import Post2 from "../images/Post2.png";
import Post4 from "../images/Post4.jpg";
import Grid1 from "../images/Grid1.png";
import Grid2 from "../images/Grid2.png";

const imageInfo = [
    {
        key:1,
        imageurl:Post3
    },
    {
        key:2,
        imageurl:Post1
    },
    {
        key:3,
        imageurl:Post2
    },
    {
        key:4,
        imageurl:Post4
    },
    {
        key:5,
        imageurl:Grid1
    },
    {
        key:6,
        imageurl:Grid2
    }
]

function Works (){
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star} alt=""></img></div>
                <div className="text-white text-3xl mx-2 font-medium">WORKS</div>
                <div><img src={Star} alt=""></img></div>
            </div>
            <div className="text-white italic font-extralight mt-6 text-base">"Where Creativity Meets Execution"</div>
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