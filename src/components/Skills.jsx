import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const logoPaths = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
    "https://www.cdnlogo.com/logos/r/85/react.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mkk0TKy0Hww7V1J9JkVUaHoF35GhtJN1Tw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuv3AsOvbwcR3Y-jr4ArK6x-lA5K2XN254A&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    "https://images.seeklogo.com/logo-png/43/1/tailwind-css-logo-png_seeklogo-434090.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png",
    "https://logowik.com/content/uploads/images/laravel8530.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2101px-Adobe_InDesign_CC_icon.svg.png",
  ];

  const logos = logoPaths.map((src, i) => (
    <motion.div
      key={i}
      className='h-24 w-24 bg-white flex-shrink-0 rounded-md shadow-md p-2'
      initial={{ filter: "grayscale(100%)" }}
      whileHover={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={`Logo ${i}`} className="w-full h-full object-contain" />
    </motion.div>
  ));

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1.5" className='w-full px-5 py-10 md:pl-20 bg-[#CDEA68] text-black overflow-hidden'>
      <h1 className='font-["Poppins"] text-xl border-b-[1px] border-zinc-700 pb-5 sm:text-2xl md:text-[4vw] md:leading-[3vw] tracking-tight pt-5'>Skills</h1>
      <motion.div
        className='pt-5 mt-5 flex gap-10 whitespace-nowrap'
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear'
        }}
      >
        {logos}
        {logos}
      </motion.div>
    </div>
  );
};

export default Skills;
