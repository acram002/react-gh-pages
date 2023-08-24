import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold text-center border-b-4 border-pink-600 '>About</p>

          </div>
          <div>
            <p className='text-center'>
              I am currently completing my MS in Computer Science at Central Michigan University, where I also compete for the school's NCAA Division 1 wrestling team.
                I will graduate in spring 2025 and have already completed a BS in Commputer Science. I enjoy learning new technologies and applying them to practical projects.
                Thanks for visiting my website and feel free to reach out! </p>  
          </div>
        </div>
        </div>
        </div>
      
  );
};

export default About;