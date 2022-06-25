import React from 'react';

const ListingSpec = ({ Icon, value, spec }) => {
  return (
    <div className=" text-md text-black dark:text-white/70 flex items-center col-span-1">
      <Icon className="mr-2" />
      <span className="dark:text-white dark:text-opacity-70 ">
        {spec}:{' '}
        <span className="dark:text-white dark:text-opacity-50 ">{value}</span>{' '}
      </span>
    </div>
  );
};

export default ListingSpec;
