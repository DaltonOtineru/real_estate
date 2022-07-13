import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const contact = () => {
  return (
    <div id="root" className=" min-w-screen font-sans">
      <Head>
        <title>Contact Us | Berkshire Hathaway</title>
      </Head>
      <main className="bg-white dark:bg-background w-full h-full font-sans">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full lg:w-5/6 px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 dark:border-white/10 mx-auto pb-6 xl:max-w-7xl">
              <h1 className="font-extrabold text-3xl text-center pb-4">
                Contact Us
              </h1>
              <p className="text-center text-medium font-medium">
                We&apos;d love to hear from you!
              </p>
            </div>
          </div>
          <section className="w-full lg:flex items-center justify-center py-8">
            <div className="mx-auto max-w-[95%] md:max-w-3xl lg:max-w-4xl bg-gray-200/80 dark:bg-[#222222] rounded-lg shadow-xl">
              <div className="w-full p-8 flex-col-reverse flex lg:flex-row">
                <div className="hidden sm:flex flex-col sm:flex-row lg:flex-col  py-6 lg:justify-evenly justify-between flex-[.33] space-y-4 sm:space-y-0">
                  <div className="border-l-[3px] border-black/70 dark:border-white/20 pl-2">
                    <h3 className="font-bold opacity-[.87]">Location</h3>
                    <p className="contact__detail">4814 Cain Dr.</p>
                    <p className="contact__detail">Corpus Christi, Tx</p>
                  </div>
                  <div className="border-l-[3px] border-black/70 dark:border-white/20 pl-2">
                    <h3 className="font-bold opacity-[.87]">Hours</h3>
                    <p className="contact__detail">Monday - Friday</p>
                    <p className="contact__detail">9am - 5pm</p>
                  </div>
                  <div className="border-l-[3px] border-black/70 dark:border-white/20 pl-2">
                    <h3 className="font-bold opacity-[.87]">Direct</h3>
                    <p className="contact__detail">858.261.7590</p>
                    <p className="contact__detail">
                      help@berkshirehathaway.com
                    </p>
                  </div>
                </div>
                <div className="col-span-2 flex flex-[.67] flex-col">
                  <h2 className="font-bold text-4xl pb-3 dark:opacity-[.87]">
                    Reach Out Directly
                  </h2>
                  <p className="font-medium pb-3 dark:opacity-60">
                    We would love to hear from you and answer any questions that
                    are not answered in our FAQ section.
                  </p>
                  <label className="font-medium dark:opacity-50">
                    Full Name
                  </label>
                  <input className="contact__input" />
                  <label className="font-medium dark:opacity-50">Email</label>
                  <input className="contact__input" />
                  <label className="font-medium dark:opacity-50">Phone</label>
                  <input className="contact__input" />

                  <label className="font-medium dark:opacity-50">Message</label>
                  <textarea rows="4" className="contact__input resize-none" />
                  <button className="bg-[#1c1c1c] text-white font-bold py-3 rounded-md my-3">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default contact;
