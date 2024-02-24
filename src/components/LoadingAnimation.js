import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="flex items-center w-full h-full justify-center">
      <motion.div
        className="rounded-full h-16 w-16 border-t-4 border-gray-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default LoadingAnimation;