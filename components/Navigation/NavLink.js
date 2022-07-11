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
  handleMobileMenu,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className={cName}
      onClick={!dropdownLink ? () => handleMobileMenu() : () => {}}
    >
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
          className={`group-hover:flex hidden absolute -bottom-${bottom} -left-10 bg-white dark:bg-[#1c1c1c] text-black/90 w-[450px] py-10 px-12 rounded-xl z-[60] mt-2 transition duration-500 shadow-2xl`}
        >
          <div className="flex flex-col">
            <ul className="flex flex-col space-y-4">
              {dropData.map(({ title, text, Icon, path }) => (
                <Link href={path} key={title}>
                  <li className="flex items-center group">
                    <div className="flex mb-auto dark:text-white dark:opacity-90 ">
                      <Icon className="w-5 h-5 " />
                    </div>
                    <div className="flex flex-col ml-1.5 leading-[17px] group">
                      <h3 className="text-[15px] font-bold dark:text-white dark:opacity-90 ">
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
