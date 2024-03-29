import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' }, // Define paths for navigation items
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '/contact' },
    { id: 6, text: 'MyPasswords', path: '/allpassword' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-15 mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df5d]'>Pass OP</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='p-2 hover:bg-[#00df5d] font-bold rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
            <Link to={item.path}>{item.text}</Link> {/* Use Link for navigation */}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={nav ? ' md:hidden absolute z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df5d] m-4'>Pass OP</h1>
        {navItems.map(item => (
          <li key={item.id} className='p-4 font-bold border-b rounded-xl hover:bg-[#00df5d] duration-300 hover:text-black cursor-pointer border-gray-600'>
            <Link to={item.path} onClick={() => setNav(false)}>{item.text}</Link> {/* Close nav on click */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
