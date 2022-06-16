import Link from 'next/link';
import React from 'react';

const NavLink = ({ text, path }) => {
  return (
    <Link href={path} className="">
      {text}
    </Link>
  );
};

export default NavLink;
