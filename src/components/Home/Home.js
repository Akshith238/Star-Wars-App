import React ,{useRef,useEffect} from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import PlanetsFeed from './PlanetsFeed'
import AboutSection from './About'
import Footer from '../Footer'



const Home = () => {
  const planetRef=useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col font-poppins justify-center'>
       <Navbar />
       <Hero planetRef={planetRef} />
       <AboutSection />
       <PlanetsFeed ref={planetRef}/>
       <Footer />
    </div>
  )
}

export default Home