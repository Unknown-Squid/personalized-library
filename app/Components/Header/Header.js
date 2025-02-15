"use client";
import React, { useState } from 'react';
  
function Header() {

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState); // Toggle the checkbox state
  };

  return (
    <header className="bg-black h-[120px] w-full flex flex-shrink-0">
        <div className='w-[94%] h-full flex justify-end items-center gap-20'>
            <div className='size-fit flex gap-5 items-center justify-center mt-5'>
                <div className="relative w-fit">
                    <input
                        type="checkbox"
                        checked={isChecked} // Controlled checkbox value
                        onChange={handleCheckboxChange} // Handle state change
                        className="checkbox absolute top-2 right-4 z-10 cursor-pointer appearance-none"
                    />
                    <div className="mainbox h-[50px] w-[310px] relative flex flex-row-reverse items-center justify-center rounded-full bg-black transition-all duration-300">
                        <div className="iconContainer pt-1 pr-2 transition-all duration-300">
                        <svg
                            viewBox="0 0 512 512"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="search_icon text-white text-xl"
                        >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                        </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="search"
                            className="search_input w-[250px] h-full bg-transparent border-none outline-none pl-2 pb-1 text-white text-base transition-all duration-300"
                        />
                    </div>
                </div>
                <p className='text-white text-3xl'>My Library</p>
            </div>
            <div className='flex items-center gap-5 h-[80%] size-fit'>
                <div className='w-[80px] h-[80px] bg-white rounded-[100%]'>
                </div>
                <p className='text-white text-2xl mt-5'>Username</p>
            </div>
        </div>
    </header>
  )
}

export default Header
