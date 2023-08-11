'use client'; // this is a client component
import '../styles/globals.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },

  {
    label: 'more..',
    page: 'more',
  },
];

const NavBar = () => {
  const [initialRender, setInitialRender] = useState(false); // Set initialRender to false
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = initialRender
    ? 'dark'
    : theme === 'system'
    ? systemTheme
    : theme;

  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full  mx-auto  px-4 sm:px-20 fixed top-0 z-50 bg-light shadow dark:shadow-none dark:bg-dblue '>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            {currentTheme === 'dark' ? (
              <button
                onClick={() => setTheme('light')}
                className=' p-2 rounded-xl hover:translate-y-1 transition-transform'
              >
                {
                  <RiSunLine
                    style={{
                      color: 'white',
                    }}
                  />
                }
              </button>
            ) : (
              <button
                onClick={() => setTheme('dark')}
                className=' p-2 rounded-xl hover:translate-y-1 transition-transform'
              >
                {<RiMoonFill />}
              </button>
            )}

            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={`block lg:inline-block text-gray-800  hover:text-neutral-500 ${
                      activeLink === item.page
                        ? 'border-b-2 border-red-900'
                        : ''
                    }
                      
                     hover:border-b-2 hover:border-red-900 dark:text-gray-500 cursor-pointer`}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => {
                      setNavbar(!navbar);
                      setActiveLink(item.page);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
