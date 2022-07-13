import React from 'react';

const Toolbreak = () => {
  return (
    <aside className="mx-auto py-2 w-full flex items-center">
      <div className="w-5/6 max-w-[1400px] flex mx-auto align-middle items-center lg:pb-10">
        <div className="h-1 flex-grow border-b-2 border-b-black/90 dark:bg-white/80 dark:opacity-20 border-solid flex-end opacity-50"></div>
        <div className="font-bold flex-shrink px-2 lg:px-6 text-black/60 dark:text-white dark:opacity-[.65] text-sm lg:text-lg text-center">
          Our Clients Come Back Again & Again
        </div>
        <div className="h-1 flex-grow border-b-2 border-b-black/90 dark:bg-white/80 dark:opacity-20 border-solid flex-start opacity-50"></div>
      </div>
    </aside>
  );
};

export default Toolbreak;
