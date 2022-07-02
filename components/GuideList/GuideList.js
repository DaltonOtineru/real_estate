import React from 'react';

const GuideList = ({ guideData }) => {
  const renderGuideData = () => {
    return guideData.map(({ Icon, title, text }) => (
      <div className="flex flex-col items-start py-4 space-y-1" key={title}>
        <div className="flex items-center">
          <Icon className="h-11 w-11 p-2 bg-[#EAEBEE] dark:bg-white/20 text-black dark:text-white rounded-full mr-2" />
          <h3 className="font-bold text-lg dark:text-opacity-[.87]">{title}</h3>
        </div>
        <p className="leading-relaxed lg:text-lg pl-1 dark:opacity-[.45] font-semibold">
          {text}
        </p>
      </div>
    ));
  };

  return (
    <div className="col-span-12 lg:col-span-7 flex flex-col space-y-1">
      {renderGuideData()}
    </div>
  );
};

export default GuideList;
