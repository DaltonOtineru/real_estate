import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon,
  KeyIcon,
  MapIcon,
  PuzzleIcon,
  ShoppingBagIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navigation = ({ listingShadow }) => {
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header
      className={`w-full p-4 fixed z-50 top-0 left-0 transition duration-500 
        ${shadow || listingShadow ? 'bg-white shadow-2xl dark:bg-[#222]' : ''}
        `}
    >
      <div className="flex justify-between max-w-[1500px] mx-auto">
        <div className="space-x-10 flex items-center">
          <div className="flex items-center space-x-2 text-white cursor-pointer">
            <MenuAlt2Icon
              className="h-8 w-8  lg:hidden rounded cursor-pointer bg-[#333] text-white dark:bg-white dark:text-black"
              onClick={() => handleMobileMenu()}
            />
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl h-full cursor-pointer"
            >
              <span
                className={`text-xl md:text-2xl ${
                  shadow || listingShadow ? 'text-black dark:text-white' : ''
                }`}
              >
                Berkshire Hathaway
              </span>
            </Link>
          </div>
          <nav
            className={`hidden lg:flex items-center space-x-6 h-full  text-lg ${
              shadow || listingShadow
                ? 'text-black dark:text-white'
                : 'text-white'
            }`}
          >
            <NavLink text="Services" path="/" cName="" />
            <NavLink text="Our Team" path="/" cName="" />
            <NavLink text="Learn" path="/" cName="" />
            <NavLink text="Contact" path="/" cName="" />
          </nav>
        </div>
        <div className="space-x-2 flex items-center text-md">
          {!session ? (
            <Link href="signin">
              <button
                className={` dark:text-[#333] rounded-md py-2.5 px-4 hover:bg-opacity-70  ease duration-300 ${
                  shadow || listingShadow
                    ? 'bg-[#1c1c1c] text-white dark:bg-white/90'
                    : 'bg-white/90 text-black'
                }`}
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              className={`dark:bg-white/90  dark:text-[#333] rounded-md py-2.5 px-4 hover:bg-opacity-70 ease duration-300 ${
                shadow || listingShadow
                  ? 'bg-[#1c1c1c] text-white'
                  : 'bg-white/90 text-black'
              }`}
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
          {mounted && (
            <button
              className={` dark:bg-white/90  dark:text-[#333] rounded-md p-3 hover:bg-opacity-70 ease duration-300 text-xl ${
                shadow || listingShadow
                  ? 'bg-[#1c1c1c] text-white'
                  : 'bg-white/90 text-black'
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
      <div
        className={
          mobileMenu
            ? 'fixed left-0 top-0 w-full md:w-3/4 h-screen bg-white dark:bg-[#1c1c1c] py-10 px-4 ease-in duration-500 lg:hidden'
            : 'fixed left-[-100%] top-0 py-10 px-4 ease-in duration-500 shadow-2xl h-screen w-3/4 sm:w-[60%] md:w-[45%]'
        }
      >
        <div>
          <XIcon
            className="h-9 w-9 mb-4 cursor-pointer"
            onClick={() => handleMobileMenu()}
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col dark:text-white/90 text-lg space-y-4 py-8 border-b-[1px]  border-black/30 dark:border-white/20">
            <NavLink
              Icon={MapIcon}
              text="Browse Listings For Sale"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
            <NavLink
              Icon={ShoppingBagIcon}
              text="Sell A Home"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
            <NavLink
              Icon={KeyIcon}
              text="Browse Rentals"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
            <NavLink
              Icon={CalculatorIcon}
              text="Mortgage Calculator"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
          </div>
          <div className="flex flex-col dark:text-white/90 text-lg space-y-4 py-8 border-b-[1px]  border-black/30 dark:border-white/20">
            <NavLink
              Icon={AcademicCapIcon}
              text="First-Time Home Buyer Guide"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
            <NavLink
              Icon={BeakerIcon}
              text="Home Marketing Guide"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
            <NavLink
              Icon={PuzzleIcon}
              text="Frequently Asked Questions"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
          </div>
          <div className="flex flex-col dark:text-white/90 text-lg space-y-4 py-8 border-b-[1px]  border-black/30 dark:border-white/20">
            <NavLink
              Icon={UserGroupIcon}
              text="Our Team"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
            <NavLink
              Icon={SparklesIcon}
              text="Become A Realtor"
              iconClass="h-7 w-7 mr-1"
              path="/"
            />
          </div>
          <div className="w-full">
            <button className="bg-black text-white dark:bg-white dark:text-black w-full rounded-lg py-4 mt-8 font-medium">
              Call Berkshire Hathaway
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
