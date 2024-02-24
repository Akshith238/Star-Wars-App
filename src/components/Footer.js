import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-gray-900 text-white py-4"
    >
      <Container maxWidth="lg" className="flex justify-center items-center">
        <Typography className='font-poppins'>&copy; {new Date().getFullYear()} Star Wars App By Akshith</Typography>
      </Container>
    </motion.footer>
  );
};

export default Footer;
