import { v4 as uuidv4 } from 'uuid';
import coverOne from '../public/homeCover/1cover.webp';
import coverTwo from '../public/homeCover/2cover.webp';
import coverThree from '../public/homeCover/3cover.webp';
import coverFour from '../public/homeCover/4cover.webp';
import coverFive from '../public/homeCover/5cover.webp';
import coverSix from '../public/homeCover/6cover.webp';
import coverSeven from '../public/homeCover/7cover.webp';
import coverEight from '../public/homeCover/8cover.webp';

export const listingData = [
  {
    _id: uuidv4(),
    address: '2276 Tallow Dr.',
    zip_code: 'Portland, TX 78374',
    price: '$264,500',
    beds: '3 Bed',
    baths: '2 Bath',
    sq: '1,521 Sqft',
    time: 'NEW Today',
    coverPhoto: coverOne.src,
  },
  {
    _id: uuidv4(),
    address: '1965 Admiral',
    zip_code: 'Aransas Pass, TX 78336',
    price: '$269,500',
    beds: '3 Bed',
    baths: '2 Bath',
    sq: '1,636 Sqft',
    time: 'NEW Today',
    coverPhoto: coverTwo.src,
  },
  {
    _id: uuidv4(),
    address: '7001 Tocken Ct.',
    zip_code: 'San Diego, CA 92021',
    price: '$789,900',
    beds: '5 Bed',
    baths: '2 Bath',
    sq: '2,594 Sqft',
    time: 'NEW Today',
    coverPhoto: coverThree.src,
  },
  {
    _id: uuidv4(),
    address: '5320 Country Road 73',
    zip_code: 'Robstown, TX 78380',
    price: '$439,000',
    beds: '4 Bed',
    baths: '4 Bath',
    sq: '2,698 Sqft',
    time: 'NEW Today',
    coverPhoto: coverFour.src,
  },
  {
    _id: uuidv4(),
    address: '1609 SandalWood Dr.',
    zip_code: 'Santee, CA 92071',
    price: '$365,500',
    beds: '3 Bed',
    baths: '1 Bath',
    sq: '1,098 Sqft',
    time: 'NEW Today',
    coverPhoto: coverFive.src,
  },
  {
    _id: uuidv4(),
    address: '429 Skipper Ln.',
    zip_code: 'Lakeside, CA 92072',
    price: '$294,000',
    beds: '2 Bed',
    baths: '1 Bath',
    sq: '1026 Sqft',
    time: 'NEW Today',
    coverPhoto: coverSix.src,
  },
  {
    _id: uuidv4(),
    address: '4465 Naples St.',
    zip_code: 'El Cajon, CA 91901',
    price: '$345,500',
    beds: '2 Bed',
    baths: '2 Bath',
    sq: '1,306 Sqft',
    time: 'NEW Today',
    coverPhoto: coverSeven.src,
  },
  {
    _id: uuidv4(),
    address: '1408 Woodlawn Dr.',
    zip_code: 'Corpus Christi, TX 78412',
    price: '$204,500',
    beds: '3 Bed',
    baths: '2 Bath',
    sq: '1,136 Sqft',
    time: 'NEW Today',
    coverPhoto: coverEight.src,
  },
];
