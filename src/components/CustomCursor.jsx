import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ hideCursor }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none ${hideCursor ? 'opacity-0' : 'opacity-100'}`}
      animate={{ x: position.x - 15, y: position.y - 15 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div className="w-8 h-8 rounded-full border-2 border-white mix-blend-difference cursor-pointer"></div>
    </motion.div>
  );
};

export default CustomCursor;
