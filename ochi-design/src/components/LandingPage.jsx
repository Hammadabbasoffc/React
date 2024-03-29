import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";


const LandingPage = () => {


  return (
    <div data-scroll data-scroll-speed = "-.3" data-scroll-section className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure mt-[10rem] px-20'>

        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return <div className='Masker'>
            <div className='w-fit flex items-center '>
              {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: '9vw' }} transition={{ease:[0.76, 0, 0.24, 1], duration: 1}}  className='w-[9vw] h-[5.7vw] rounded-md mr-[1vw] relative top-2 bg-red-500'></motion.div>)}
              <h1 className='uppercase text-[9.5vw] font-light leading-[6.5vw]  tracking-tight font-["FoundersGrotesk"]'>{item}</h1>
            </div>
          </div>
        })}
      </div>

      <div className='border-t-[1px] border-zinc-800 mt-[6.5rem] flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return <p className='text-md font-light leading-none'>{item}</p>
        })}

        <div className='start flex items-center gap-5 '>
          <div className='px-4 py-2 border-[2px] border-zinc-500 font-light text-sm uppercase rounded-full' >Start the project</div>
          <div className='w-9 h-9 rounded-full flex items-center justify-center border-[2px] border-zinc-500'>
            <span className='rotate-[45deg]'>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage