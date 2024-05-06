import React from 'react';
import Image from 'next/image';

const ContactPromo = () => {
  return (
    <div className='bg-contactpromoBackground animate-waves w-full h-auto bg-cover text-white p-7 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-start gap-20 lg:gap-[200px]' id="contact">
      <div className="lg:w-1/3 tracking-wider text-xl">Secure the future of your company with <strong>int+</strong></div>
      <a href='#' className='group flex transition duration-500 ease-in-out items-center gap-7 justify-center px-4 py-4 rounded-full bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white min-w-[50px] h-[50px]'>
        <span className='hidden group-hover:inline transition ease-in-out'>Get in touch</span>
        <Image
          src="/arrow.svg"
          alt=''
          width={25}
          height={15}
        />
      </a>
    </div>
  );
};

export default ContactPromo;
