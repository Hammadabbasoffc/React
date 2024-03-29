import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {

    const items = ["facebook", "Instagram", "Twitter"];


    return (
        <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20 font-[FoundersGrotesk]'>
            <div className='w-1/2 h-full flex flex-col justify-between  '>
                <div>
                    <h1 className='text-[8vw] uppercase font-semibold leading-none -mb-6 '>EYE-</h1>
                    <h1 className='text-[8vw] uppercase font-semibold leading-none -mb-6 '>Opening</h1>
                </div>
                <img src={logo} alt="Logo" className="filter invert w-16" />
            </div>
            <div className='w-1/2'>
                <h1 className='text-[8vw] uppercase font-semibold leading-none -mb-6 '>Presentations</h1>
                <div className='mt-7'>
                    {items.map((item, index)=>(
                        <a className='block font-[NeueMontreal] capitalize'>{item}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer