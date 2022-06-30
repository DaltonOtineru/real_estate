import Link from 'next/link';
import React from 'react';

const NavLink = ({ text, path, cName, Icon, iconClass }) => {
  return (
    <Link href={path} className={cName}>
      <div className={`${Icon && 'flex'} cursor-pointer`}>
        {Icon && <Icon className={iconClass} />}
        {text}
      </div>
    </Link>
  );
};

export default NavLink;
