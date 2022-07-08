import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
// import { listingData } from '../../data/listingsData';
import FeaturedHome from './FeaturedHome';

const FeaturedHomes = ({ listingData }) => {
  const renderFeatured = () => {
    return listingData.map((listing) => (
      <FeaturedHome key={listing._id} listing={listing} />
    ));
  };

  return (
    <section className="w-full pt-8" id="featured__listings">
      <div className="max-w-[1300px] mx-auto p-4">
        <h2 className="mr-auto w-[305px] sm:w-full pb-4 text-xl font-bold dark:text-white dark:opacity-[.87]">
          Featured Listings
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-4 pb-8">
          {renderFeatured()}
        </div>

        <Link href="/">
          <div className=" text-black hover:text-opacity-75 dark:text-white dark:text-opacity-40 group dark:hover:text-opacity-[.87] cursor-pointer duration-200 text-lg mx-auto w-[305px] sm:w-full">
            Browse All Listings
            <BsArrowRight className="inline ml-2 dark:group-hover:opacity-[.87] group-hover:translate-x-1 text-lg font-extrabold group-hover:text-xl duration-200" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedHomes;
