import React from 'react';
import Layout from '../../components/Layout/Layout';
import ListingDetailsNav from '../../components/ListingDetails/ListingDetailsNav';
import { listingData } from '../../data/listingsData';

export default ({ listing }) => {
  console.log(listing);

  return (
    <Layout>
      <section className="mt-[76px] pt-10 max-w-[1000px] mx-auto w-full">
        <ListingDetailsNav />
      </section>
    </Layout>
  );
};

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
