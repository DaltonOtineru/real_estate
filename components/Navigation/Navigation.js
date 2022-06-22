import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { BsHouseFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [shadow, setShadow] = useState(false);
  const [darkShadow, setDarkShadow] = useState(false);
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
        resolvedTheme === 'dark' ? setDarkShadow(true) : setShadow(true);
      } else {
        setShadow(false);
        setDarkShadow(false);
      }
    };
    window.addEventListener('scroll', handleShow);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`w-full p-4 fixed z-50 top-0 left-0 transition duration-500 ${
        darkShadow && 'bg-[#333] shadow-2xl bg-opacity-100'
      }
        ${shadow && 'bg-white shadow-2xl'}
        `}
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
          <button className="bg-[#1c1c1c] dark:bg-white/80 text-white dark:text-[#333] rounded-md py-2.5 px-4 hover:bg-[#3f3f3f] ease duration-300">
            Login
          </button>
          {mounted && (
            <div
              className={`bg-[#1c1c1c] dark:bg-white/80 flex items-center px-0.5 rounded-full h-7 w-12 cursor-pointer flex-shrink-0 relative  ${
                resolvedTheme === 'dark' ? 'justify-end' : 'justify-start'
              }`}
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              <span className="absolute left-0">🌜</span>
              <motion.div
                className="w-5 h-5 bg-white dark:bg-[#333] rounded-full z-40"
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
