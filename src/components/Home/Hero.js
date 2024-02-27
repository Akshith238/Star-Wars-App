import React, { useEffect} from 'react';
import TypingText from '../TypingText';
import AOS from 'aos';
import { Typography } from '@mui/material';
import DanceDownArrow from '../DanceDownArrow';
import VideoPLayer from '../VideoPlayer';

const Hero = ({ planetRef }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black mt-20">
      <div className="flex relative flex-col items-center justify-center gap-10">
        <div className="video-player w-full h-full">
          <VideoPLayer/>
        </div>
        <div className='flex w-2/3 absolute flex-col items-center md:gap-4 gap-1'>
          <TypingText text="Welcome To The Universe of Star Wars" />
          <Typography data-aos="fade-up" data-aos-duration="2000" className='md:text-5xl text-lg bg-gradient-to-r from-amber-400 to-yellow-100 opacity-80 text-transparent bg-clip-text font-poppins font-bold'>
            Explore More
          </Typography>
          <DanceDownArrow planetRef={planetRef} />
        </div>
      </div>    
    </div>
  );
};

export default Hero;
