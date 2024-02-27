import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVideoLoaded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 0.5,ease:"easeOut" }}
        className={`background-video ${videoLoaded ? 'visible' : 'invisible'}`}
      >
        <ReactPlayer
          url="/videos/planets.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="background-video"
        />
      </motion.div>
    </div>
  );
};

export default VideoPlayer;
