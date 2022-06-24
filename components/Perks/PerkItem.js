import React from 'react';

const PerkItem = ({ Icon, title, text }) => {
  return (
    <div className="px-4 flex col-span-12 sm:col-span-6 lg:col-span-3 space-x-2 mb-12 lg:mb-0 items-start">
      <div className=" ">
        <div className="p-2 h-12 w-12 bg:[#EAEAEB] bg-white/70 dark:bg-[#222222] rounded-lg mr-2">
          <Icon className="text-black dark:text-[#52898a] font-bold h-full w-full" />
        </div>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-bold text-base dark:text-[#dfdede]">{title}</h3>
        <p className="text-base text-[#242424] dark:text-[#a7a7a7] m-0">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PerkItem;
