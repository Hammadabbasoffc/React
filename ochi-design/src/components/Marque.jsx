import { motion } from 'framer-motion';
import React from 'react';

const Marque = () => {
  
  return (
    <div data-scroll data-scroll-speed = ".2" data-scroll-section className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden'>
            <motion.h1 
                initial={{ x: '0'}} 
                animate={{ x: '-100%'}} 
                transition={{ repeat: Infinity, ease: 'linear', duration: 5 }} 
                className='text-[17vw] leading-none font-[NeueMontreal] pr-10 font-bold uppercase '
            >
                We are ochi
            </motion.h1>
            <motion.h1 
                initial={{ x: '0'}} 
                animate={{ x: '-100%' }} 
                transition={{ repeat: Infinity, ease: 'linear', duration: 5 }} 
                className='text-[17vw] leading-none font-[NeueMontreal] pr-10 font-bold uppercase '
            >
                We are ochi
            </motion.h1>
        </div>
    </div>
  );
}

export default Marque;
