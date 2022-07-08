import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer/Footer';
import GuideList from '../components/GuideList/GuideList';
import Navigation from '../components/Navigation/Navigation';
import { becomeRealtorData } from '../data/becomeRealtorData';

const careers = () => {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <Head>
        <title>Careers | Berkshire Hathaway</title>
      </Head>
      <main className="bg-white dark:bg-background w-full h-full font-sans ">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full  px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 dark:border-white/10 mx-auto pb-6 xl:max-w-7xl">
              <h1 className="font-extrabold text-3xl text-center pb-4">
                Join The Team and Become a Realtor
              </h1>
              <p className="text-center text-medium font-medium">
                We create an atmosphere condusive to growth, for both new and
                seasoned agents.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 px-6 lg:px-12 lg:space-x-12 mx-auto relative max-w-[1400px]">
            <GuideList guideData={becomeRealtorData} />
            <div className="col-span-12 lg:col-span-5 flex items-start justify-center my-8 lg:my-0">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/team.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  alt="Berkshire Hathaway Team"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default careers;
