## Welcome 👋🏻

## Overview

Welcome to my personal portfolio website built using Next.js and Typescript. This project serves as a showcase for my skills, highlights my projects, and offers insights into my journey as a web developer.

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
      project.name === 'My Portfolio Website' ? 'border-gray-800 border' : ''
    } shadow-xl w-full h-auto hover:opacity-70 `}
  />
</Link>
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

## Author

- Website - [Murci2022/M.K.](https://portfolio-mate.vercel.app/)
