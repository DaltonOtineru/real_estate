import React from 'react';
import GuideList from '../components/GuideList/GuideList';

import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import { buyersGuideData } from '../data/buyersGuideData';
import Navigation from '../components/Navigation/Navigation';

const buyersguide = () => {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <main className="bg-white dark:bg-background w-full h-full font-sans overflow-hidden">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full lg:w-5/6 px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 mx-auto pb-6">
              <h1 className="font-extrabold text-3xl text-center pb-4">
                First Time Home Buyers Guide
              </h1>
              <p className="text-center text-medium font-medium">
                We Help First Time Home Buyers Move Smoothly Through The Process
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 px-4 lg:w-5/6 mx-auto">
            <GuideList guideData={buyersGuideData} />
            {/* Form */}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default buyersguide;
