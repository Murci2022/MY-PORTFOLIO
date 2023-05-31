import React from 'react'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";

import { RiMoonFill } from "react-icons/ri";

const TechStack = () => {
    const skills = [
        {
            skill: "HTML",
            icon: <FaHtml5 className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "CSS",
            icon: <FaCss3Alt className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "Javascript",
            icon: <TbBrandJavascript className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "React",
            icon: <FaReact className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "Nextjs",
            icon: <TbBrandNextjs className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "Git",
            icon: <AiOutlineGithub className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "MongoDB",
            icon: <SiMongodb className='text-black  dark:text-white text-6xl m-2' />,
        },
        {
            skill: "Typescript",
            icon: <TbBrandTypescript className='text-black  dark:text-white text-6xl m-2' />,
        },

    ];
    /* */

    return (
        <section id="techstack" className="md:w-1/2  p-4 ">
            <h1 className=" text-black dark:text-white text-center text-2xl font-bold mb-2 md:text-center">
                Tech-Stack
            </h1>

            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-wrap flex-row justify-center mb-10 ">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="mr-3 mt-3 text-gray-500">
                            <div className="flex group flex-col items-center h-16 overflow-hidden">
                                {skill.icon}
                                <p className=" dark:text-white hidden group-hover:flex text-sm">{skill.skill}</p>
                            </div>
                        </div>



                    ))}
                </div>
                <div className='flex justify-end '>

                    <Image src="/Telesc.png" alt='Telescope' height={400} width={400} className='hidden w-400 h-400  mb-10 md:float-right md:block' />
                </div>
            </div>
        </section >
    );
};

export default TechStack;