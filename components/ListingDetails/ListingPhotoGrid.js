import { ViewGridIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentSlideState, modalState } from '../../atoms/modalAtom';

const ListingPhotoGrid = ({ listing, imageSrcs }) => {
  const { coverPhoto, photoId } = listing;
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useRecoilState(currentSlideState);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (src) => {
    setCurrent(imageSrcs.indexOf(`${src}`));
    setShowModal(true);
  };

  console.log(imageSrcs.indexOf(`/details/${photoId}Two.webp`));

  return (
    <>
      {mounted && (
        <section className=" xl:px-0 grid grid-cols-12 lg:w-full gap-3 pt-6 h-[400px] w-[95%] mx-auto">
          <div className="col-span-12 lg:col-span-6 max-h-[450px] px-0 md:px-0">
            <div
              className="w-full h-full aspect-[16/10] relative rounded-xl cursor-pointer"
              onClick={() => openModal(coverPhoto)}
            >
              <ViewGridIcon className="text-black h-10  w-10  absolute lg:hidden bg-white rounded-md top-1.5 right-1.5 z-40 p-2 " />
              <Image
                src={coverPhoto}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 col-span-3 gap-y-2">
            <div
              className="relative  w-full aspect-[16/10] cursor-pointer h-full rounded-md"
              onClick={() => openModal(`/details/${photoId}One.webp`)}
            >
              <Image
                src={`/details/${photoId}One.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
            <div
              className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full"
              onClick={() => openModal(`/details/${photoId}Two.webp`)}
            >
              <Image
                src={`/details/${photoId}Two.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 col-span-3 gap-y-2">
            <div
              className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full"
              onClick={() => openModal(`/details/${photoId}Three.webp`)}
            >
              <Image
                src={`/details/${photoId}Three.webp`}
                className="w-full h-full object-cover rounded-md hover:opacity-80 duration-200"
                alt="Listing image of property"
                layout="fill"
              />
            </div>
            <div
              className="relative rounded-md w-full aspect-[16/10] cursor-pointer h-full"
              onClick={() => openModal(`/details/${photoId}Four.webp`)}
            >
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
