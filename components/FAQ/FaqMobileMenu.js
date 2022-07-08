import React from 'react';
import FaqLink from './FaqLink';
import FaqNavbar from './FaqNavbar';

const FaqMobileMenu = () => {
  return (
    <nav className="fixed p-4 bg-black  w-[100vw] lg:hidden bottom-0 left-0 right-0 z-20">
      <ul className="w-full flex gap-x-4 text-white">
        <FaqNavbar mobile />
      </ul>
    </nav>
  );
};

export default FaqMobileMenu;
