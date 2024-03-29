import React, { useState } from 'react'
import {Power4} from 'gsap/all'
import fadeImage from '../assets/fadeImage.png'
import videImage from '../assets/videImage.png'
import { motion } from 'framer-motion'


const Featured = () => {

    const [isHovering, setHovering] = useState(false);


    return (
        <div className='w-full py-10 '>
            <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-10'>
                <h1 className='text-6xl font-[NeueMontreal tracking-tight ]'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>

                    <div  onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='card w-1/2  h-[80vh] relative '>
                        <div className='w-full rounded-xl h-full overflow-hidden  bg-zinc-400'>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] text-8xl left-full -translate-x-1/3 top-1/2 -translate-y-1/2 font-[NeueMontreal] z-[9] leading-none tracking-tighter font-bold '>
                                {"FYDE".split("").map((item, index) => {
                                return <motion.span className='inline-block' initial={{ y: "100%" }} animate={isHovering ? ({ y: "0" }) : ({ y: "100%" })} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.1}}>{item}</motion.span>
                            })}
                            </h1>

                            <img className='w-full h-full bg-cover' src={fadeImage} alt="fadeImage" />
                        </div>
                    </div>
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='card w-1/2  h-[80vh]  relative '>
                        <h1 className='absolute flex text-[#CDEA68] text-8xl right-full overflow-hidden translate-x-1/3 top-1/2 -translate-y-1/2 font-[NeueMontreal] z-[9] leading-none tracking-tighter font-bold '>
                            {"VIDE".split("").map((item, index) => {
                                return <motion.span className='inline-block' initial={{ y: "100%" }} animate={isHovering ? ({ y: "0" }) : ({ y: "100%" })} transition={{ease: Power4.easeInOut, delay: index*.1}}>{item}</motion.span>
                            })}
                        </h1>

                        <div className='w-full h-full rounded-xl overflow-hidden '>
                            <img className='w-full h-full bg-cover' src={videImage} alt="fadeImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured