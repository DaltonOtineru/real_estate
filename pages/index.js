import Head from 'next/head';
import Transactions from '../components/Transactions/Transactions';
import Hero from '../components/Hero/Hero';
import Perks from '../components/Perks/Perks';
import HardWorking from '../components/HardWorking/HardWorking';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Toolbreak from '../components/Toolbreak/Toolbreak';
import FeaturedHomes from '../components/FeaturedHomes/FeaturedHomes';
import Layout from '../components/Layout/Layout';
import { listingData } from '../data/listingsData';

export default function Home({ listingData }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <Head>
        <title>Berkshire Hathaway</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {mounted && (
        <main className="bg-white dark:bg-background w-full h-full font-sans">
          <Layout>
            <Hero />
            <FeaturedHomes listingData={listingData} />
            <HardWorking />
            <Transactions />
            <Perks />
            <Toolbreak />
          </Layout>
        </main>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      listingData: listingData,
    },
  };
};
