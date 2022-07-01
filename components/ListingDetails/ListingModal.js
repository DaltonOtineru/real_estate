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

const ListingModal = ({
  listing: { photoId, coverPhoto, address },
  imageSrcs,
}) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [current, setCurrent] = useRecoilState(currentSlideState);

  //   const imageSrcs = [
  //     coverPhoto,
  //     `/details/${photoId}One.webp`,
  //     `/details/${photoId}two.webp`,
  //     `/details/${photoId}three.webp`,
  //     `/details/${photoId}four.webp`,
  //   ];
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
      className="!fixed !top-0 !left-0 !right-0 !bottom-0 duration-300"
    >
      <>
        <div className="w-full h-full flex items-center justify-center !z-40">
          <div className="aspect-[16/10] relative !z-50 w-[1000px] h-[700px] shadow-2xl">
            <XIcon
              onClick={handleClose}
              className="h-10 w-10 text-white absolute right-5 top-5 z-[60] bg-black/40 rounded-full p-2 cursor-pointer"
            />
            <ChevronLeftIcon
              className="absolute top-[50%] left-4 z-[60] text-white h-10 w-10 cursor-pointer bg-black/40 rounded-full"
              onClick={prevSlide}
            />
            <ChevronRightIcon
              className="absolute top-[50%] right-4 z-[60] text-white h-10 w-10 cursor-pointer bg-black/40 rounded-full"
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
