import Link from 'next/link';
import React from 'react';
import { listingNavItems } from './ListingNavItems';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';

const ListingDetailsNav = () => {
  const renderlistingNav = () => {
    return listingNavItems.map(({ text, Icon }) => (
      <Link href="/" key={text}>
        <div
          className={`cursor-pointer dark:text-white dark:text-opacity-[.65] dark:bg-[#333333] dark:hover:bg-[#3a3a3a] dark:hover:text-opacity-100 rounded-md flex items-center px-4 py-3 duration-200 font-bold ${
            Icon && 'mr-6'
          }`}
        >
          {Icon && <Icon className="mr-2" />}
          {text}
        </div>
      </Link>
    ));
  };

  return (
    <section className="flex justify-between w-full border-b border-black/60 dark:border-white dark:border-opacity-20 py-4 px-1 items-center">
      <nav className="flex space-x-4">{renderlistingNav()}</nav>
      <div className="flex space-x-4">
        <AiOutlineHeart className="text-[#dfdede] text-3xl cursor-pointer " />
        <BsShare className="text-[#dfdede] text-3xl cursor-pointer " />
      </div>
    </section>
  );
};

export default ListingDetailsNav;
