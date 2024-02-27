import React,{ useEffect }from 'react'
import Aos from 'aos';
import { AppBar, Toolbar} from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  useEffect(() => {
      Aos.init();
    }, [])
return (
  <div>
      <AppBar className="bg-black" position='fixed' elevation={3}>
          <Toolbar className='flex gap-2 justify-center w-screen h-24 max-w-full'>
              <motion.img
              src={"/images/Star_Wars_Logo.png"}
              alt="Logo"
              className="h-24 transition-translation duration-500 hover:-translate-y-1"
              initial={{  opacity: 0 }}
              animate={{  opacity: 1 }}
              transition={{ duration: 4, ease:"easeInOut" }}
            />
          </Toolbar>
      </AppBar>
  
</div>
)
}

export default Navbar