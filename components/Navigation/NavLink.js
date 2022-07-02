import {
  CalculatorIcon,
  KeyIcon,
  MapIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';

const NavLink = ({
  text,
  path,
  cName,
  Icon,
  iconClass,
  dropdownLink,
  dropData,
  bottom,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const dropDownData = [
    {
      title: 'Buy',
      text: 'Browse Coastal Bend Listings',
      Icon: MapIcon,
    },
    {
      title: 'Sell',
      text: 'List Your Home With Berkshire Hathaway',
      Icon: ShoppingBagIcon,
    },
    {
      title: 'Rent',
      text: 'Find Your Next Rental and Start An Application',
      Icon: KeyIcon,
    },
    {
      title: 'Mortgage Calculator',
      text: 'Crunch the numbers | Determine your home budget',
      Icon: CalculatorIcon,
    },
  ];

  return (
    <div className={cName}>
      <Link href={path}>
        <div
          className="flex cursor-pointer nav__item"
          onMouseOver={() => setDropdown(true)}
        >
          {Icon && <Icon className={iconClass} />}
          <span>
            {text}
            <div className="animated__underline"></div>
          </span>
        </div>
      </Link>
      {dropdownLink && (
        <div
          className={`group-hover:flex hidden absolute -bottom-${bottom} left-0 bg-white dark:bg-[#1c1c1c] text-black/90 w-[450px] py-10 px-12 rounded-xl z-[60] mt-2 duration-200 shadow-2xl`}
        >
          <div className="flex flex-col">
            <ul className="flex flex-col space-y-4">
              {dropData.map(({ title, text, Icon, path }) => (
                <Link href={path} key={title}>
                  <li className="flex items-center group">
                    <div className="flex mb-auto dark:text-white/40 group-hover:text-opacity-100">
                      <Icon className="w-5 h-5 " />
                    </div>
                    <div className="flex flex-col ml-1.5 leading-[17px]">
                      <h3 className="text-[15px] font-bold dark:text-white/70 group-hover:dark:text-opacity-100">
                        {title}
                      </h3>
                      <p className="text-[14px] text-black/70 dark:text-white/50">
                        {text}
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
