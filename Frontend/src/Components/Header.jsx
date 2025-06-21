import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler =()=>{

    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }



  return (
<motion.div className='flex flex-col justify-center items-center text-center min-h-screen px-4 sm:px-8 -mt-12'
initial={{opacity:0.2, y:100}}
transition={{duration:1}}
whileInView={{ opacity: 1, y: 0}}
viewport={{ once: true}}


>

      {/* Badge */}
      <motion.div className='text-white inline-flex items-center gap-2  px-6 py-1 rounded-full border border-neutral-500'
         initial={{opacity:0, y:-20}}
         animate={{ opacity: 1, y: 0}}
         transition={{delay: 0.2, duration:0.8}}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star" className="w-4 h-4" />
      </motion.div>

      {/* Heading */}
      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 font-bold'
      initial={{opacity:0}}
      animate={{ opacity: 1}}
      transition={{delay: 0.4, duration:2}}
      
      >
        Turn text to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd">image</span>, in second.
      </motion.h1>

      {/* Subtext */}
      <motion.p className='text-center max-w-xl mx-auto mt-5 text-white/70'
      initial={{opacity:0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{delay: 0.6, duration:0.8}}
      >
        Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.
      </motion.p>

      {/* Button */}
      <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd mt-8 px-12 py-3 flex items-center gap-2 rounded-full hover:scale-105 transition-transform duration-300'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{opacity:0, y:20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ default: {duration: 0.5 }, opacity: {delay: 0.8, duration: 1}}}
      >
        Generate Image
        <img className="h-5" src={assets.star_group} alt="sparkle" />
      </motion.button>

      {/* Generated Images Row */}
      <motion.div className='flex flex-wrap justify-center mt-16 gap-4'
      initial={{opacity:0 }}
      animate={{ opacity: 1}}
      transition={{delay: 1, duration: 1}}

      
      >
        {Array(6).fill('').map((_, index) => (
          <motion.img
          whileHover={{ scale: 1.05, duration: 0.1 }}



            key={index}
            src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
            alt="generated"
            className="w-[80px] h-[100px] object-cover rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
          />
        ))}
      </motion.div>

      {/* Label under images */}
      <motion.p 
      initial={{opacity:0 }}
      animate={{ opacity: 1}}
      transition={{delay: 1.2, duration: 0.8}}

      
      className="mt-4 text-white/70 text-sm">Generated images from Chali.AI</motion.p>
    </motion.div>
  );
};

export default Header;
