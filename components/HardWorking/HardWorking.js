import Image from 'next/image';
import React from 'react';

const Transactions = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="mx-auto max-w-[1300px] grid grid-cols-12">
        <div className="hidden lg:flex col-span-6 relative p-5 ">
          <Image
            src={'/../public/team.jpeg'}
            // layout="fill"
            height={350}
            width={500}
            objectFit="cover"
            className="rounded-lg"
            alt="Berkshire Team"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 px-2 lg:p-5 space-y-3">
          <h3 className="text-muted font-bold text-sm">
            Smooth Real Estate Transactions
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary leading-normal">
            Our Office Staff Is Dedicated To{' '}
            <span className="text-accent">Smooth</span> Real Estate Transactions
          </h2>
          <p className="text-md text-muted leading-relaxed pb-2 lg:py-4">
            We not only have have residential, commercial, and land specialists
            walking you through the deal, we have a full office staff working
            together with our Realtors.
          </p>
          <blockquote className="text-accent text-lg md:text-xl lg:text-lg font-semibold border-accent border-l-8 pl-2 leading-relaxed ">
            More eyes on the deal means fewer mistakes and efficient execution
            of the nitty gritty details.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
