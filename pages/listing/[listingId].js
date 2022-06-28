import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import ListingDescription from '../../components/ListingDetails/ListingDescription';
import ListingDetailsNav from '../../components/ListingDetails/ListingDetailsNav';
import ListingPhotoGrid from '../../components/ListingDetails/ListingPhotoGrid';
import { listingData } from '../../data/listingsData';

const ListingPage = ({ listing }) => {
  console.log(listing);
  return (
    <Layout>
      <section className="mt-[76px] pt-10 lg:max-w-[1120px] lg:px-3 mx-auto w-full xl:px-0">
        <ListingDetailsNav />
        <ListingPhotoGrid listing={listing} />
        <ListingDescription listing={listing} />
      </section>
    </Layout>
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
