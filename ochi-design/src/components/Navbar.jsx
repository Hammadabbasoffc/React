import React from 'react'
import logo from '../assets/logo.svg'

const items = [
    {
        name: "Services",
        path: '/services'
    },
    {
        name: "Our Work",
        path: '/work'
    },
    {
        name: "About Us",
        path: '/about'
    },
    {
        name: "Insights",
        path: '/insights'
    },
    {
        name: "Contact us",
        path: '/contact'
    }
]

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["NeueMontreal"] flex justify-between items-center '>
        <div>
           <img src={logo} alt="Logo"  className="filter invert"/>
        </div>
        <div className='logo flex gap-10 capitalize'>
            {items.map((item, index)=>{
               return <a className={`text-lg font-regural ${index === 4 && "ml-[20vh]" }`} key={index} href={item.path}>{item.name}</a>
            })}
        </div>
    </div>
  )
}

export default Navbar