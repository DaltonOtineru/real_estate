import Link from 'next/link';
import React from 'react';
import { listingNavItems } from './ListingNavItems';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { useRouter } from 'next/router';

const ListingDetailsNav = () => {
  const { router } = useRouter();
  const renderlistingNav = () => {
    return listingNavItems.map(({ text, Icon, hidden, path }) => (
      <Link href={path} key={text}>
        <div
          className={`cursor-pointer text-opacity-80 border-[1px] border-black border-opacity-20 hover:border-opacity-90 dark:text-white dark:text-opacity-[.65] dark:bg-[#333333] dark:hover:bg-[#3a3a3a] dark:hover:text-opacity-100 dark:border-none rounded-md flex items-center  px-4 py-3 duration-200 font-bold text-base md:text-base ${
            Icon && 'lg:mr-6'
          } ${hidden && 'hidden sm:inline'}`}
        >
          {Icon && <Icon className="mr-2" />}
          {text}
        </div>
      </Link>
    ));
  };

  return (
    <section className="flex justify-between w-[95%] lg:w-full border-b border-black/60 dark:border-white dark:border-opacity-20 py-4 px-1 items-center mx-auto">
      <nav className="flex space-x-4">{renderlistingNav()}</nav>
      <div className="flex space-x-4">
        <AiOutlineHeart className="dark:text-[#dfdede] text-3xl cursor-pointer  lg:inline" />
        <BsShare className="dark:text-[#dfdede] text-3xl cursor-pointer  lg:inline" />
      </div>
    </section>
  );
};

export default ListingDetailsNav;
