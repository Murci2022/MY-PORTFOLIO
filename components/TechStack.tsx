import React from 'react'
import Image from 'next/image'

const TechStack = () => {

    const skills = [
        { skill: "HTML" },
        { skill: "CSS" },
        { skill: "Javascript" },
        { skill: " Typescript" },
        { skill: "React" },
        { skill: "Next.js" },
        { skill: "Tailwind" },
        { skill: "Git" },
        { skill: "GitHub" },
        { skill: "RTK-Query" },

    ]

    return (<>

        {/* {<section id="techstack" className=' md:w-1/2 '>
            <h1 className='text-center text-xl2 font-bold mb-6 md:text-left'>Tech-Stack</h1>
            <div className='flex flex-col justify-between h-full'>


                <div className='flex flex-wrap flex-row justify-center mb-10 md:justify-start'>
                    {skills.map((skill, idx) => {
                        return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold  '>{skill.skill}</p>
                    })}
                </div>



                <div className=' flex justify-center items-end '>

                    <Image src="/Telesc.png" alt='Telescope' height={400} width={400} className='hidden w-400 h-400  mb-10 md:float-right md:block' />
                </div>
            </div>
        </section>  */}
    </>)
}

export default TechStack