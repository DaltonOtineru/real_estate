import Head from 'next/head';
import React from 'react';
import Faq from '../components/FAQ/Faq';
import FaqMobileMenu from '../components/FAQ/FaqMobileMenu';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const faq = () => {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <Head>
        <title>FAQ | Berkshire Hathaway</title>
      </Head>
      <FaqMobileMenu />
      <main className="bg-white dark:bg-background w-full h-full font-sans">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 dark:border-white/10 mx-auto pb-6 xl:max-w-7xl">
              <h1 className="font-extrabold text-3xl text-center pb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-center text-medium font-medium">
                Have a question for us here at Berkshire Hathaway? Find your
                answers here!
              </p>
            </div>
          </div>
          <Faq />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default faq;
