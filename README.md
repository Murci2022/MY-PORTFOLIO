## Table of contents

- [Overview](#overview)
- [The challenge](#the-challange)
- [Links](#links)
- [Built with](#build-with)
- [What I learned](#what-i-learned-from-this-challange)
- [My favorite code](#my-favorite-code)
- [Continued development](#continued-development)
- [Acknowledgments](#continued-development)
- [Author](#author)

## Overview

Welcome to my personal portfolio website built using Next.js and Typescript. This project showcases skills, projects, and provides insights into my journey as a web developer.

## Welcome

## The Challange

Creating my own portfolio website using Next.js and TypeScript was an exciting challenge.The goal was to design a user-friendly and visually appealing platform with dark mode that not only highlights my projects and expertise but also provides visitors with an engaging experience.

Throughout the development process, I focused on implementing responsive design, optimizing performance, and ensuring seamless navigation. Incorporating TypeScript added an extra layer of type safety, enabling more robust and maintainable code.

## Screenshot

![preview for My-Portfolio-website](/public/Portfolio-website.png)

## Links

- Live Site URL:(https://portfolio-mate.vercel.app/)

## Build with

- Semantic HTML5 markup
- [Tailwind.css](https://tailwindcss.com/docs/guides/nextjs)
- Mobile-first workflow
- [Next.js](https://nextjs.org/docs)

## What I learned from this challange

Crafting my Portfolio Website with Next.js expanded my skills in responsive design, semantic HTML, Tailwind CSS, and optimizing for performance. This project honed my ability to create dynamic components and enhance user experience through smooth navigation and visually appealing layouts.

## My favorite code

```js
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
              <p className='text-lg leading-7 mb-3 '>{project.description}</p>
              <div className='flex justify-center md:block'>
                <Link
                  href={project.github}
                  target='_blank'
                  className='hover:-translate-y-1 transition-transform cursor-pointer flex items-center mt-8'
                >
                  <FaGithubSquare className='text-xl mr-2' />
                  <span text-lg>my code on Github</span>
                </Link>
                <div className=' flex  items-center ml-6 md:ml-0 mt-8'>
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
```

## Continued development

- Data Fetching: Enhancing data fetching techniques, working with APIs, and handling asynchronous programming.

- State Management: Improving state management in larger applications using solutions like Redux-Toolkit.

- Testing and Debugging: Exploring testing methodologies and effective debugging techniques for ensuring code quality and reliability.

## Usefull resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Typescript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Tailwind.css Documentation](https://tailwindcss.com/docs/guides/nextjs)
- [Learn Typescript](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)

## Acknowledgments

Thank you to Danny Adams!

### Author

- Website - [Murci2022/M.K.](https://portfolio-mate.vercel.app/)
