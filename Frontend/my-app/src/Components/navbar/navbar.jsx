import React from "react";
import { Link } from "react-scroll";
import Logo from "./Logo.webp";

const Navbar = () => {
    const linkStyles = "text-white text-base cursor-pointer";
    const activeLinkStyles = "text-[#4EB8DC]";
    return (
        <nav className="flex flex-row z-30">
            <div className="ml-24">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="flex flex-row top text-white text-base font-light space-x-14 justify-end items-center ml-[40rem]">
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={linkStyles}
                    activeClass={activeLinkStyles}
                >
                    HOME
                </Link>
                <Link
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={linkStyles}
                    activeClass={activeLinkStyles}
                >
                    ABOUT ME
                </Link>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={linkStyles}
                    activeClass={activeLinkStyles}
                >
                    PROJECTS
                </Link>
                <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={linkStyles}
                    activeClass={activeLinkStyles}
                >
                    WORKS
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`${linkStyles} bg-gradient-to-r from-[#559BD8] to-[#4933C2] rounded-lg p-4 h-8 flex justify-center items-center`}
                    activeClass={activeLinkStyles}
                >
                    CONTACT
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
