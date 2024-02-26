import React,{useState,useEffect,forwardRef, useRef}from 'react'
import PlanetsDetails from './PlanetsDetails'
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const PlanetsFeed = forwardRef((props,ref) => {
  const [planets,setPlanets]=useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const topRef= useRef(null);
  
  useEffect(()=>{
      topRef.current.scrollIntoView({behaviour: "smooth"});
  },[currentPage]);

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/');
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchPlanets(nextPage);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      fetchPlanets(previousPage);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDotClick = (index) => {
    const url = `https://swapi.dev/api/planets/?page=${index}`;
    fetchPlanets(url);
    setCurrentPage(index)
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= 6; i++) {
      const isCurrentPage = i === currentPage;
      dots.push(
        <motion.div
          key={i}
          className={`w-3 h-3 rounded-full ${isCurrentPage ? 'bg-white' : 'bg-gray-500'}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => handleDotClick(i)}
        />
      );
    }
    return dots;
  };

  return (
    <div ref={ref} className='bg-black p-10 justify-center items-center flex flex-col gap-16'>
      <motion.div
      ref={topRef}
      initial={{y:100}}
      whileInView={{y:0}}
      transition={{duration: 0.6, ease: "easeOut"}}
      className='sm:text-5xl text-3xl bg-gradient-to-r from-amber-500 to-gray-500 bg-clip-text text-center font-bold text-transparent'>
        Star Wars Planets
      </motion.div>
      <div className='flex sm:p-3 p-10 md:flex-row flex-col md:justify-center items-center flex-wrap gap-16'>
        {planets.map((planet) => (
          <PlanetsDetails key={planet.url} planet={planet} />
        ))}
      </div>
      <div className='flex gap-5 justify-center w-1/4 items-center'>
          <motion.div
          initial={{scale:1}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
              <Button 
                elevation={7}
                className={`text-white font-poppins rounded-xl shadow-2xl font-semibold ${previousPage ? "bg-black" : "hidden"}`} 
                onClick={handlePreviousPage} 
                disabled={!previousPage}
              >
                Previous
              </Button>
          </motion.div>
          <div className='flex gap-2'>{renderDots()}</div>
          <motion.div 
          initial={{scale:1}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
              <Button 
                elevation={7}
                className={`text-white rounded-xl font-poppins shadow-2xl font-semibold ${nextPage ? "bg-black" : "hidden"}`} 
                onClick={handleNextPage} 
                disabled={!nextPage}
              >
                Next
              </Button>
          </motion.div>
      </div>
    </div>
  )
});

export default PlanetsFeed