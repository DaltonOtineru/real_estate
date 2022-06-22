import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { BsHouseFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log('the current theme is: ', theme);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShow);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`w-full p-4 fixed z-50 top-0 left-0 transition duration-500 ${
        shadow ? 'bg-background shadow-3xl bg-opacity-60' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between max-w-[1500px] mx-auto">
        <div className="space-x-10 flex items-center">
          <div className="flex items-center space-x-2 text-white">
            <MenuAlt2Icon className="h-7 w-7  lg:hidden rounded cursor-pointer bg-[#333] text-white" />
            <a href="/" className="flex items-center space-x-2 text-2xl h-full">
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
          {mounted && (
            <div
              className={`bg-[#333] flex items-center px-0.5 rounded-full h-7 w-12 cursor-pointer flex-shrink-0 relative  ${
                resolvedTheme === 'dark' ? 'justify-end' : 'justify-start'
              }`}
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              <span className="absolute left-0">🌜</span>
              <motion.div
                className="w-5 h-5 bg-white rounded-full z-40"
                layout
                transition={spring}
              />

              <span className="absolute right-0.5">🌞</span>
            </div>
          )}
          {/* <button className="bg-[#333] text-white rounded-md text-xl p-3 hover:bg-[#3f3f3f] ease duration-300">
            <RiSunFill /> */}
          {/* </button> */}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
