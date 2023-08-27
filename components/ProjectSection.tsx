import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';

const projects = [
  {
    name: 'Matchbox Shopping Cart',
    description:
      'This Matchbox Shopping Cart App includes all the cool features that Redux Toolkit has to offer, such as store, slices, reducers, and action creators.',
    image: '/matchbox-shopping-cart.png',
    github: 'https://github.com/Murci2022/matchbox-shopping-cart',
    link: 'https://matchbox-shopping-cart.vercel.app/',
    techstack: 'React Redux-Toolkit',
    hashtag: '#REDUX-TOOLKIT',
  },
  {
    name: 'Password Generator',
    description:
      'An app that generates secure passwords and empowers the user with a variety of features and options.',
    image: '/password-generator.png',
    github: 'https://github.com/Murci2022/Password-generator',
    link: 'https://password-generator-xi-drab.vercel.app/',
    techstack: 'Vanilla Javascript',
    hashtag: '#Vanilla_JS',
  },

  {
    name: 'Invoicify',
    description:
      'Invoicify is an easy solution to create invoices in a simple way and print them out, even from a mobile device.',
    image: '/Invoicify.png',
    github: 'https://github.com/Murci2022/Invoicify-Capstone-Project',
    link: 'https://invoicify-capstone.vercel.app/',
    techstack: 'Next.js',
    hashtag: '#Next.js',
  },
  {
    name: 'My Portfolio Website',
    description:
      'This project showcases skills, projects, and provides insights into my journey as a web developer',
    image: '/Portfolio-website.png',
    github: 'https://github.com/Murci2022/PORTFOLIO_MATE',
    link: 'https://portfolio-mate.vercel.app/',
    techstack: 'Next.js, Typescript',
    hashtag: '#Typescript',
  },
];

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='  text-center break-normal md:py-30 dark:text-gray-300 '
    >
      <h1 className='text-center text-red-500 mb-6 font-bold text-2xl pt-20 pb-5'>
        - My Projects -
      </h1>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className='flex flex-col md:flex-row md:space-x-12 '>
                <div>
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={project.image}
                      alt='imageOfProject'
                      width={1000}
                      height={1000}
                      className={`rounded-xl ${
                        project.name === 'My Portfolio Website'
                          ? 'border-gray-800 border'
                          : ''
                      } shadow-xl w-full h-auto hover:opacity-70 `}
                    />
                  </Link>
                </div>
                <div className='md:w-1/2 md:text-start'>
                  <h1 className='text-4xl mt-6'>{project.name}</h1>
                  <hr className='hidden md:block dark:border-white border-black ' />
                  <h3 className='hidden md:block'>
                    {project.techstack} project
                  </h3>
                  <br />
                  <p className='text-lg leading-7 mb-3 dark:text-light '>
                    {project.description}
                  </p>
                  <div className='flex justify-center md:block'>
                    <Link
                      href={project.github}
                      target='_blank'
                      className='hover:-translate-y-1 transition-transform cursor-pointer flex items-center  md:mt-8'
                    >
                      <FaGithubSquare className='text-xl mr-2' />
                      <span text-lg>my code on Github</span>
                    </Link>
                    <div className=' flex  items-center ml-6 md:ml-0 md:mt-8'>
                      <span className='text-lg '>{project.hashtag}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
