import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Logo from '../assets/logo2.JPG';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative'>
        <img src={Logo} alt='Logo' className='w-40 h-40 absolute top-0 left-0 mt-4 ml-4' />
        <p className='text-pink-600'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Alexander Cramer
        </h1>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Welcome to my website! It operates as my personal portfolio and helps to showcase some of
          my skills and personal projects. Please have a look around!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
