import React from 'react';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="grid grid-cols-12 max-w-[90%] lg:max-w-[900px] mx-auto py-12">
        <div className="footer__section">
          <div className="lg:mx-auto flex flex-col">
            <h4 className="footer__header">Services</h4>
            <FooterLink text="Browse For Sale" path="/" />
            <FooterLink text="Browse Rentals" path="/" />
            <FooterLink text="List Your Property" path="/" />
          </div>
        </div>
        <div className="footer__section">
          <div className="lg:mx-auto flex flex-col">
            <h4 className="footer__header">Company</h4>
            <FooterLink text="Our Team" path="/" />
            <FooterLink text="Careers" path="/" />
            <FooterLink text="FAQ" path="/" />
          </div>
        </div>
        <div className="footer__section">
          <div className="lg:mx-auto flex flex-col">
            <h4 className="footer__header">Learn</h4>
            <FooterLink text="Buyers Guide" path="/" />
            <FooterLink text="Sellers Guide" path="/" />
            <FooterLink text="Mortgage Calculator" path="/" />
          </div>
        </div>
        <div className="footer__section">
          <div className="lg:mx-auto flex flex-col">
            <h4 className="footer__header">Legal</h4>
            <FooterLink text="IABS" path="/" />
            <FooterLink text="Consumer Protection" path="/" />
            <FooterLink text="Terms of Use" path="/" />
          </div>
        </div>
      </div>
      <p className="text-center w-full pt-6 pb-3 text-xs font-light text-black/80 dark:text-white dark:opacity-[.37]">
        Berkshire Hathaway &copy; 2022
      </p>
    </footer>
  );
};

export default Footer;
