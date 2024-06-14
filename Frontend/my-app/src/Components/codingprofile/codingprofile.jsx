import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import CPItems from "./items";

const codingpInfo = [
    {
        key:1,
        imageurl:"",
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        key:2,
        imageurl:"",
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        key:3,
        imageurl:"",
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        key:4,
        imageurl:"",
        detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

function Codingprofile (){
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star} alt=""></img></div>
                <div className="text-white text-3xl mx-2 font-medium">CODING PROFILE</div>
                <div><img src={Star} alt=""></img></div>
            </div>
            <div className="mt-10 mx-40 flex flex-col">
                <div className="flex flex-row justify-center mb-4">
                    {codingpInfo.slice(0, 2).map((item) => (
                        <CPItems 
                            key={item.key} 
                            image={item.imageurl}
                            detail={item.detail}     
                            />
                    ))}
                </div>
                <div className="flex flex-row justify-center mt-4">
                    {codingpInfo.slice(2, 4).map((item) => (
                        <CPItems 
                            key={item.key} 
                            image={item.imageurl} 
                            detail={item.detail} 
                            />
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <img src={V2} alt=""></img>
            </div>
        </div>
    )
}
export default Codingprofile;

