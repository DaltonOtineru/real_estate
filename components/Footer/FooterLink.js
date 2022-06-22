import Link from 'next/link';
import React from 'react';

const FooterLink = ({ path, text }) => {
  return (
    <Link href={path} className="footer__link">
      <a className="footer__link">{text}</a>
    </Link>
  );
};

export default FooterLink;
