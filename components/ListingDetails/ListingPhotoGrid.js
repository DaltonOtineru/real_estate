import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ListingPhotoGrid = ({ listing }) => {
  const { coverPhoto, imgOne, imgTwo, imgThree, imgFour } = listing;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(imgTwo);
  return (
    <>
      {mounted && (
        <section className=" xl:px-0 grid grid-cols-12 lg:w-full gap-3 pt-6 h-[400px] w-[95%] mx-auto">
          <div className="col-span-12 lg:col-span-6 max-h-[450px] px-0 md:px-0">
            <div className="w-full h-full aspect-[16/10] relative rounded-xl cursor-pointer">
              <img
                src={coverPhoto}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
              />
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 col-span-3 gap-y-2">
            <div className="relative  w-full aspect-[16/10] cursor-pointer h-full rounded-md">
              <img
                src={imgOne}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
              />
            </div>
            <div className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full">
              <img
                src={imgOne}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
              />{' '}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 col-span-3 gap-y-2">
            <div className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full">
              <img
                src={imgFour}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
              />
            </div>
            <div className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full">
              <img
                src={imgFour}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ListingPhotoGrid;
