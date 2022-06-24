import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const HardWorking = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="grid grid-cols-12 mx-auto max-w-[1300px]">
        <div className="flex flex-col col-span-12 lg:col-span-6 p-5">
          <h3 className="text-sm dark:text-[#a7a7a7] font-bold">
            Hard Working Agents
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-[#dfdede] leading-normal py-3">
            Real Estate Is <span className="text-[#52898a]">Simple</span> With A
            Berkshire Hathaway Real Estate Professional
          </h2>
          <p className="dark:text-[#a7a7a7] text-md leading-relaxed">
            We have been helping San Diego Families Buy and Sell Real Estate for
            over 25 years. We would love to serve you too.
          </p>
          <h6 className="dark:text-[#dfdede] text-md font-semibold pt-3">
            Connect With Us
          </h6>
          <blockquote className="dark:text-[#a7a7a7] text-sm leading-relaxed pb-3 ">
            We have Residential, Commercial, and Rental specialists ready to
            walk you through the process, no matter your needs.
          </blockquote>
          <button className="rounded-md bg-[#f3f3f3] text-[#121212] py-3 px-4 mr-3 border-transparent border-2 hover:bg-transparent hover:border-[#f3f3f3] hover:text-[#f3f3f3] duration-300 font-medium max-w-[fit-content] flex items-center">
            Find An Agent
            <BsArrowRight className="inline ml-3" />
          </button>
        </div>
        <div className="hidden lg:flex col-span-6 p-5 justify-center text__wrap rounded-xl relative">
          <Image
            src={'/../public/text.png'}
            height={300}
            width={300}
            // layout="fill"
            // className="rounded-xl shadow-xl"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HardWorking;
