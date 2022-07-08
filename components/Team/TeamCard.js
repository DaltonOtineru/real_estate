import Image from 'next/image';
import React from 'react';

const TeamCard = ({ src, name, title, smallCard }) => {
  return (
    <div
      className={`${
        smallCard ? 'col-span-6 lg:col-span-3' : 'col-span-12 lg:col-span-4'
      }`}
    >
      <div
        className={`${
          smallCard ? 'h-[250px]' : 'h-[400px]'
        } relative w-full  shadow-2xl`}
      >
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt={`Headshot of team member | ${name}`}
          priority={!smallCard && true}
        />
      </div>
      <h3 className="dark:text-white font-bold pt-2 text-lg">{name}</h3>
      <p className="dark:text-white/50 opacity-70 pb-2 font-medium">{title}</p>
      <div className="flex gap-2">
        <button className="flex-[.5] py-3 bg-[#1c1c1c] text-white font-bold dark:bg-white dark:text-black rounded-md">
          Call
        </button>
        <button className="flex-[.5] py-3 bg-[#1c1c1c] text-white font-bold dark:bg-white dark:text-black rounded-md">
          Email
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
