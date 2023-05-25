"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    /*border-4 border-solid border-black */
    return (
        <section id='home' className='md:my-40 '>
            <div className='flex flex-col text-center items-center justify-center mt-20 py-16 md:flex-row md:space-x-4 md:text-left md:pt-35 sm:pt-10'  >
                <div className='flex md:justify-center md:w-1/2 md:mt-2'>
                    <Image className='rounded-full w-auto h-auto' src="/Mate.png" alt='headshot' width={300} height={300} priority />
                </div>
                <div className='md:w-3/5 md:mt-2 md:pl-2 '>
                    <div className="my-1 animate-bounce">
                        hello konnichiwa szia grüssgott moin,moin!
                    </div>

                    <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>I'm Mate</h1>
                    <p className='text-lg mt-4 mb-6 md:tx-2xl'>a{" "}
                        <span className='font-semibold text-teal-600'>
                            Junior Software Engineer
                        </span>
                        {" "}based in Hamburg, Germany. <br />I love creating awesome digital experiences that blend art, functionality, and user-friendly design.
                    </p>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>

                </div>
            </div>
            <div className='flex flex-row justify-center  md:mt-40'>
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={40} className="animate-bounce" />
                </Link>

            </div>
        </section>
    )
}

export default HeroSection