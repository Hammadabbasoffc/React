import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            <div>
                <h1 className='font-bold my-5 text-4xl text-center'>This is Your Password Manager</h1>
            </div>
            <div className="flex flex-col items-center justify-center h-[79dvh] relative">

                {/* Green tint overlay */}
                <div className="absolute inset-0 bg-green-400 opacity-25"></div>

                {/* Content */}
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 z-10">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website-url">
                            Website URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="website-url"
                            type="text"
                            placeholder="Enter website URL"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            User Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                        />
                        <div className="relative ">
                            <label className="block text-gray-700 text-sm font-bold  mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className='shadow flex flex-row items-center rounded border '>
                                <input
                                    className=" appearance-none border-none rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                />
                                <div className='flex items-center justify-center mx-2 my-2 w-[10%] '>
                                    <button
                                        className="absolute items-center  focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                       <div className='flex flex-row gap-3 justify-between mt-2 items-center'>
                       <button type='submit' className='bg-green-400 px-2 py-2 rounded font-semibold'>Add Password</button>
                       <Link to="/allpassword"  className='bg-green-400 px-2 py-2 rounded font-semibold'>Show Passwords</Link>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Manager;
