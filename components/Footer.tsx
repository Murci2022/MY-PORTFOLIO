import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='mx-auto /* max-w-3xl */  px-4 sm:px-6 md:max-w-6xl'>
      <hr
        className='w-full h-0.5 mx-auto mt-8 dark:border-white border-black border
        dark:bg-neutral-200'
      />
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className=' flex flex-row items-center justify-center space-x-1 text-black dark:text-neutral-100'>
          <a>@Murci2023</a>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1 dark:text-white'>
          <a
            href='https://github.com/Murci2022'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineGithub
              className='hover:translate-y-1 transition-transform cursor-pointer'
              size={26}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/matheos-k-0461b0243/'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineLinkedin
              className='hover:translate-y-1 transition-transform cursor-pointer'
              size={26}
            />
          </a>

          <a
            href='#'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineYoutube
              className='hover:translate-y-1 transition-transform cursor-pointer'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
