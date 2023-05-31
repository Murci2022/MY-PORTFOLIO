import React from 'react'
import Image from 'next/image'
import TechStack from './TechStack'




const AboutSection = () => {
    /* */
    return (
        <section id='about' className=' text-center break-normal bg-stone-100  dark:bg-black text-gray-800 dark:text-gray-400 py-3 px-3 rounded-xl'>
            {/* <div>
                 <h1 className='text-center font-bold text-xl text-red-500'>
                - About Me -</h1> 


                <hr className=' w-6 h-1 mx-auto my-4  border-0 rounded'></hr></div>*/}
            <div className='my-2 mx-4 pb-6 md:pt-30 md:pb-30'>


                <div className='flex flex-col space-y-10 items-stretch justify-center align-top  md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-xl2 font-bold mb-6 md:text-left'>Hello there!</h1>
                        <p> My name is{" "}
                            <span className='font-bold'>{"Mate Kamaras"}</span>, and I'm a{" "}
                            <span className='font-bold'>{"Frontend Developer "}</span>, who absolutely loves what I do. Creating awesome digital experiences that blend art, functionality, and user-friendly design is simply awesome{" "}




                        </p>
                        <br />
                        <p >
                            <span className='font-bold'>{" Thechnology  "}</span>,
                            <span className='font-bold'>{" AI "}</span>, and the
                            <span className='font-bold'>{" cosmos"}</span>,
                            have an irresistible allure (seductive charm) that captivates my mind.
                            I find myself endlessly fascinated by the vast wonders of the universe,
                            the <span className='font-bold'>{" limitless potential "}</span>,
                            of artificial intelligence,
                            and the ever-evolving landscape of technology.
                        </p>
                        <br />
                        <p>
                            When I'm not coding, you'll likely find me
                            hitting the gym, dabbling in some art,
                            jet-setting to new destinations, or diving headfirst into learning new languages.
                            With everything I take on, I bring a mix of creativity, technical skills, and a passion for making the web a more visually appealing and engaging place.

                        </p>
                        <br />
                        <div >
                            <ul className='list-none'>
                                <li className='flex'>
                                    <img src="/german.png" alt="German Flag" className="w-4 h-auto mr-2" />
                                    <span className='font-bold'>{"german "}</span> - [fluent]{" "}
                                    {" "}
                                </li>
                                <br />
                                <li className='flex'>
                                    <img src="/english.png" alt="English Flag" className="w-4 h-auto mr-2" />
                                    <span className='font-bold'>{"english"}</span> - [fluent]{" "}

                                </li>
                                <br />
                                <li className='flex text-center'>
                                    <img src="/japanese.png" alt="Japanese Flag" className="w-4 h-auto mr-2" />
                                    <span className='font-bold'>{"japanese"}</span> - [conversational]
                                    {" "}
                                </li>
                                <br />
                                <li className='flex'>
                                    <img src="/hungarian.png" alt="Hungarian Flag" className="w-4 h-auto mr-2" />
                                    <span className='font-bold'>{"hungarian"}</span> - [mothertounge]
                                    {" "}
                                </li>
                                <br />

                            </ul>

                        </div>






                    </div>
                    <TechStack />

                    {/*  <section id="techstack" className='  md:w-1/2 '>
                        <h1 className='text-center text-xl2 font-bold mb-6 md:text-left'>Tech-Stack</h1>
                        <div className='flex flex-col justify-between h-full'>


                            <div className='flex flex-wrap flex-row justify-center mb-10 md:justify-start'>
                                {skills.map((skill, idx) => {
                                    return <p key={idx} className='bg-lblue px-4 py-2 mr-2 mt-2 rounded-sm text-white  font-semibold  '>{skill.skill}</p>
                                })}
                            </div>



                            <div className=' flex justify-center items-end '>

                                <Image src="/Telesc.png" alt='Telescope' height={400} width={400} className='hidden w-400 h-400  mb-10 md:float-right md:block' />
                            </div>
                        </div>
                    </section> */}
                </div>
            </div>
        </section >
    )
}

export default AboutSection

