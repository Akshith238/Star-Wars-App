import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const DanceDownArrow = ({planetRef}) => {
    const handleClick = () => {
            window.scrollTo(0, document.body.scrollHeight);
      };
  return (
    <motion.div
      animate={{ translateY: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
      className="flex justify-center m-20"
    >
      <IconButton className='bg-amber-500' onClick={handleClick}>
        <ArrowDownward />
      </IconButton>
    </motion.div>
  );
};

export default DanceDownArrow;