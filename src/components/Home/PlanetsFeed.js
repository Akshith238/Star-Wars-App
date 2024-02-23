import React,{useState,useEffect}from 'react'
import PlanetsDetails from './PlanetsDetails'

const PlanetsFeed = () => {
  const [planets,setPlanets]=useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

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
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      fetchPlanets(previousPage);
    }
  };
  return (
    <div className='bg-black p-20 justify-center flex flex-wrap gap-16'>
      <h1>Star Wars Planets</h1>
        {planets.map((planet) => (
          <PlanetsDetails key={planet.url} planet={planet} />
        ))}
      <button onClick={handlePreviousPage} disabled={!previousPage}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={!nextPage}>
        Next
      </button>
    </div>
  )
}

export default PlanetsFeed