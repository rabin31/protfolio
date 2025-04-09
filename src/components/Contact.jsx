import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
    data-scroll 
      data-scroll-section 
      data-scroll-speed="-.3" className='w-full lg:h-[50vw] mt-10 h-[80vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <div className='flex pt-16 justify-center'>
        <h1 className='text-[10vw] font-bold uppercase leading-none text-center'>
          READY <br /> TO START<br /> THE PROJECT?
        </h1>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between gap-4 px-8 py-5 bg-zinc-900 mt-10 rounded-full text-white uppercase text-base hover:bg-zinc-800 transition-all duration-300"
        >
          Start The Project
          <div className='h-3 w-3 bg-white rounded-full'></div>
        </button>
      </div>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-100 mt-20 flex justify-center items-center'>
          <div className='bg-[#CDEA68] p-6 rounded-xl shadow-lg w-[90%] max-w-md relative'>
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 text-zinc-900 text-2xl'
            >
              <FaTimes />
            </button>
            <h2 className='text-zinc-900 text-2xl font-bold text-center mb-4'>Start Your Project</h2>
            <form className='flex flex-col gap-4'>
              <input type='text' placeholder='Your Name' className='p-3 border border-zinc-900 rounded-lg' />
              <input type='email' placeholder='Your Email' className='p-3 border border-zinc-900 rounded-lg' />
              <input type='text' placeholder='Service Needed' className='p-3 border border-zinc-900 rounded-lg' />
              <textarea placeholder='Your Message' className='p-3 border border-zinc-900 rounded-lg h-24'></textarea>
              <button className='bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-800 transition-all duration-300'>Send</button>
            </form>
          </div>
        </div>
      )}
      <div className='flex justify-between items-center pt-5 p-10'>
        <h1 className='hover:underline cursor-pointer'>Website by Rabin</h1>
        <p className='hover:underline cursor-pointer'>© Rabin Thapa 2025. Legal Terms</p>
      </div>
    </div>
  );
};

export default Contact;