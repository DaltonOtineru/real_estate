import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <Navigation />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
