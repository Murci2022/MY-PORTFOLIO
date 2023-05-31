import React from 'react'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";

const TechStack = () => {
    const skills = [
        {
            skill: "HTML",
            name: "mate",
            icon: <FaHtml5 className='text-white text-4xl m-2' />,
        },
        {
            skill: "CSS",
            name: "mate",
            icon: <FaCss3Alt className='text-white text-4xl m-2' />,
        },

    ];

    return (
        <section id="techstack" className="md:w-1/2">
            <h1 className="text-center text-xl2 font-bold mb-6 md:text-left">
                Tech-Stack!!
            </h1>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-wrap flex-row justify-center mb-10 md:justify-start">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="bg-lblue px-4 mr-3 mt-3 text-gray-500 rounded-full"
                        >
                            <div className="flex flex-col items-center">
                                {skill.icon}
                                <p className="text-white mb-2">{skill.skill}</p>
                            </div>
                        </div>


                    ))}
                </div>
                {/* Rest of the component */}
            </div>
        </section>
    );
};

export default TechStack;