import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed = "-.11" data-scroll-section className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[NeueMontreal] text-[4vw] leading-[4vw] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[1px] mt-20 flex gap-10 border-[#83944a]'>
            <div className='w-1/2 pt-8 '>
                <h1 className='text-6xl'>Our Approach</h1>
                <button className='px-5 py-4 uppercase bg-zinc-900 rounded-full mt-6 flex gap-10 items-center justify-center text-white'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full' ></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] mt-8 rounded-3xl  bg-[#83944a]'>

            </div>
        </div>
    </div>
  )
}

export default About