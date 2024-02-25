import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5}}
      className="flex md:flex-row flex-col bg-black font-poppins text-white py-20 px-14 gap-10"
    >
      <motion.div 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x: 0}}
        transition={{duration: 1.2,}}
        viewport={{once:"true"}}
        className="flex justify-center"
       >
        <img src="/images/star-wars-outlaws.jpg" alt="Tatooine" className="md:w-full md:h-full w-2/3 h-2/3 rounded-lg" />
      </motion.div>
      <Container>
        <motion.div
          initial={{ opacity: 0 ,x:100 }}
          whileInView={{ opacity: 1,x:0}}
          transition={{ duration: 0.8 , easeElastic:"easeOut"}}
          viewport={{once:"true"}}
          className="mb-10"
        >
          <Typography className="sm:text-start text-center sm:text-5xl text-3xl font-poppins font-bold bg-gradient-to-l from-amber-500 to-gray-600 bg-clip-text text-transparent mb-6">
            About Star Wars
          </Typography>
          <Typography variant="body1" className="sm:text-start text-center sm:text-md font-poppins text-base opacity-80 font-medium text-wrap text-white mb-6">
            Star Wars is an American epic space opera media franchise created by George Lucas. <br /> The franchise began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. <br /><br /> The original film, later subtitled Episode IV – A New Hope, was followed by the sequels Episode V – The Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983), forming the original Star Wars trilogy. A prequel trilogy was later released, consisting of Episode I – The Phantom Menace (1999), Episode II – Attack of the Clones (2002), and Episode III – Revenge of the Sith (2005).
          </Typography>
        </motion.div>
      </Container>
      
    </motion.section>
  );
};

export default AboutSection;