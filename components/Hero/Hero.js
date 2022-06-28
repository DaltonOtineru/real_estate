import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#000] bg-opacity-100 overlay">
      <Image
        src={'/../public/hero_bg.jpg'}
        layout="fill"
        objectFit="cover"
        className="opacity-25 relative"
        alt="Background image of a house"
        priority
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 grid place-items-center">
        <div className="grid grid-cols-12 mx-auto max-w-[1300px]">
          <div className="text-left col-span-12 lg:col-span-6 max-w-[95%] lg:max-w-full mx-auto lg:mx-0 lg:flex lg:flex-col lg:items-center lg:pl-6">
            <h1 className="text-[#dfdede] text-5xl lg:text-6xl font-bold w-full">
              Marketing Makes <br />
              <span className="text-[#52898a]">The Difference</span>
            </h1>
            <p className="text-[#a7a7a7] pt-2 text-xl md:max-w-[80%] lg:max-w-[100%]">
              Berkshire Hathaway is a full service brokerage, serving San Diego
              and the surrounding areas for the last 3 decades. Buy, Sell & Rent
              with us today.
            </p>
            <div className="flex w-full justify-start mt-4">
              <button className="rounded-md bg-[#f3f3f3] text-[#121212] py-3 px-4 mr-3 border-transparent border-2 hover:bg-transparent hover:border-[#f3f3f3] hover:text-[#f3f3f3] duration-300 font-medium">
                Browse Homes
              </button>
              <button className="rounded-md text-white border-[#f3f3f3] border-2 py-3 px-4  hover:border-[#52898a] hover:text-[#52898a] duration-300 ease font-medium">
                Find An Agent
              </button>
            </div>
          </div>
          <div className="flex justify-end col-span-6">
            <form
              action="post"
              className="hidden lg:flex flex-col  px-6 py-6 max-w-[440px] bg-[#1c1c1c] rounded-lg"
            >
              <h3 className="text-2xl text-[#f5f5f5]">
                How Much Is Your Home Worth?
              </h3>
              <p className="text-[#a7a7a7] text-lg pb-2">
                Receive a personalized estimate via email within 24hrs
              </p>
              <div className="flex flex-col mx-auto w-full">
                <p className="text-xs text-[#a7a7a7]">Full Name</p>
                <input
                  type="text"
                  className="bg-[#dfdede] dark:bg-[#333] rounded py-2 mb-4 focus:outline-none dark:text-white pl-2"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-[#a7a7a7]">Email</p>
                <input
                  type="text"
                  className="bg-white dark:bg-[#333] rounded py-2 mb-4 focus:outline-none text-white pl-2"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-[#a7a7a7]">Address</p>
                <input
                  type="text"
                  className="bg-white dark:bg-[#333] rounded py-2 mb-4 focus:outline-none text-white pl-2"
                />
              </div>
              <button className=" rounded bg-[#333] text-white py-3 mt-4 hover:bg-opacity-70 transition ease duration-300">
                Get Your Home Value
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
