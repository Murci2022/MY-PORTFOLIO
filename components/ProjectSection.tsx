import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';

const projects = [
  /* ,FaGithubSquare BsGithub */
  {
    name: 'Matchbox Shopping Cart',
    description:
      'This Matchbox Shopping Cart App includes all the cool features redux toolkit has to offers, things like store, slice, reducers, action creators.',
    image: '/matchbox-shopping-cart.png',
    github: '#',
    link: '#',
    techstack: 'React Redux-Toolkit',
    hashtag: '#REDUX-TOOLKIT React',
  },
  {
    name: 'Password Generator',
    description:
      'An app that generates secure passwords and empower users with a variety of features and options.',
    image: '/Password-generator.png',
    github: '#',
    link: '#',
    techstack: 'Vanilla Javascript',
    hashtag: '#Vanilla_JS',
  },

  {
    name: 'Invoicify',
    description:
      'Invoicify is an easy solution, to create an invoices in a simple way and print it out, even from a mobil-device.',
    image: '/Invoicify.png',
    github: 'https://github.com/Murci2022/Invoicify-Capstone-Project',
    link: 'https://invoicify-capstone.vercel.app/',
    techstack: 'Next.js',
    hashtag: '#Next.js',
  },
  /*   {
    name: 'Pokèmon Cards',
    description:
      'Collectible Pokémon cards: Unleash the power of pocket monsters!',
    image: '/PokemonCards.png',
    github: 'https://github.com/Murci2022/Pokemon-Cards',
    link: 'https://api-powered-app-group-work.vercel.app/',
  }, */
];
/*  className='text-center font-bold text-4xl'*/
/* */

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
                  >
                    {' '}
                    <Image
                      src={project.image}
                      alt='imageOfProject'
                      width={1000}
                      height={1000}
                      className='rounded-xl shadow-xl w-full h-auto hover:opacity-70 '
                    />
                  </Link>
                </div>
                <div className='md:w-1/2 md:text-start'>
                  <h1 className='text-4xl my-6'>{project.name}</h1>
                  <h3>{project.techstack} project</h3>
                  <hr />
                  <br />
                  <p className='text-lg leading-7 mb-3 '>
                    {project.description}
                  </p>
                  <div className='flex justify-center md:block'>
                    <Link
                      href={project.github}
                      target='_blank'
                      className='hover:-translate-y-1 transition-transform cursor-pointer flex items-center mt-8'
                    >
                      <FaGithubSquare className='text-xl mr-2' />
                      <span text-lg>my code on Github</span>
                    </Link>

                    {/* <Link href={project.link} target='_blank' style={{ fontSize: "24px" }} ><HiLink />INVOICIFIER</Link> */}
                    {/*    <HiLink className='text-xl mr-2' /><span className='text-lg '>{project.hashtag}</span> */}
                    <Link
                      href='#'
                      target='_blank'
                      className='hover:-translate-y-1  transition-transform cursor-pointer flex  items-center ml-6 md:ml-0 mt-8'
                    >
                      <span className='text-lg '>{project.hashtag}</span>
                    </Link>
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
