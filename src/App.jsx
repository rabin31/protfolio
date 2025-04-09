import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import CustomCursor from './components/CustomCursor';
import Designs from './components/Designs';
import Contact from './components/Contact';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [hideCursor, setHideCursor] = useState(false);

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <CustomCursor hideCursor={hideCursor} />
      
      <div
        onMouseEnter={() => setHideCursor(true)}
        onMouseLeave={() => setHideCursor(false)}
      >
        <Navbar />
      </div>

      <LandingPage />
      <Marquee />
      <About />
      <Designs />
      <Featured />
      <Skills />
      <Experiences />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
