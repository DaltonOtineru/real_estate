import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

const FeaturedHome = ({ listing }) => {
  const { _id, address, zip_code, price, beds, baths, sq, time, coverPhoto } =
    listing;
  console.log(coverPhoto);
  return (
    <Link href="/" className="!cursor-pointer">
      <div className="mx-auto flex flex-col cursor-pointer max-w-[305px] justify-center">
        <div className="home__wrap relative w-full h-full rounded-md overflow-hidden duration-200">
          <Image
            src={coverPhoto}
            height={166}
            width={305}
            objectFit="cover"
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col max-w-full">
          <div className="flex justify-between py-1 items-center">
            <h6 className="font-bold text-lg dark:text-white opacity-90">
              {address}
            </h6>
            <p className="font-extrabold text-accent">{price}</p>
          </div>
          <p className="text-md dark:text-white opacity-[.87] py-1">
            {zip_code}
          </p>
          <div className="flex space-x-4">
            <div className="flex gap-x-4 text-sm text-black text-opacity-75 dark:text-white dark:text-opacity-40 ">
              <div className="flex items-center space-x-1">
                <FaBed />
                <span>{beds}</span>
              </div>
            </div>
            <div className="flex gap-x-4 text-sm text-black text-opacity-75 dark:text-white dark:text-opacity-40 ">
              <div className="flex items-center space-x-1">
                <FaBath />
                <span>{baths}</span>
              </div>
            </div>
            <div className="flex gap-x-4 text-sm text-black text-opacity-75 dark:text-white dark:text-opacity-40 ">
              <div className="flex items-center space-x-1">
                <FaRuler />
                <span>{sq}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedHome;

// #6EA679
