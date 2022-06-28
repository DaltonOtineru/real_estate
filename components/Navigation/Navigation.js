import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { RiSunFill } from 'react-icons/ri';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navigation = () => {
  const [shadow, setShadow] = useState(false);
  const [darkShadow, setDarkShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl h-full"
            >
              <span>Berkshire Hathaway</span>
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 h-full text-white">
            <NavLink text="Services" path="/" />
            <NavLink text="Our Team" path="/" />
            <NavLink text="Learn" path="/" />
            <NavLink text="Contact" path="/" />
          </nav>
        </div>
        <div className="space-x-2 flex items-center text-md">
          {!session ? (
            <Link href="signin">
              <button className="bg-[#1c1c1c] dark:bg-white/80 text-white dark:text-[#333] rounded-md py-2.5 px-4 hover:bg-[#3f3f3f] ease duration-300">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="bg-[#1c1c1c] dark:bg-white/80 text-white dark:text-[#333] rounded-md py-2.5 px-4 hover:bg-[#3f3f3f] ease duration-300"
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
          {mounted && (
            <button className="bg-[#333] text-white rounded-md text-xl p-3 hover:bg-[#3f3f3f] ease duration-300">
              <RiSunFill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
