import React from "react";
import Star from "../assets/Star.png";
import List from "./list";
import V2 from "../assets/V2.png";

const eduInfo = [
    {
        key:1,
        year:2026,
        title:"National Institute of technology , Patna",
        specification:"B.Tech in Electronics and Communication Engineering",
        grade:"9.28/10 CGPA"
    },
    {
        key:2,
        year:2022,
        title:"Krishnamurari Katakwar High School and Jr. College,Sakoli",
        specification:"Board of Intermediate Education, Maharashtra",
        grade:"Percentage : 86"
    },
    {
        key:3,
        year:2020,
        title:"Maharishi Vidya Mandir,Bhandara",
        specification:"Board of Secondary Education",
        grade:"Percentage : 92"
    }
];

function Education(){
    return(
        <div className="flex flex-col mt-6 justify-center items-center">
            <div className="flex justify-center items-center">
                <div><img src={Star}></img></div>
                <div className="text-white text-3xl mx-2 font-medium">EDUCATION</div>
                <div><img src={Star}></img></div>
            </div>
            <div className="mt-10">
                {eduInfo.map((items) => (
                    <List 
                        key={items.key}
                        year={items.year}
                        title={items.title}
                        specification={items.specification}
                        grade={items.grade}
                    />
                ))}
            </div>
            <div>
                <img src={V2} alt=""></img>
            </div>
        </div>
    )
}
export default Education;