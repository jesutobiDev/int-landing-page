import React from 'react';
import Image from 'next/image';

const Solutions = () => {
  return (
    <div className='relative w-full bg-cover text-white p-7 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-start gap-20 lg:gap-[200px] lg:h-[370px] min-h-[260px] leading-[47px]  font-normal'>
      <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover'>
        <source src="/solutions-video.mp4" type="video/mp4" />
        Your browser does not support the video tag...
      </video>
      <div className="lg:w-1/3 z-10 tracking-wider text-xl">Build your custom solutions with us. Dedicated to your goals and success.</div>
      <a href='#' className=' group flex gap-10 items-center justify-between px-4 py-4 rounded-full bg-opacity-20  backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md w-20 h-20 overflow-hidden hover:w-full hover:lg:w-[400px]  transition-all duration-500 ease-in-out z-10 bg-white'>
      <span className=" transition-all duration-500 ease-in-out hidden group-hover:inline leading-[70px] w-auto flex-1 text-transparent  opacity-0 group-hover:opacity-100 text-white ">Tell us about your project</span>
        <div className='w-20 h-20 flex items-center justify-center transition-all duration-300 ease-in-out '>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
      </a>
    </div>
  );
}

export default Solutions;
