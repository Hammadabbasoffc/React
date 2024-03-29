import React from 'react';
import { HiArrowCircleLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';

const linkStyle = {
  display: 'inline-block',
  textDecoration: 'none',

};



const PasswordsHeader = () => {
  return (
    <div className='w-full bg-green-400 flex flex-row items-center justify-center  '>
      <div className='w-[6%] '>
        <Link to='/' style={linkStyle}>
          <HiArrowCircleLeft  size={50} />
        </Link>
      </div>
      <div className='w-[94%] items-center text-center '>
        <h1 className='font-semibold text-3xl'>These are Passwords</h1>
      </div>
    </div>
  );
}

// Define styles


export default PasswordsHeader;
