import React from 'react';
import Footer from '../components/Footer/Footer';
import MortgageCalc from '../components/MortgageCalc/MortgageCalc';
import Navigation from '../components/Navigation/Navigation';

const prequalify = () => {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <main className="bg-white dark:bg-background w-full h-full font-sans ">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full  px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 dark:border-white/10 mx-auto pb-6 xl:max-w-7xl">
              <h1 className="font-extrabold text-2xl sm:text-3xl text-center pb-4">
                Start The Pre-Qualification Process
              </h1>
              <p className="text-center text-medium font-medium">
                Find out your budget for your future home!
              </p>
            </div>
          </div>
          <MortgageCalc />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default prequalify;
