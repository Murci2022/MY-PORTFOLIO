import React from 'react';
import Image from 'next/image';
import TechStack from './TechStack';

const AboutSection = () => {
  return (
    <section id='more'>
      <div className='  break-normal bg-stone-100  dark:bg-black text-gray-800 dark:text-gray-300 py-3 px-3 rounded-xl'>
        <div className='my-2 mx-4  md:pt-30 md:pb-30'>
          <div className='flex flex-col space-y-10 items-stretch justify-center align-top  md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
            <div className='md:w-1/2 mt-4 md:mt-0 dark:text-gray-500'>
              <h1 className='text-xl2 mb-6 md:text-left text-gray-400'>
                Hello there!
              </h1>
              <p>
                My name is
                <span className=' text-gray-400'>{' Mate Kamaras'}</span>. I'm a
                <span className=' text-gray-400'>{' Frontend Developer '}</span>
                who absolutely loves what I do: creating awesome digital
                experiences that blend
                <span className=' text-gray-400'>{' art'}</span>,
                <span className=' text-gray-400'>{' functionality'}</span>, and
                <span className=' text-gray-400'>
                  {' user-friendly design '}
                </span>
                is simply awesome.
              </p>
              <br />
              <p>
                <span className=' text-gray-400'>{'Thechnology, AI '}</span>
                and the
                <span className=' text-gray-400'>{' universe'}</span>, have an
                irresistible allure that captivates my mind. I find myself
                endlessly fascinated by the
                <span className=' text-gray-400'>
                  {' limitless potential '}
                </span>
                of artificial intelligence, the ever-evolving landscape of
                technology and the vast wonders of the cosmos.
              </p>
              <br />
              <p>
                <span className=' text-gray-400'>{'When '}</span>
                I'm
                <span className=' text-gray-400'>{' not coding'}</span>, you'll
                likely find me hitting the
                <span className=' text-gray-400'>{' gym'}</span>, dabbling in
                some
                <span className=' text-gray-400'>{' art'}</span>, jet-setting to
                new destinations, or diving headfirst into learning more
                <span className=' text-gray-400'>{' Japanese'}</span>. With
                everything I take on, I bring a mix of
                <span className=' text-gray-400'>{' creativity'}</span>,
                <span className=' text-gray-400'>{' technical skills '}</span>
                and a<span className=' text-gray-400'>{' passion for '}</span>
                making the <span className=' text-gray-400'>{' web '}</span> a
                more visually appealing and engaging place.
              </p>
              <br />
              <div className=' flex justify-between mt-6'>
                <div>
                  <ul className='list-none'>
                    <li className='flex items-center'>
                      <Image
                        src='/german.png'
                        alt='German Flag'
                        width={4}
                        height={4}
                        className='w-4 h-4 rounded-full mr-2'
                      />
                      <span className='font-bold'>{'german '}</span> - [fluent]
                    </li>
                    <br />
                    <li className='flex items-center'>
                      <Image
                        src='/english.png'
                        alt='English Flag'
                        width={4}
                        height={4}
                        className='w-4 h-4 rounded-full mr-2'
                      />
                      <span className='font-bold'>{'english'}</span> - [fluent]
                    </li>
                    <br />{' '}
                  </ul>
                </div>
                <div>
                  <ul className='list-none'>
                    <li className='flex items-center'>
                      <Image
                        src='/japanese.png'
                        alt='Japanese Flag'
                        width={4}
                        height={4}
                        className='w-4 h-4 rounded-full mr-2'
                      />
                      <span className='font-bold'>{'japanese'}</span> -
                      [conversational]
                    </li>
                    <br />
                    <li className='flex items-center'>
                      <Image
                        src='/hungarian.png'
                        alt='Hungarian Flag'
                        width={4}
                        height={4}
                        className='w-4 h-4 rounded-full mr-2'
                      />
                      <span className='font-bold'>{'hungarian'}</span> -
                      [mothertounge]
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
