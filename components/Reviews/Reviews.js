import React, { useState } from 'react';
import { rowOneData, rowThreeData, rowTwoData } from '../../data/reviewData';
import ReviewRow from './ReviewRow';

const Reviews = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="w-[95%] lg:w-5/6 max-w-[1400px] mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-3 gap-6 lg:gap-x-6 w-full">
        <ReviewRow
          rowData={rowOneData}
          isExpanded={isExpanded}
          hiddenThird="false"
        />
        <ReviewRow
          rowData={rowTwoData}
          isExpanded={isExpanded}
          hiddenThird="false"
        />
        <ReviewRow
          rowData={rowThreeData}
          hiddenThird="true"
          isExpanded={isExpanded}
        />
      </div>
      <div className="w-full flex justify-center py-8 pt-8">
        <button
          className="text-lg bg-[#1c1c1c] text-white px-6 py-4 rounded-lg shadow-lg font-medium hover:bg-opacity-70 transition duration-300 dark:bg-[#232323] dark:hover:bg-[#383838] ease-out"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Reviews;
