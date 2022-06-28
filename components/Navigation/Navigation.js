import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navigation = () => {
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

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
      className={`w-full p-4 fixed z-50 top-0 left-0 transition duration-500 
        ${shadow && 'bg-white shadow-2xl dark:bg-[#222]'}
        `}
    >
      <div className="flex justify-between max-w-[1500px] mx-auto">
        <div className="space-x-10 flex items-center">
          <div className="flex items-center space-x-2 text-white cursor-pointer">
            <MenuAlt2Icon className="h-7 w-7  lg:hidden rounded cursor-pointer bg-[#333] text-white" />
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl h-full cursor-pointer"
            >
              <span
                className={`text-2xl ${shadow && 'text-black dark:text-white'}`}
              >
                Berkshire Hathaway
              </span>
            </Link>
          </div>
          <nav
            className={`hidden lg:flex items-center space-x-6 h-full text-white text-lg ${
              shadow && 'text-black dark:text-white'
            }`}
          >
            <NavLink text="Services" path="/" />
            <NavLink text="Our Team" path="/" />
            <NavLink text="Learn" path="/" />
            <NavLink text="Contact" path="/" />
          </nav>
        </div>
        <div className="space-x-2 flex items-center text-md">
          {!session ? (
            <Link href="signin">
              <button
                className={` dark:text-[#333] rounded-md py-2.5 px-4 hover:scale-105 ease duration-300 ${
                  shadow
                    ? 'bg-[#1c1c1c] text-white dark:bg-white/90'
                    : 'bg-white/90 text-black'
                }`}
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              className={`dark:bg-white/90  dark:text-[#333] rounded-md py-2.5 px-4 hover:scale-105 ease duration-300 ${
                shadow ? 'bg-[#1c1c1c] text-white' : 'bg-white/90 text-black'
              }`}
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
          {mounted && (
            <button
              className={` dark:bg-white/90  dark:text-[#333] rounded-md p-3 hover:scale-105 ease duration-300 text-xl ${
                shadow ? 'bg-[#1c1c1c] text-white' : 'bg-white/90 text-black'
              }`}
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {resolvedTheme === 'dark' ? <RiSunFill /> : <RiMoonFill />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
