import React from 'react'

const Footer = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.1" 
      className='flex flex-col md:flex-row gap-10 md:gap-5 w-full h-[20vw] min-h-screen bg-[#F1F1F1] rounded-tl-3xl rounded-tr-3xl px-4 md:px-20 py-20 font-["Founders_Grotesk_Condensed"] text-black'
    >
      <div className='w-full md:w-1/2 h-full flex flex-col justify-between'>
        <div className="heading">
          <h1 className='text-[12vw] md:text-[8vw] font-semibold uppercase leading-none -mb-5'>Rabin</h1>
          <h1 className='text-[12vw] md:text-[8vw] font-semibold uppercase leading-none -mb-5'>Thapa</h1>
        </div>

        <div className="mt-10 md:mt-0">
        
        </div>
      </div>

      <div className='w-full md:w-1/2'>
        <h1 className='text-[10vw] md:text-[5vw] font-semibold uppercase leading-none -mb-1'>Social Profiles</h1>
        <div className='dets font-["Neue Montreal"] mt-10'>
          <a className='block hover:underline text-lg md:text-xl font-light' href="https://www.facebook.com/profile.php?id=100081094148365">Facebook</a>
          <a className='block hover:underline text-lg md:text-xl font-light' href="https://www.instagram.com/eww.ravee/">Instagram</a>
          <a className='block hover:underline text-lg md:text-xl font-light' href="https://www.linkedin.com/in/rabin-thapa-a35343260/">Linkdin</a>
          <a className='block hover:underline text-lg md:text-xl font-light' href="https://github.com/rabin31">Github</a>

          <h3 className='pt-20'>Youtube ma Subscribe Gardeuu la <span className='hover:underline hover:cursor-pointer'>Click Here</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
