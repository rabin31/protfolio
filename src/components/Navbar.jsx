import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false); // still used for mobile

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:raveenthpa@gmail.com';
  };

  return (
    <div className='fixed z-[999] w-full px-4 sm:px-10 lg:px-20 py-6 sm:py-8 font-["Neue Montreal"] bg-zinc-900/80 backdrop-blur-md'>
      <div className='flex justify-between items-center'>
        <div className='logo w-20 sm:w-[72px] cursor-pointer' onClick={handleLogoClick}>
          <svg width="77" height="35" viewBox="0 0 174 90" xmlns="http://www.w3.org/2000/svg">
            <text x="20" y="65" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white">Ra.</text>
          </svg>
        </div>

        <div className='hidden sm:flex gap-6 md:gap-10 text-zinc-100 items-center relative'>
          <div className='relative group'>
            <motion.span
              className='text-sm md:text-base capitalize font-light cursor-pointer hover:underline'
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Socials
            </motion.span>

            <div className="absolute -left-5 top-full bg-zinc-800 p-4 rounded-lg shadow-lg flex-col gap-2 text-sm z-50 hidden group-hover:flex">
              <a href="https://www.facebook.com/profile.php?id=100081094148365" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://www.linkedin.com/in/rabin-thapa-a35343260/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/eww.ravee/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href="https://github.com/rabin31" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
            </div>
          </div>

          <a
            className="text-sm md:text-base capitalize font-light hover:underline"
            href="#"
            onClick={handleContactClick}
          >
            Contact
          </a>

          <a
            className="text-sm md:text-base capitalize font-light hover:underline"
            href="https://www.youtube.com/@ograveen"
          >
            Youtube
          </a>
        </div>
        

        <div className='sm:hidden text-zinc-100 text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <div className='sm:hidden mt-4 flex flex-col items-start gap-4 px-2 text-zinc-100'>
          <div
            className='text-base capitalize font-light w-full border-b border-zinc-700 pb-2 cursor-pointer'
            onClick={() => setSocialOpen(!socialOpen)}
          >
            Socials
          </div>
          {socialOpen && (
            <div className="ml-4 mt-1 flex flex-col gap-1 text-sm">
              <a href="https://www.facebook.com/profile.php?id=100081094148365" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://www.linkedin.com/in/rabin-thapa-a35343260/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/eww.ravee/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href="https://github.com/rabin31" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
            </div>
          )}

          <a
            className='text-base capitalize font-light w-full border-b border-zinc-700 pb-2'
            href="#"
          >
            PlayBook
          </a>
          <div
            className='text-base capitalize font-light w-full border-b border-zinc-700 pb-2 cursor-pointer'
            onClick={handleContactClick}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
