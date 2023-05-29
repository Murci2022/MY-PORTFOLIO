"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"
import { RxDoubleArrowDown } from "react-icons/rx"

const HeroSection = () => {
    /*border-4 border-solid border-white */
    return (
        <section id='home' className='md:mt-40  '>
            <div className='
            
            flex flex-col text-center items-center justify-center mt-20 py-16 md:flex-row md:space-x-4 md:text-left md:pt-35 sm:pt-10'  >

                {/* BLOCK A */}
                {/*   <div className='flex md:justify-center md:w-1/2 md:mt-2'>
                    <Image className='rounded-md w-auto h-auto' src="/Mate2.png" alt='headshot' width={300} height={300} priority />
                </div> */}
                {/* BLOCK B */}
                <div className='
               text-center md:w-3/5 md:mt-2 md:pl-4 justify-center border-r-2 border-solid border-red-500'>
                    <div className="my-1 animate-bounce  text-gray-800 dark:text-gray-500">
                        hello konnichiwa szia grüssgott moin,moin!
                    </div>
                    <div>
                        <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>
                            Mate Kamaras</h1>

                    </div>

                    <p className='text-lg mt-4 mb-6 md:tx-2xl'>{" "}
                        <span className='font-semibold text-gray-800 dark:text-gray-500'>
                            Junior Software Engineer
                        </span>
                        {" "} - based in Hamburg, Germany.
                    </p>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold mr-4 rounded-md px-6 py-3 bg-lblue shadow-xl hover:bg-hlblue active:ring-2 active:ring-blue-500 active:ring-offset-2 active:ring-offset-blue-500 cursor-pointer"

                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        My Projects
                    </Link>
                    <Link
                        to="techstack"
                        className="text-neutral-100 font-semibold rounded-md px-6 py-3 bg-lblue shadow-xl hover:bg-hlblue active:ring-2 active:ring-blue-500 active:ring-offset-2 active:ring-offset-blue-500 cursor-pointer"

                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Tech Stack
                    </Link>

                </div>
                <div className='flex md:justify-center md:w-1/2 md:mt-2'>
                    <Image className='rounded-md shadow-xl w-auto h-auto' src="/Mate2.png" alt='headshot' width={300} height={300} priority />
                </div>
            </div>
            <div className='flex flex-row justify-center  md:mt-40' >
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <RxDoubleArrowDown size={40} className="animate-bounce cursor-pointer mb-6" />

                </Link>

            </div>
        </section>
    )
}

export default HeroSection