import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { currentSlideState, modalState } from '../../atoms/modalAtom';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from '@heroicons/react/solid';
import { ViewGridIcon } from '@heroicons/react/outline';

const ListingModal = ({
  listing: { photoId, coverPhoto, address },
  imageSrcs,
}) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [current, setCurrent] = useRecoilState(currentSlideState);

  const length = imageSrcs.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!Array.isArray(imageSrcs) || imageSrcs.length <= 0) {
    return null;
  }

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      className="!fixed !top-0 !left-0 !right-0 !bottom-0 duration-300 flex justify-center items-center"
    >
      <>
        <div className="w-full h-full flex items-center justify-center !z-40 ">
          <div className="aspect-[16/10] relative !z-50 w-[98vw] h-[auto] lg:w-[1000px] lg:h-[700px] shadow-2xl">
            <XIcon
              onClick={handleClose}
              className="md:h-10 md:w-10 h-8 w-8 text-white absolute top-1 right-1 md:right-5 md:top-5 z-[60] bg-black/40 rounded-full p-2 cursor-pointer"
            />
            <ChevronLeftIcon
              className="absolute top-[50%] md:left-4 left-1 z-[60] text-white h-8 w-8 md:h-10 md:w-10 cursor-pointer bg-black/40 rounded-full"
              onClick={prevSlide}
            />
            <ChevronRightIcon
              className="absolute top-[50%] md:right-4 right-1 z-[60] text-white  h-8 w-8  md:h-10 md:w-10 cursor-pointer bg-black/40 rounded-full"
              onClick={nextSlide}
            />

            {imageSrcs.map((slide, index) => {
              console.log(slide);
              return (
                <div
                  key={index}
                  className={`w-full h-full relative ${
                    index === current
                      ? 'opacity-100 duration-1000 ease'
                      : 'opacity-0 duration-1000 ease hidden'
                  }`}
                >
                  {index === current && (
                    <Image
                      layout="fill"
                      src={slide}
                      priority
                      className="rounded-lg"
                      alt={`Image of ${address}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ListingModal;
