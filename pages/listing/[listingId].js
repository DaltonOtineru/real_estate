import Head from 'next/head';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/modalAtom';
import Footer from '../../components/Footer/Footer';
import ListingDescription from '../../components/ListingDetails/ListingDescription';
import ListingDetailsNav from '../../components/ListingDetails/ListingDetailsNav';
import ListingPhotoGrid from '../../components/ListingDetails/ListingPhotoGrid';
import Navigation from '../../components/Navigation/Navigation';
import { listingData } from '../../data/listingsData';
import ListingModal from '../../components/ListingDetails/ListingModal';

const ListingPage = ({ listing }) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const imageSrcs = [
    listing.coverPhoto,
    `/details/${listing.photoId}One.webp`,
    `/details/${listing.photoId}Two.webp`,
    `/details/${listing.photoId}Three.webp`,
    `/details/${listing.photoId}Four.webp`,
  ];

  return (
    <section className="w-screen h-screen relative">
      <Head>
        <title>{listing.address} | Berkshire Hathaway</title>
      </Head>
      <Navigation listingShadow />
      <section className="mt-[76px] pt-10 lg:max-w-[1120px] lg:px-3 mx-auto w-full xl:px-0">
        <ListingDetailsNav />
        <ListingPhotoGrid listing={listing} imageSrcs={imageSrcs} />
        <ListingDescription listing={listing} />
      </section>
      <Footer />
      {showModal && <ListingModal listing={listing} imageSrcs={imageSrcs} />}
    </section>
  );
};

export default ListingPage;

export async function getStaticProps({ params }) {
  const listing = listingData.filter(
    (listing) => listing._id.toString() === params.listingId
  );
  return {
    props: {
      listing: listing[0],
    },
  };
}

export async function getStaticPaths() {
  const paths = listingData.map((listing) => ({
    params: {
      listingId: listing._id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
