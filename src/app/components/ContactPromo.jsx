import React from 'react'
import Image from 'next/image'

const ContactPromo = () => {
  return (
    <div className='bg-contactpromoBackground w-full h-auto bg-cover text-white p-7 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-start gap-20 lg:gap-[200px]'>
      <div className="lg:w-1/3 tracking-wider text-xl">Secure the future of your company with  <span className='font-semibold'>int+</span></div>
      <a href='#' className=' group flex gap-10 items-center justify-between px-4 py-4 rounded-full bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white w-[70px] h-[70px] overflow-hidden hover:w-[300px]  transition-all duration-300 ease-in-out'>

        <div className='w-[70px] h-[70px] flex items-center justify-center'>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
            className='transition-all duration-300 ease-in-out '
          />
        </div>

        <span className=" transition-all duration-300 ease-in-out hidden group-hover:flex leading-[70px]">Get in touch</span>

      </a>
    </div>
  )
}

export default ContactPromo