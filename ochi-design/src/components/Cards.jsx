import React from 'react'
import ochiCard from '../assets/ochiCard.svg'
import clutch from '../assets/clutch.svg'
import goolLogo from '../assets/goolLogo.png'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-700 items-center px-10 flex gap-5 '>
            <div className='cardContainer h-[50vh]  w-1/2'>
                <div className='relative w-full bg-[#004D43] rounded-xl h-full flex items-center justify-center'>
                    <img className='w-32' src={ochiCard} alt="" />
                    <button className='absolute px-5 py-1 rounded-full left-10 bottom-10 border-2'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardContainer flex gap-5 h-[50vh]  w-1/2'>
                <div className=' w-1/2 bg-[#162422] rounded-xl flex items-center relative justify-center h-full'>
                    <img className='w-32' src={clutch} alt="" />
                    <button className='absolute px-5 py-1 rounded-full left-10 uppercase bottom-10 border-2'>rating</button>
                </div>
                <div className=' w-1/2 bg-[#162422] flex items-center justify-center  relative rounded-xl h-full'>
                    <img className='w-32' src={goolLogo} alt="" />
                    <button className='absolute px-5 py-1 rounded-full left-10 uppercase bottom-10 border-2'>Bussiness Tycon</button>
                </div>
            </div>
        </div>
    )
}

export default Cards