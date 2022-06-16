import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
  return (
    <div id="root" className=" min-h-screen min-w-screen font-sans">
      <Head>
        <title>Berkshire Hathaway</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* className="h-6 w-6 lg:hidden cursor-pointer" */}
      <main className="dark:bg-black w-full h-full font-sans">
        <Navigation />
        <Hero />
      </main>
    </div>
  );
}
