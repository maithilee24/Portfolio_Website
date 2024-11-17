import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo.webp";

const Navbar = () => {
    const location = useLocation();
    const linkStyles = "text-white sm:text-[0.8rem] lg:text-sm xl:text-base";
    const activeLinkStyles = "text-[#4EB8DC]";

    return (
        <nav className="flex flex-row z-30">
            <div className="ml-10 w-10 sm:w-auto sm:ml-24">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="hidden sm:flex flex-row text-white text-base font-light sm:space-x-4 md:space-x-7 lg:space-x-8 xl:space-x-14 justify-end items-center sm:ml-[16%] md:ml-[25%] lg:ml-[35%] xl:ml-[40%]">
                <Link
                    to="#home"
                    className={`${linkStyles} ${location.pathname === "/" ? activeLinkStyles : ""}`}
                >
                    HOME
                </Link>
                <Link
                    to="#aboutme"
                    className={`${linkStyles} ${location.pathname === "/aboutme" ? activeLinkStyles : ""}`}
                >
                    ABOUT ME
                </Link>
                <Link
                    to="#projects"
                    className={`${linkStyles} ${location.pathname === "/projects" ? activeLinkStyles : ""}`}
                >
                    PROJECTS
                </Link>
                <Link
                    to="#works"
                    className={`${linkStyles} ${location.pathname === "/works" ? activeLinkStyles : ""}`}
                >
                    WORKS
                </Link>
                <Link
                    to="#contact"
                    className={`${linkStyles} ${location.pathname === "/contact" ? activeLinkStyles : ""}`}
                >
                    <div className="bg-gradient-to-r from-[#559BD8] to-[#4933C2] rounded-lg p-4 h-8 flex justify-center items-center">CONTACT</div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;


