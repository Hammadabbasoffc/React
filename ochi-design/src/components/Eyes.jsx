import React, { useEffect, useState } from 'react'
import eyesbg from '../assets/eyesbg.jpg'
import { transform } from 'framer-motion';

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed = "-.7" data-scroll-section className='relative w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${eyesbg})` }}>
                <div className='absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%]  '>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='w-2/3 h-2/3 rounded-full  relative  bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full  absolute h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>

                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='w-2/3 h-2/3 rounded-full  relative  bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full  absolute h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                                <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
