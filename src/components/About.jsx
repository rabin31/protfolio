import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Hero from '../assets/hero.png';
import HeroHover from '../assets/hero1.jpg';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleContent = () => setIsOpen(!isOpen);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1.5"
      className="w-full px-5 py-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Poppins'] text-xl sm:text-2xl md:text-[2.5vw] md:leading-[3vw] tracking-tight">
      I'm a creative designer and web developer with 10 months of experience, specializing in responsive, animated websites. I blend design and code to build smooth, user-friendly digital experiences, with a solid foundation in frontend tech and basic Java programming.      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-5 border-t pt-10 mt-16 border-[#a1b562]">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-['poppins'] sm:text-4xl md:text-6xl lg:text-4xl">My approach:</h1>

          <button
            onClick={toggleContent}
            className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 bg-zinc-900 mt-8 sm:mt-10 rounded-full text-white uppercase text-sm sm:text-base hover:bg-zinc-800 transition-all duration-300"
          >
            For More
            <div className='h-3 w-3 bg-white rounded-full'></div>
          </button>

          {isOpen && (
            <motion.div
              className="mt-6 text-lg font-light text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className='w-120 font-mono'>
                I take a personalized approach to each project, ensuring that every aspect of the design reflects the brand's identity and resonates with the target audience. My process includes research, ideation, prototyping, and refining designs until they achieve the desired result.
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          className="w-full md:w-1/2 h-60 sm:h-[50vh] md:h-[70vh] bg-[#9ec21c] rounded-3xl overflow-hidden"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.img
            key={isHovered ? 'hover' : 'default'}
            src={isHovered ? Hero : HeroHover}
            alt="hero"
            className="w-full h-full object-cover rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
