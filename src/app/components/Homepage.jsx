'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Calistoga } from 'next/font/google';

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-calistoga',
});

const Homepage = () => {

  const [navClicked, setNavClicked] = useState(false);

  const toggleNavClicked = () => {
    setNavClicked(!navClicked);
  };


  return (
    <div className='min-h-[600px] w-screen bg-homepageBackground bg-cover p-7 lg:px-20 lg:py-10 relative'>
      <nav className='flex justify-between items-center mb-16'>
        <div className='flex gap-1 items-center'>
          <div
            className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}
          >
            <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
          </div>
          <p className='text-white text-lg'>Technology</p>
        </div>
        <Image
          className={`lg:hidden ${navClicked ? 'hidden' : ''}`}
          src="/nav icon.svg"
          alt=''
          width={25}
          height={15}
          onClick={toggleNavClicked}
        />
        <div className={`lg:flex lg:items-center lg:w-auto fixed top-0 left-0  bg-white lg:bg-transparent w-screen p-7 transition-all duration-500 ease z-50 ${navClicked ? 'h-screen' : 'hidden h-0'}`}>
        <Image
          className="lg:hidden ml-auto"
          src="/times icon.svg"
          alt=''
          width={25}
          height={15}
          onClick={toggleNavClicked}
        />
          <ul className='font-normal text-2xl lg:text-lg flex flex-col lg:flex-row lg:justify-between lg:text-white gap-10 mt-10'>
            <li>
              <a href="#" className=''>Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='w-full h-auto flex flex-col gap-10'>
        <h1 className='text-white text-4xl lg:text-6xl font-medium w-[40%] tracking-wider lg:leading-[70px]'>Implementing Software Solutions</h1>
        <div className='flex flex-col gap-4'>
          <p className="text-white text-lg font-light tracking-wider">Innovating Tomorrow{'\''}s Solutions, Today.</p>
          <div className="flex gap-2 items-center">
            <div className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}>
              <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
            </div>
            <p className='text-white text-lg font-light tracking-wide'>– Your Trusted IT Partner</p>
          </div>
        </div>
        <a href='#contact' className='flex w-fit px-4 py-2 rounded-full bg-opacity-5 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white gap-4 outline-none group relative'>
          <p className='text-lg font-light'>Get Started</p>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </a>
      </div>

    </div>
  );
};

export default Homepage;
