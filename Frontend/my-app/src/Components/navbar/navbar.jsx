import React from "react";
import {Link,useLocation} from "react-router-dom";
import Logo from "./Logo.webp";

const Navbar=()=>{
    const location = useLocation();
    const linkStyles = "text-white text-base";
    const activeLinkStyles = "text-[#4EB8DC]";
    return <nav className="flex flex-row fixed z-30">
        <div className="ml-24">
            <img src={Logo} alt=""></img>
        </div>
        <div className="flex flex-row top text-white text-base font-light space-x-14 justify-end items-center ml-[40rem]">
            <Link to="/" className={`${linkStyles} ${location.pathname === "/" ? activeLinkStyles : ""}`} data-testid="testing">HOME</Link>
            <Link to="/aboutme" className={`${linkStyles} ${location.pathname === "/aboutme" ? activeLinkStyles : ""}`}>ABOUT ME</Link>
            <Link to="/projects" className={`${linkStyles} ${location.pathname === "/projects" ? activeLinkStyles : ""}`}>PROJECTS</Link>
            <Link to="/works" className={`${linkStyles} ${location.pathname === "/works" ? activeLinkStyles : ""}`}>WORKS</Link>
            <Link to="/contact" className={`${linkStyles} ${location.pathname === "/contact" ? activeLinkStyles : ""}`}>
                <div className="bg-gradient-to-r from-[#559BD8] to-[#4933C2] rounded-lg p-4 h-8 flex justify-center items-center">CONTACT</div>
            </Link>
        </div>
    </nav>
}

export default Navbar;