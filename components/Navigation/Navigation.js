import React from 'react';
import NavLink from './NavLink';
import { BsHouseFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';

import { MenuAlt2Icon } from '@heroicons/react/solid';

const Navigation = () => {
  return (
    <header className="w-full bg-transparent p-4 fixed z-50 top-0 left-0">
      <div className="flex justify-between max-w-[1500px] mx-auto">
        <div className="space-x-10 flex items-center">
          <div className="flex items-center space-x-2 text-white">
            <MenuAlt2Icon className="h-7 w-7  lg:hidden rounded cursor-pointer bg-[#333] text-white" />
            <a href="/" className="flex items-center space-x-2 text-2xl h-full">
              <BsHouseFill className="" />
              <span>Berkshire Hathaway</span>
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 h-full text-white">
            <NavLink text="Services" path="/" />
            <NavLink text="Our Team" path="/" />
            <NavLink text="Learn" path="/" />
            <NavLink text="Contact" path="/" />
          </nav>
        </div>
        <div className="space-x-2 flex items-center text-md">
          <button className="bg-[#333] text-white rounded-md py-2.5 px-4 hover:bg-[#3f3f3f] ease duration-300">
            Login
          </button>
          <button className="bg-[#333] text-white rounded-md text-xl p-3 hover:bg-[#3f3f3f] ease duration-300">
            <RiSunFill />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
