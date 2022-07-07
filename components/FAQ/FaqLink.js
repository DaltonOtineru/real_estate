import React from 'react';

const FaqLink = ({ Icon, text, path }) => {
  return (
    <li className="flex items-center rounded-lg w-[80%] group hover:bg-[#EAEAEB] py-2 px-3 transition duration-200 ease-out dark:opacity-[.65] dark:hover:bg-white/10 dark:hover:opacity-100 text-sm cursor-pointer">
      <a href={path} className="flex gap-2 items-center">
        <Icon className="h-6 inline-block" />
        {text}
      </a>
    </li>
  );
};

export default FaqLink;
