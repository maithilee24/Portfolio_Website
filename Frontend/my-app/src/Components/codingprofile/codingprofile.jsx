import React from "react";
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import CPItems from "./items";
import CodeChef from "../images/CodeChef.png";
import Codeforces from "../images/Codeforces.png";
import Leetcode from "../images/Leetcode.png";
import GfG from "../images/GfG.png";

const codingpInfo = [
    {
        key:1,
        link:"https://codeforces.com/profile/Maithilee_Pardhi",
        imageurl:Codeforces,
        detail:"Achieved a 1099 Rating on Codeforces: Newbie Level"
    },
    {
        key:2,
        link:"https://www.codechef.com/users/yaadvi_04",
        imageurl:CodeChef,
        detail:"CodeChef 2-Star Coder with a Rating of 1404"
    },
    {
        key:3,
        link:"https://leetcode.com/u/Maithilee_24/",
        imageurl:Leetcode,
        detail:""
    },
    {
        key:4,
        link:"https://www.geeksforgeeks.org/user/pardhiaqwd9/",
        imageurl:GfG,
        detail:""
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
                <div className="flex flex-row justify-center mb-4 space-x-40">
                    {codingpInfo.slice(0, 2).map((item) => (
                        <CPItems 
                            key={item.key} 
                            link={item.link}
                            image={item.imageurl}
                            detail={item.detail}     
                            />
                    ))}
                </div>
                <div className="flex flex-row justify-center mt-4 space-x-40">
                    {codingpInfo.slice(2, 4).map((item) => (
                        <CPItems 
                            key={item.key}
                            link={item.link} 
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

