import React,{useEffect,useState} from 'react'
import TypingText from '../TypingText'
import AOS from 'aos';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import DanceDownArrow from '../DanceDownArrow';

const Hero = ({planetRef}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoLoaded && window.scrollY > 100) {
        setVideoLoaded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoLoaded]);
  useEffect(()=>{
     AOS.init();
  },[])
  return (
    <div className={`w-screen ${!videoLoaded?"bg-black": "bg-inherit"} h-screen relative flex flex-col items-center justify-center`}>
        <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        autoPlay
        loop
        muted
        width={"100%"}
        height={"100%"}
        className="object-cover h-full w-full absolute"
      >
        <source src="/videos/planets.mp4" type="video/mp4" />
        
      </motion.video>
      <TypingText className="absolute z-10" text="Welcome To The Universe of Star Wars"/>
      <Typography data-aos="fade-up" data-aos-duration="3000" className='sm:text-6xl text-3xl bg-gradient-to-r from-amber-400 to-yellow-100 opacity-80 text-transparent bg-clip-text font-poppins font-bold absolute z-10'>
        Explore More
      </Typography>
      <DanceDownArrow planetRef={planetRef}/>
    </div>
  )
}

export default Hero