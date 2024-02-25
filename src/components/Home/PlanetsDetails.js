import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { NavigateBefore, NavigateNext, WbSunny, Terrain, People, AspectRatio, AccessTime, RotateRight } from '@mui/icons-material'; // Import Material-UI icons
import ResidentDetails from './ResidentDetails';
import SkeletonLoader from '../SkeletonLoader';

const PlanetsDetails = ({ planet }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [residentIndex, setResidentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  const nextResident = () => {
    if (residentIndex < planet.residents.length - 1) {
      setResidentIndex(residentIndex + 1);
    }
  };

  const prevResident = () => {
    if (residentIndex > 0) {
      setResidentIndex(residentIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 0 , y:60}}
      whileInView={{y:0}}
      viewport={{once: true}}
      animate={{ opacity: 1, rotateY: isFlipped ? 360 : 0 }}
      exit={{ opacity: 0, rotateY: 0 }}
      transition={{ duration: 0.5 }}
      className='sm:w-2/5 w-full h-full'
    >
    <Card elevation={7} className="font-poppins  bg-gradient-to-r from-slate-900 to-cyan-900 text-white p-2 rounded-2xl shadow-xl">
      <AnimatePresence
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CardContent className="flex flex-col sm:text-start text-center gap-4">
              <Typography className="text-4xl font-bold text-center bg-gradient-to-r from-amber-500 to-gray-400 bg-clip-text text-transparent font-poppins">
                {planet.name}
              </Typography>
              <Typography className='font-poppins font-medium text-start flex gap-4'>
                <WbSunny />
                <div>Climate:</div> 
                <div>{planet.climate}</div>
              </Typography>
              <Typography className='font-poppins font-medium text-start flex gap-4'>
                <Terrain />
                <div>Terrain:</div> 
                <div>{planet.terrain}</div>
              </Typography>
              <Typography className='font-poppins font-medium text-start flex gap-4'>
                <People /> 
                <div>Population:</div>
                <div>{Number(planet.population).toLocaleString()}</div>
              </Typography>
              <Typography className='font-poppins font-medium text-start flex gap-4'>
                <AspectRatio /> 
                <div>Diameter:</div> 
                <div>{planet.diameter}</div>
              </Typography>
              <Typography className='font-poppins font-medium text-start flex gap-4'>
                <AccessTime /> 
                <div>Orbital Period:</div> 
                <div>{planet.orbital_period}</div>
              </Typography>
              <Typography className='font-poppins font-medium text-start flex gap-4'>
                <RotateRight /> 
                <div>Rotation Period:</div> 
                <div>{planet.rotation_period}</div>
              </Typography>
              <motion.div 
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex justify-center'
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={flipCard}
                  className="text-white font-medium font-poppins w-1/2 p-2 shadow-xl rounded-xl bg-black border-black"
                >
                  Tap to View Residents
                </Button>
              </motion.div>
            </CardContent>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
          >
            <CardContent className="flex flex-col gap-5">
              <Typography className='font-poppins font-semibold text-3xl text-center bg-gradient-to-r from-gray-400 to-amber-400 bg-clip-text text-transparent'> 
                Residents 
              </Typography>
              <div className='flex justify-between items-center'>
                <Button 
                className="w-8 h-8 shadow-xl rounded-full" 
                onClick={prevResident}
                disabled={residentIndex === 0}
                >
                  <NavigateBefore className='text-white'/>
                </Button>
                <div className='carousel-container'>
                  {planet.residents.length > 0 ? (
                    <motion.div
                      key={residentIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ResidentDetails residentsUrl={planet.residents[residentIndex]} />
                    </motion.div>
                  ) : (
                    <Typography className='font-poppins font-medium'>No Residents Found</Typography>
                  )}
                </div>
                <Button 
                className="w-8 h-8 shadow-xl rounded-full" 
                onClick={nextResident} 
                disabled={residentIndex === planet.residents.length - 1 || planet.residents.length === 0}>
                  <NavigateNext className='text-white' />
                </Button>
              </div>
              <motion.div 
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='flex justify-center'
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={flipCard}
                  className="text-white font-poppins font-medium w-1/2 p-2 rounded-xl bg-black border-black"
                >
                  Back To Planet Details
                </Button>
              </motion.div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
    </motion.div>
  );
};

export default PlanetsDetails;
