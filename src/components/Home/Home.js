import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import PlanetsFeed from './PlanetsFeed'



const Home = () => {

  return (
    <div className='App flex flex-col font-poppins justify-center'>
       <Navbar />
       <Hero />
       <PlanetsFeed />
    </div>
  )
}

export default Home