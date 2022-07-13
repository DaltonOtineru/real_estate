import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSingle = ({ data, isExpanded, hiddenThird }) => {
  const { name, review, Icon, lastTwo } = data;
  return (
    <article
      key={name}
      className={`col-span-1 p-4 flex flex-col rounded-lg shadow-md h-auto dark:bg-[#232323] ${
        hiddenThird === true && 'hidden lg:flex'
      } ${!isExpanded && lastTwo === true ? 'hidden' : ''}
            transition-all duration-300
            `}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold dark:opacity-90">{name}</p>
        <Icon className="h-6 w-6" />
      </div>
      <div className="w-full flex gap-x-1 mb-3 mt-1">
        <FaStar className="dark:text-[#E1B94E] text-[#F9CE55] h-4 w-4" />
        <FaStar className="dark:text-[#E1B94E] text-[#F9CE55] h-4 w-4" />
        <FaStar className="dark:text-[#E1B94E] text-[#F9CE55] h-4 w-4" />
        <FaStar className="dark:text-[#E1B94E] text-[#F9CE55] h-4 w-4" />
        <FaStar className="dark:text-[#E1B94E] text-[#F9CE55] h-4 w-4" />
      </div>
      <div>
        <p className="font-medium text-base dark:opacity-70">{review}</p>
      </div>
    </article>
  );
};

export default ReviewSingle;
