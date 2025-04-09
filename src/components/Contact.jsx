import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full mt-10 h-[90vw] md:h-[70vw] lg:h-[50vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black flex flex-col justify-between"
    >
      <div className="pt-14 px-4 sm:px-10 text-center">
        <h1 className="text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[7vw] font-bold uppercase leading-none">
          READY <br /> TO START <br /> THE PROJECT?
        </h1>
      </div>

      <div className="flex justify-center mt-10 px-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between gap-4 px-6 sm:px-8 py-4 sm:py-5 bg-zinc-900 rounded-full text-white uppercase text-sm sm:text-base hover:bg-zinc-800 transition-all duration-300"
        >
          Start The Project
          <div className="h-3 w-3 bg-white rounded-full"></div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center px-4">
          <div className="bg-[#CDEA68] p-5 sm:p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-900 text-2xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-zinc-900 text-xl sm:text-2xl font-bold text-center mb-4">
              Start Your Project
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-zinc-900 rounded-lg text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-zinc-900 rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Service Needed"
                className="p-3 border border-zinc-900 rounded-lg text-sm"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-zinc-900 rounded-lg h-24 text-sm resize-none"
              ></textarea>
              <button className="bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-800 transition-all duration-300 text-sm font-semibold">
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center text-white lg:text-black pt-30 lg:pt-10 px-6 sm:px-10 text-sm sm:text-base space-y-2 sm:space-y-0 pb-6">
        <h1 className="hover:underline cursor-pointer text-center sm:text-left">Website by Rabin</h1>
        <p className="hover:underline cursor-pointer text-center sm:text-right">
          © Rabin Thapa 2025. Legal Terms
        </p>
      </div>
    </div>
  );
};

export default Contact;
