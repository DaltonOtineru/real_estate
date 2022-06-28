import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ListingPhotoGrid = ({ listing }) => {
  const { coverPhoto, photoId } = listing;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <section className=" xl:px-0 grid grid-cols-12 lg:w-full gap-3 pt-6 h-[400px] w-[95%] mx-auto">
          <div className="col-span-12 lg:col-span-6 max-h-[450px] px-0 md:px-0">
            <div className="w-full h-full aspect-[16/10] relative rounded-xl cursor-pointer">
              <Image
                src={coverPhoto}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 col-span-3 gap-y-2">
            <div className="relative  w-full aspect-[16/10] cursor-pointer h-full rounded-md">
              <Image
                src={`/details/${photoId}One.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
            <div className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full">
              <Image
                src={`/details/${photoId}Two.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />{' '}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 col-span-3 gap-y-2">
            <div className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full">
              <Image
                src={`/details/${photoId}Three.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
            <div className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full">
              <Image
                src={`/details/${photoId}Four.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ListingPhotoGrid;
