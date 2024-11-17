import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
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
        detail:"Achieved a 1125 Rating on Codeforces: Newbie Level"
    },
    {
        key:2,
        link:"https://www.codechef.com/users/yaadvi_04",
        imageurl:CodeChef,
        detail:"CodeChef 2-Star Coder with a Rating of 1596"
    },
    {
        key:3,
        link:"https://leetcode.com/u/Maithilee_24/",
        imageurl:Leetcode,
        detail:"Achieved a 1682 Rating on LeetCode"
    },
    {
        key:4,
        link:"https://www.geeksforgeeks.org/user/pardhiaqwd9/",
        imageurl:GfG,
        detail:"Solved 131 questions on GeeksforGeeks"
    },
]

function Codingprofile () {
    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            {/* Title Section */}
            <div className="flex justify-center items-center">
                <div><img src={Star} alt="" className="h-8 sm:h-auto" /></div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">CODING PROFILE</div>
                <div><img src={Star} alt="" className="h-8 sm:h-auto" /></div>
            </div>

            {/* Fade-in Effect for the Content */}
            <motion.div
                className="mt-10 mx-40 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* First Row of Coding Profiles */}
                <div className="flex flex-col sm:flex-row justify-center mb-4 sm:space-x-20 md:space-x-28 lg:space-x-40">
                    {codingpInfo.slice(0, 2).map((item) => (
                        <motion.div
                            key={item.key}
                            className="cursor-pointer"
                            whileHover={{ scale: 1.05 }} // Hover effect to scale the items slightly
                            transition={{ duration: 0.3 }}
                        >
                            <CPItems 
                                link={item.link} 
                                image={item.imageurl} 
                                detail={item.detail}     
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Second Row of Coding Profiles */}
                <div className="flex flex-col sm:flex-row justify-center sm:space-x-20 md:space-x-28 lg:space-x-40">
                    {codingpInfo.slice(2, 4).map((item) => (
                        <motion.div
                            key={item.key}
                            className="cursor-pointer"
                            whileHover={{ scale: 1.05 }} // Hover effect to scale the items slightly
                            transition={{ duration: 0.3 }}
                        >
                            <CPItems 
                                link={item.link} 
                                image={item.imageurl} 
                                detail={item.detail} 
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Footer Section */}
            <div className="mt-0 sm:mt-6">
                <img src={V2} alt="" className="w-20 sm:w-auto" />
            </div>
        </div>
    );
}

export default Codingprofile;


