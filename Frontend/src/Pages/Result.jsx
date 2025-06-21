import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';
import { AppContext } from '../context/AppContext';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading ] = useState(false)
  const[input, setInput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)

  }

  return (
    <motion.form 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: true }}

    onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center min-h-[90vh] px-4 sm:px-6">

      {/* Image Preview */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={image}
            alt="Generated"
            className="max-w-sm w-full rounded-xl shadow-lg"
          />
          {/* Loading progress bar */}
          <span className= {`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' :'w-0'}`} />
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading...</p>
      </div>
      
      {/* Input Box */}
 {!isImageLoaded && 
<div className="relative w-full max-w-xl mt-10 p-[2px] rounded-full bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd">
  <div className="flex items-center w-full bg-black/60 rounded-full px-4 py-2">
    {/* Gradient Placeholder Simulation */}
    {input === '' && (
      <span className="absolute left-6 text-sm bg-clip-text text-transparent bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd pointer-events-none">
        Describe what you want to generate
      </span>
    )}

    {/* Transparent Input */}
    <input
      onChange={(e) => setInput(e.target.value)}
      value={input}
      type="text"
      className="flex-1 bg-transparent text-sm text-white focus:outline-none z-10"
    />

    {/* Gradient Button */}
    <button
      type="submit"
      className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white font-medium text-sm px-6 py-2 rounded-full hover:opacity-90 transition-all"
    >
      Generate
    </button>
  </div>
</div>



      }

  {isImageLoaded && 
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
        <p onClick={()=>{setIsImageLoaded(false)}} 
        className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer' >Generate Another</p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
      </div>
      }
    </motion.form>
  );
};

export default Result;
