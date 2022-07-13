import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import TeamCard from '../components/Team/TeamCard';

const team = () => {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <Head>
        <title>Our Team | Berkshire Hathaway</title>
      </Head>
      <main className="bg-white dark:bg-background w-full h-full font-sans ">
        <Navigation listingShadow guide />
        <section className="mt-[86px] pb-12">
          <div className="w-full py-12">
            <div className="w-full px-4 flex flex-col items-center justify-center border-b-[1px] border-black/20 dark:border-white/10 mx-auto pb-6 xl:max-w-7xl">
              <h1 className="font-extrabold text-3xl text-center pb-4">
                Meet the Team
              </h1>
              <p className="text-center text-medium font-medium">
                We Have a Full Team Of Office Staff and Realtors Ready To Help
                You
              </p>
            </div>
          </div>
          <section className="w-[95%] lg:w-3/4 mx-auto max-w-6xl pb-8">
            <div className="flex flex-col px-1 lg:px-0">
              <h2 className="text-3xl font-bold pb-2">Office</h2>
              <div className="grid grid-cols-12 gap-y-8 gap-2 lg:gap-10 pb-10">
                <TeamCard
                  src="/team/rick.svg"
                  name="Rip Fritzer"
                  title="Owner | Broker"
                />
                <TeamCard
                  src="/team/joslin.svg"
                  name="Joslin Hinojosa"
                  title="Admin"
                />
                <TeamCard
                  src="/team/amanda.svg"
                  name="Amanda Molina"
                  title="Admin"
                />
              </div>
              <h2 className="text-3xl font-bold pb-2">Agents</h2>
              <div className="grid grid-cols-12 gap-6 lg:gap-10 px-1 lg:px-0">
                <TeamCard
                  src="/team/moses.webp"
                  name="Moses Clement"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/aaron.webp"
                  name="Aaron Miller"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/angela.webp"
                  name="Angela Alaniz"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/lana.webp"
                  name="Lana Leo"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/mitzie.webp"
                  name="Mitzie Perkins"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/patricia.webp"
                  name="Patricia Guerra"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/rebecca.webp"
                  name="Rebecca Chamber"
                  title="Realtor"
                  smallCard
                />
                <TeamCard
                  src="/team/tony.webp"
                  name="Tony Saldana"
                  title="Realtor"
                  smallCard
                />
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default team;
