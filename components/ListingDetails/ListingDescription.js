import React from 'react';
import {
  FaBed,
  FaBath,
  FaRuler,
  FaSnowflake,
  FaThermometerThreeQuarters,
  FaHardHat,
  FaRulerCombined,
  FaTree,
  FaClock,
  FaCalendarAlt,
} from 'react-icons/fa';
import { GiStairs } from 'react-icons/gi';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import ListingSpec from './ListingSpec';
import ListingMap from './ListingMap';

const ListingDescription = ({ listing }) => {
  const {
    _id,
    address,
    zip_code,
    lat,
    long,
    price,
    beds,
    baths,
    sq,
    time,
    description,
    propertyType,
    pricePerSqft,
    lotSize,
    daysOnMarket,
    yearBuilt,
    ac,
    foundation,
    heat,
    floor,
  } = listing;

  return (
    <section className="grid grid-cols-12 w-[95%] lg:w-full pt-4 lg:pt-2 md:mt-[80px] lg:mt-0 mx-auto sm:mt-[50px] border-b-[1px] pb-4 dark:border-white/10">
      <div className="flex flex-col col-span-12 lg:col-span-7">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl dark:text-[#dfdede] font-extrabold">
            {address}
          </h1>
          <p className="text-accent text-2xl font-extrabold">{price}</p>
        </div>
        <p className="text-black text-opacity-70 dark:text-white dark:text-opacity-40 text-lg font-medium pb-3">
          {zip_code}
        </p>
        <div className="pb-4 flex space-x-6 border-b-[1px] dark:border-white/10">
          <div className="font-bold text-md text-black dark:text-white/70 flex items-center">
            <FaBed className="mr-2" />
            {beds}
          </div>
          <div className="font-bold text-md text-black dark:text-white/70 flex items-center">
            <FaBath className="mr-2" />
            {baths}
          </div>
          <div className="font-bold text-md text-black dark:text-white/70 flex items-center">
            <FaRuler className="mr-2" />
            {sq}
          </div>
        </div>
        <div
          className="py-4 flex flex-col border-b-[1px] dark:border-white/10"
          id="listing__description"
        >
          <h3 className="text-xl dark:text-[#dfdede] font-bold">
            Property Description
          </h3>
          <p className="text-black dark:text-white/50">{description}</p>
        </div>
        <div className="pb-4 border-b-[1px] dark:border-white/10">
          <h3 className="text-xl dark:text-[#dfdede] font-bold py-2 ">
            Property Specs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <ListingSpec
              Icon={BsFillHouseDoorFill}
              spec="Property Type"
              value={propertyType}
            />
            <ListingSpec Icon={FaRulerCombined} spec="Price/Sqft" value={sq} />
            <ListingSpec Icon={FaClock} spec="Year Built" value={yearBuilt} />
            <ListingSpec Icon={FaTree} spec="Lot" value={lotSize} />
            <ListingSpec
              Icon={FaCalendarAlt}
              spec="Days On Market"
              value={daysOnMarket}
            />
          </div>
        </div>
        <div className="pb-4 border-b-[1px] dark:border-white/10">
          <h3 className="text-xl dark:text-[#dfdede] font-bold py-2 ">
            Property Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <ListingSpec
              Icon={FaSnowflake}
              spec="Air Conditioning"
              value={ac}
            />
            <ListingSpec
              Icon={FaThermometerThreeQuarters}
              spec="Heating"
              value={heat}
            />
            <ListingSpec Icon={GiStairs} spec="Flooring" value={floor} />
            <ListingSpec
              Icon={FaHardHat}
              spec="Foundation"
              value={foundation}
            />
          </div>
        </div>
        <section className="py-4" id="listing__map">
          <ListingMap lat={lat} long={long} />
        </section>
      </div>
      <div className="col-span-12 lg:col-span-5 lg:ml-12 mt-2 flex items-start justify-start relative h-full">
        <div className="w-full rounded-lg shadow-2xl hover:shadow-2xl border-[1px] dark:border-white/10 dark:hover:border-white/20 duration-200 my-4 lg:my-0 lg:sticky lg:top-[7rem]">
          <form className="px-6 py-10 flex flex-col">
            <h3 className="text-lg dark:text-[#dfdede] font-bold">
              Request More Info
            </h3>
            <p className="mb-2">We will get back with you within 24hrs</p>
            <label className="text-sm dark:text-white/50">Full Name</label>
            <input className="bg-black bg-opacity-[0.07] dark:bg-opacity-100 dark:bg-[#282828] rounded border-none outline-none py-1 mb-2 px-2" />
            <label className="text-sm dark:text-white/50">Email</label>
            <input className="bg-black bg-opacity-[0.07] dark:bg-opacity-100 dark:bg-[#282828] rounded border-none outline-none py-1 mb-2 px-2" />
            <label className="text-sm dark:text-white/50">Message</label>
            <textarea
              rows="2"
              className="dark:bg-[#282828] rounded border-none outline-none resize-none mb-3 py-1 px-2 bg-black bg-opacity-[0.07] dark:bg-opacity-100 placeholder:text-black dark:placeholder:text-white"
              placeholder={`I am interested in ${address}`}
            />
            <button
              type="submit"
              className="bg-[#626F76] dark:bg-accent rounded border-none outline-none text-white py-3 hover:bg-opacity-80 dark:hover:bg-opacity-40 duration-200"
            >
              Get More Info
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ListingDescription;
