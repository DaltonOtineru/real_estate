import React from 'react';
import GuideList from '../components/GuideList/GuideList';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import { marketingGuideData } from '../data/marketingGuideData';
import GuideForm from '../components/GuideForm/GuideForm';

const marketingGuide = () => {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <main className="bg-white dark:bg-background w-full h-full font-sans overflow-hidden">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full  px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 dark:border-white/10 mx-auto pb-6 xl:max-w-7xl">
              <h1 className="font-extrabold text-3xl text-center pb-4">
                List Your Home With Gomez Properties
              </h1>
              <p className="text-center text-medium font-medium">
                With our listing program, we make it easy to sell your property
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 px-6 lg:px-12 lg:space-x-12 mx-auto relative  xl:max-w-7xl">
            <GuideList guideData={marketingGuideData} />
            <GuideForm inputLabel="Address" />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default marketingGuide;