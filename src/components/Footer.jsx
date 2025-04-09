import React from 'react';

const Footer = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="flex flex-col md:flex-row gap-10 md:gap-5 w-full min-h-screen bg-[#F1F1F1] rounded-tl-3xl rounded-tr-3xl px-6 sm:px-10 md:px-20 py-16 font-['Founders_Grotesk_Condensed'] text-black"
    >
      {/* Left Side - Name */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[8vw] font-semibold uppercase leading-none -mb-4">
            Rabin
          </h1>
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[8vw] font-semibold uppercase leading-none -mb-4">
            Thapa
          </h1>
        </div>

        {/* You can add something here later if needed */}
        <div className="mt-10 md:mt-0"></div>
      </div>

      {/* Right Side - Social Links */}
      <div className="w-full md:w-1/2">
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[5vw] font-semibold uppercase leading-none -mb-1">
          Social Profiles
        </h1>
        <div className="dets font-['Neue Montreal'] mt-8 sm:mt-10 space-y-4 text-base sm:text-lg md:text-xl font-light">
          <a
            className="block hover:underline"
            href="https://www.facebook.com/profile.php?id=100081094148365"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="block hover:underline"
            href="https://www.instagram.com/eww.ravee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="block hover:underline"
            href="https://www.linkedin.com/in/rabin-thapa-a35343260/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="block hover:underline"
            href="https://github.com/rabin31"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <h3 className="pt-12 sm:pt-16 text-base sm:text-lg md:text-xl">
            Youtube ma Subscribe Gardeuu la{" "}
            <span className="hover:underline hover:cursor-pointer">Click Here</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
