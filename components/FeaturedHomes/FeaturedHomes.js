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
    <section className="w-full pt-8" id="featured__listings" name="featured">
      <div className="max-w-[1300px] mx-auto p-4">
        <h2 className="mr-auto w-[305px] sm:w-full pb-4 text-xl font-bold dark:text-white dark:opacity-[.87]">
          Featured Listings
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-4 pb-8">
          {renderFeatured()}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomes;
