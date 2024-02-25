import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import LoadingAnimation from '../LoadingAnimation';
import { motion } from 'framer-motion';
import { Person, Height, FitnessCenter, Wc } from '@mui/icons-material'; // Import Material-UI icons

const ResidentDetails = ({ residentsUrl }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    fetchResident(residentsUrl);
  }, [residentsUrl]);

  const fetchResident = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResident(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='bg-gradient-to-r from-slate-200 to-stone-200 shadow-xl text-black rounded-lg p-10'
    >
      {resident ? (
        <div className='flex flex-col gap-y-3'>
          <Typography className='font-poppins font-medium text-sm text-start flex items-center gap-2'>
            <Person />
            <span className="ml-2">Name: {resident.name}</span>
          </Typography>
          <Typography className='font-poppins font-medium text-sm text-start flex items-center gap-2'>
            <Height /> 
            <span className="ml-2">Height: {resident.height}</span>
          </Typography>
          <Typography className='font-poppins font-medium text-sm text-start flex items-center gap-2'>
            <FitnessCenter /> 
            <span className="ml-2">Mass: {resident.mass}</span>
          </Typography>
          <Typography className='font-poppins font-medium text-sm text-start flex items-center gap-2'>
            <Wc /> 
            <span className="ml-2">Gender: {resident.gender}</span>
          </Typography>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </motion.div>
  );
};

export default ResidentDetails;
