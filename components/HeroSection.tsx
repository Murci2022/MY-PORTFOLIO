'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { RxDoubleArrowDown } from 'react-icons/rx';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='md:mt-30  '
    >
      <div
        className='
            
            flex flex-col text-center items-center justify-center mt-60 mb-80 md:mb-60 py-16 md:flex-row md:space-x-4 md:text-left md:pt-35 sm:pt-10'
      >
        <div
          className='
               text-center md:w-3/5 md:mt-2 md:pl-4 justify-center md:border-r-2 md:border-solid md:border-red-500'
        >
          <div className='my-1 animate-bounce  text-gray-800 dark:text-gray-500'>
            hello konnichiwa szia grüssgott moin,moin!
          </div>
          <div>
            <h1 className='font-bold text-6xl mt-6 lg:text-7xl md:mt-2'>
              Mate Kamaras
            </h1>
          </div>

          <p className='text-lg mt-4 mb-6 md:tx-2xl'>
            <span className='font-semibold text-gray-800 dark:text-gray-500'>
              Software Engineer
            </span>{' '}
            - based in Hamburg, Germany.
          </p>
          <div className='mt-6'>
            <Link
              to='projects'
              className='text-neutral-100 font-semibold mr-4 rounded-md px-4 py-2.5 lg:px-6 lg:py-3 bg-hlblue dark:bg-hlblue  border-2 border-hlblue dark:border-hlblue shadow-xl hover:bg-lblue hover:border-lblue dark:hover:bg-lblue dark:hover:border-lblue  active:ring-2 dark:active:ring-light dark:active:ring-offset-2 dark:active:ring-offset-light cursor-pointer'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              View Projects
            </Link>
            <Link
              to='techstack'
              className=' font-semibold rounded-md px-4 py-2.5 lg:px-6 lg:py-3 bg-none border-2 text-black dark:text-white border-black  dark:border dark:border-white shadow-xl hover:bg-black hover:dark:bg-white hover:dark:text-black hover:dark:border hover:dark:border-black hover:text-white active:ring-2 dark:active:ring-light active:ring-offset-2 active:ring-offset-light cursor-pointer'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Tech Stack
            </Link>
          </div>
        </div>
        <div className=' flex justify-center p-6  lg:p-2 md:w-1/2 md:mt-2'>
          <Image
            className='rounded-md shadow-xl w-300 h-auto hidden md:block'
            src='/MateKamaras.png'
            alt='headshot'
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
