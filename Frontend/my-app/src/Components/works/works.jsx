import React, { useState } from "react";
import { motion } from "framer-motion";  // Import Framer Motion
import Star from "../assets/Star.png";
import V2 from "../assets/V2.png";
import WorkList from "./workslist";
import Post3 from "../images/Post3.png";
import Post1 from "../images/Post1.png";
import Post2 from "../images/Post2.png";
import Post4 from "../images/Post4.jpg";
import Grid1 from "../images/Grid1.png";
import Grid2 from "../images/Grid2.png";
import Modal from "./modal";

const imageInfo = [
    {
        key: 1,
        imageurl: Post3
    },
    {
        key: 2,
        imageurl: Post1
    },
    {
        key: 3,
        imageurl: Post2
    },
    {
        key: 4,
        imageurl: Post4
    },
    {
        key: 5,
        imageurl: Grid1
    },
    {
        key: 6,
        imageurl: Grid2
    }
];

function Works() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="flex flex-col mt-6 justify-center items-center">
            {/* Title Section */}
            <div className="flex justify-center items-center">
                <div><img src={Star} alt="" className="h-8 sm:h-auto" /></div>
                <div className="text-white text-xl sm:text-2xl lg:text-3xl mx-2 font-medium">WORKS</div>
                <div><img src={Star} alt="" className="h-8 sm:h-auto" /></div>
            </div>
            {/* Description */}
            <div className="text-white italic font-extralight mt-6 flex text-sm sm:text-base justify-center items-center">"Where Creativity Meets Execution"</div>
            
            {/* Image Grid Section with Framer Motion Animation */}
            <motion.div
                className="mt-10 lg:mx-36 xl:mx-40 flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col sm:flex-row justify-center sm:mb-4">
                    {imageInfo.slice(0, 3).map((item) => (
                        <motion.div
                            key={item.key}
                            className="cursor-pointer"
                            whileHover={{ scale: 1.1 }}  // Add hover animation to scale images
                            onClick={() => setSelectedImage(item.imageurl)}
                        >
                            <WorkList image={item.imageurl} />
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center sm:mt-4">
                    {imageInfo.slice(3, 6).map((item) => (
                        <motion.div
                            key={item.key}
                            className="cursor-pointer"
                            whileHover={{ scale: 1.1 }}  // Add hover animation to scale images
                            onClick={() => setSelectedImage(item.imageurl)}
                        >
                            <WorkList image={item.imageurl} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            
            {/* Footer Image */}
            <div className="mt-6">
                <img src={V2} alt="" className="w-20 sm:w-auto" />
            </div>
            
            {/* Modal for selected image with animation */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
                </motion.div>
            )}
        </div>
    );
}

export default Works;

