import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from 'react-icons/fa6'

const LandingPage = () => {
  const fullText = "Rabin Thapa"
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (index < fullText.length) {
          setIndex(index + 1)
          return prev + fullText[index]
        } else {
          // reset after a short delay
          setTimeout(() => {
            setDisplayedText("")
            setIndex(0)
          }, 1500)
          return prev
        }
      })
    }, 150)

    return () => clearTimeout(timeout)
  }, [index])

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full lg:min-h-screen bg-zinc-900 pt-1'>

      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-left md:max-w-xl md:mx-auto md:text-center mt-50">
          <h1 className="tracking-tighter text-white">
            <span className="font-sans font-normal text-6xl">Namaste I'm</span><br />
            <motion.span
              className="font-serif italic font-normal text-[7vw] inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayedText}
              <span className='animate-pulse'>|</span>
            </motion.span><br />
          </h1>
          <span className='mt-10 block text-zinc-400'>From Nepal</span>
        </div>
      </div>

      <div className='border-t border-zinc-800 mt-15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 py-6 px-6 sm:px-10 md:px-16 lg:px-20'>
        <div className='flex flex-col gap-2 text-zinc-300'>
          {["Currently Availabe for Freelance", "My Local time: Nepal (UTC+5:45)"].map((item, index) => (
            <p key={index} className='text-sm sm:text-base hover:underline hover:cursor-pointer font-light tracking-tight leading-snug'>
              {item}
            </p>
          ))}
        </div>

        <div className='start flex items-center gap-4 flex-wrap sm:flex-nowrap rounded-full '>
          <a href="https://www.youtube.com/@ograveen"><div className='px-4 sm:px-5 py-2 border border-zinc-500 font-semibold cursor-pointer text-sm sm:text-md uppercase hover:bg-white hover:text-black rounded-full text-zinc-300'>
            YOUTUBE
          </div></a>
          <div className='w-10 h-10 border-2 flex items-center justify-center border-zinc-400 rounded-full'>
            <span className='rotate-[45deg] hover:rotate-90 hover:text-white text-zinc-300 transition-all duration-300'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
