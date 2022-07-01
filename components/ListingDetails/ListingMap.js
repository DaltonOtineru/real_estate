import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LocationMarkerIcon } from '@heroicons/react/solid';

const ListingMap = ({ lat, long }) => {
  return (
    <Map
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: 12.5,
      }}
      style={{ width: '100%', height: 400, borderRadius: '.5rem' }}
      mapStyle="mapbox://styles/dalton-otineru/cl51pbceh000015tdnlpzst66"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      <Marker longitude={long} latitude={lat} anchor="bottom">
        <LocationMarkerIcon className="h-12 w-12 text-red-500" />
      </Marker>
    </Map>
  );
};

export default ListingMap;
