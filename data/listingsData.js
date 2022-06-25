import { v4 as uuidv4 } from 'uuid';
// Home Page ~ Cover Photos //
import coverOne from '../public/homeCover/1cover.webp';
import coverTwo from '../public/homeCover/2cover.webp';
import coverThree from '../public/homeCover/3cover.webp';
import coverFour from '../public/homeCover/4cover.webp';
import coverFive from '../public/homeCover/5cover.webp';
import coverSix from '../public/homeCover/6cover.webp';
import coverSeven from '../public/homeCover/7cover.webp';
import coverEight from '../public/homeCover/8cover.webp';
// listing 1 //
import tallowOne from '../public/details/tallow1.webp';
import tallowTwo from '../public/details/tallow2.webp';
import tallowThree from '../public/details/tallow3.webp';
import tallowFour from '../public/details/tallow4.webp';
export const listingData = [
  {
    _id: 1,
    address: '2276 Tallow Dr.',
    zip_code: 'Portland, TX 78374',
    price: '$264,500',
    beds: '3 Bed',
    baths: '2 Bath',
    sq: '1,521 Sqft',
    time: 'NEW Today',
    coverPhoto: coverOne.src,
    description:
      'Absolutely stunning 3 bedroom 2 bath home situated on an oversized lot in a family friendly neighborhood! From the beautiful tall ceilings, to the earthy colored ceramic flooring, this home is inviting & beautiful. Bright natural lighting spills in from every window! Master is situated in the far back of the home (to offer more privacy) and the two other bedrooms are near the front. Large, wide open kitchen boasts an oversized granite island, tall modern cabinets, a sleek beauty of a back splash and stainless steel appliances. As in any entertainers dream, the living/dining in this home are open to each other & both offer access to the oversized fully fenced in back yard. Such beauty! Colors are fresh and modern. Master bedroom features tall ceilings and a gorgeous master bath which offers double vanities, a garden tub, a stand up shower and an oversized, walk in closet! Braselton built home means this home is very energy efficient! Dont wait. Call your realtor TODAY!',
    propertyType: 'Detached',
    pricePerSqft: '$174',
    lotSize: '0.18 Acres',
    daysOnMarket: '0',
    yearBuilt: '2017',
    ac: 'Central Air',
    foundation: 'Slab Foundation',
    heat: 'Gas',
    floor: 'Carpet & Tile',

    imgOne: tallowOne.src,
    imgtwo: tallowTwo.src,
    imgthree: tallowThree.src,
    imgFour: tallowFour.src,
  },
  {
    _id: 2,
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
    _id: 3,
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
    _id: 4,
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
    _id: 5,
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
    _id: 6,
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
    _id: 7,
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
    _id: 8,
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
