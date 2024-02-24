import React, { useEffect, useState } from 'react';
import TypingText from '../TypingText';
import AOS from 'aos';
import { Typography } from '@mui/material';
import DanceDownArrow from '../DanceDownArrow';
import VideoPLayer from '../VideoPlayer';

const Hero = ({ planetRef }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoLoaded && window.scrollY > 80) {
        setVideoLoaded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoLoaded]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black">
      <div className="flex relative flex-col items-center justify-center gap-10">
        <div>
          <VideoPLayer />
        </div>
        <div className='flex w-2/3 mt-20 absolute flex-col items-center'>
          <TypingText text="Welcome To The Universe of Star Wars" />
          <Typography data-aos="fade-up" data-aos-duration="3000" className='sm:text-6xl text-xl bg-gradient-to-r from-amber-400 to-yellow-100 opacity-80 text-transparent bg-clip-text font-poppins font-bold'>
            Explore More
          </Typography>
          <DanceDownArrow planetRef={planetRef} />
        </div>
      </div>    
    </div>
  );
};

export default Hero;
