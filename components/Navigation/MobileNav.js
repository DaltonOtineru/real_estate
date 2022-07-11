import React from 'react';
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
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import NavLink from './NavLink';

const MobileNav = ({ mobileMenu, handleMobileMenu }) => {
  return (
    <div
      className={
        mobileMenu
          ? 'fixed left-0 top-0 w-full md:w-3/4 h-screen bg-white dark:bg-[#1c1c1c] py-10 px-4 ease-in duration-500 lg:hidden shadow-2xl max-h-[100vh]'
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
            path="#featured__listings"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
          <NavLink
            Icon={ShoppingBagIcon}
            text="Sell A Home"
            iconClass="h-7 w-7 mr-1"
            path="/"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
          <NavLink
            Icon={KeyIcon}
            text="Browse Rentals"
            iconClass="h-7 w-7 mr-1"
            path="/"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
          <NavLink
            Icon={CalculatorIcon}
            text="Mortgage Calculator"
            iconClass="h-7 w-7 mr-1"
            path="/prequalify"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
        </div>
        <div className="flex flex-col dark:text-white/90 text-lg space-y-4 py-8 border-b-[1px]  border-black/30 dark:border-white/20">
          <NavLink
            Icon={AcademicCapIcon}
            text="First-Time Home Buyer Guide"
            iconClass="h-7 w-7 mr-1"
            path="/buyersguide"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
          <NavLink
            Icon={BeakerIcon}
            text="Home Marketing Guide"
            iconClass="h-7 w-7 mr-1"
            path="/marketingguide"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
          <NavLink
            Icon={PuzzleIcon}
            text="Frequently Asked Questions"
            iconClass="h-7 w-7 mr-1"
            path="/faq"
            className="flex cursor-pointer"
            handleMobileMenu={handleMobileMenu}
          />
        </div>
        <div className="flex flex-col dark:text-white/90 text-lg space-y-4 py-8 border-b-[1px]  border-black/30 dark:border-white/20">
          <NavLink
            Icon={UserGroupIcon}
            text="Our Team"
            iconClass="h-7 w-7 mr-1"
            path="/team"
            className="flex cursor-pointer"
          />
          <NavLink
            Icon={SparklesIcon}
            text="Become A Realtor"
            iconClass="h-7 w-7 mr-1"
            path="/careers"
            className="flex cursor-pointer"
          />
        </div>
        <div className="w-full">
          <button className="bg-black text-white dark:bg-white dark:text-black w-full rounded-lg py-4 mt-8 font-medium">
            Call Berkshire Hathaway
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
