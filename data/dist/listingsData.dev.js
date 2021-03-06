"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listingData = void 0;

var _uuid = require("uuid");

var _cover = _interopRequireDefault(require("../public/homeCover/1cover.webp"));

var _coverTwo = _interopRequireDefault(require("../public/homeCover/coverTwo.webp"));

var _cover2 = _interopRequireDefault(require("../public/homeCover/3cover.webp"));

var _cover3 = _interopRequireDefault(require("../public/homeCover/4cover.webp"));

var _cover4 = _interopRequireDefault(require("../public/homeCover/5cover.webp"));

var _cover5 = _interopRequireDefault(require("../public/homeCover/6cover.webp"));

var _cover6 = _interopRequireDefault(require("../public/homeCover/7cover.webp"));

var _cover7 = _interopRequireDefault(require("../public/homeCover/8cover.webp"));

var _coverNine = _interopRequireDefault(require("../public/homeCover/coverNine.webp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Home Page ~ Cover Photos //
// import coverTwo from '../public/homeCover/2cover.webp';
var listingData = [{
  _id: 1,
  address: '2276 Tallow Dr.',
  zip_code: 'Portland, TX 78374',
  price: '$264,500',
  beds: '3 Bed',
  baths: '2 Bath',
  sq: '1,521 Sqft',
  time: 'NEW Today',
  coverPhoto: _cover["default"].src,
  description: 'Absolutely stunning 3 bedroom 2 bath home situated on an oversized lot in a family friendly neighborhood! From the beautiful tall ceilings, to the earthy colored ceramic flooring, this home is inviting & beautiful. Bright natural lighting spills in from every window! Master is situated in the far back of the home (to offer more privacy) and the two other bedrooms are near the front. Large, wide open kitchen boasts an oversized granite island, tall modern cabinets, a sleek beauty of a back splash and stainless steel appliances. As in any entertainers dream, the living/dining in this home are open to each other & both offer access to the oversized fully fenced in back yard. Such beauty! Colors are fresh and modern. Master bedroom features tall ceilings and a gorgeous master bath which offers double vanities, a garden tub, a stand up shower and an oversized, walk in closet! Braselton built home means this home is very energy efficient! Dont wait. Call your realtor TODAY!',
  propertyType: 'Detached',
  pricePerSqft: '$174',
  lotSize: '0.18 Acres',
  daysOnMarket: '0',
  yearBuilt: '2017',
  ac: 'Central Air',
  foundation: 'Slab Foundation',
  heat: 'Gas',
  floor: 'Carpet & Tile',
  photoId: 'tallow'
}, {
  _id: 2,
  address: '426 Colony Dr.',
  zip_code: 'Corpus Christi, TX 78412',
  price: '$583,00',
  beds: '4 Bed',
  baths: '2 Bath',
  sq: '3,259',
  time: 'NEW Today',
  coverPhoto: _coverTwo["default"].src,
  description: "New Build by Freedom Homes. Split bedroom plan with wide open living, dining and kitchen, which open up to the rear covered patio in this abundant, afternoon-shaded pool size yard. Huge granite kitchen island with breakfast bar and a walk-in pantry. Large indoor utility room has cabinets and a folding area. The owner's suite features large walk-in tile shower and huge walk-in closet. Tile flooring throughout except in bedrooms, to be carpeted. Granite in kitchen, baths, and utility room. High ceilings throughout with architectural finishes in the living and owner's suite. Front yard sod is included. Still time for you to make interior selections.",
  propertyType: 'Detached',
  pricePerSqft: '$165',
  lotSize: '0.13 Acres',
  daysOnMarket: '7',
  yearBuilt: '2022',
  ac: 'Central Air',
  foundation: 'Slab Foundation',
  heat: 'Central | Electric',
  floor: 'Carpet & Tile',
  photoId: 'colony'
}, // NEED ^
{
  _id: 3,
  address: '7001 Tocken Ct.',
  zip_code: 'San Diego, CA 92021',
  price: '$789,900',
  beds: '5 Bed',
  baths: '2 Bath',
  sq: '2,594 Sqft',
  time: 'NEW Today',
  coverPhoto: _cover2["default"].src,
  description: "This beautiful home on a quiet cul-de-sac is ready to grow some new memories! The Elementary, Middle, and Veteran's Memorial High School are each very close-by. Formal dining with upgraded lighting & wall sconces. Lovely kitchen with granite counters & tumbled marble back splash, large island, large pantry, with new appliances. Kitchen is open to breakfast & large living area. Downstairs extra room can serve as either an office/study or 5th bedroom. Upstairs bedrooms offer added privacy. Tile flooring throughout main level, and carpet upstairs, including bonus loft area. You'll find the secondary bedrooms very generous, along with the spacious master bedroom suite. Master bath has updated vanity sinks, glamour bath with soaking tub, large walk-in closet & linen closet.. HUGE backyard! Plenty room for a pool, just endless possibilities for entertaining. Also features covered patio, large storage shed for yard equipment & sprinkler system for easy maintenance.",
  propertyType: 'Detached',
  pricePerSqft: '$275',
  lotSize: '0.19 Acres',
  daysOnMarket: '5',
  yearBuilt: '2005',
  ac: 'Central Air',
  foundation: 'Slab Foundation',
  heat: 'Central | Electric',
  floor: 'Carpet & Tile',
  photoId: 'tocken'
}, {
  _id: 4,
  address: '5320 Country Road 73',
  zip_code: 'Robstown, TX 78380',
  price: '$439,000',
  beds: '4 Bed',
  baths: '4 Bath',
  sq: '2,698 Sqft',
  time: 'NEW Today',
  coverPhoto: _cover3["default"].src,
  description: "4/4- Ranch style home on 2 ACRES, 4mls W of Calallen HS. - This 2BR (Master & Guest) downstairs and 2BR upstairs also has a nice game/play room w/recently installed carpet throughout, and Rain Soft water filter system. The 30' X 40' enclosed Shop/Barn w/additional slab, drive, and RV hookups, is within waking distance of home. A must see property for anyone interested in Country living, but still close to City accommodations, businesses, and restaurants.",
  propertyType: 'Detached',
  pricePerSqft: '$163',
  lotSize: '2.0 Acres',
  daysOnMarket: '12',
  yearBuilt: '1989',
  ac: 'Central Air',
  foundation: 'Slab Foundation',
  heat: 'Central | Electric',
  floor: 'Carpet & Tile',
  photoId: 'countryRoad'
}, {
  _id: 5,
  address: '1609 SandalWood Dr.',
  zip_code: 'Santee, CA 92071',
  price: '$365,500',
  beds: '3 Bed',
  baths: '1 Bath',
  sq: '1,098 Sqft',
  time: 'NEW Today',
  coverPhoto: _cover4["default"].src,
  description: 'Fabulous 3 bedroom, 1.5 bath home located in a great central location! This home has been completely updated throughout, carefully maintained and has so much to offer! Spacious living area with designer touches and shiplap throughout! Kitchen is equipped with butcher block counter tops, built in dishwasher, GAS stove and plenty of counter/storage space! Spacious bedrooms with ample room for all of your furniture. Step out back to the covered patio and spacious yard perfect for entertaining and making memories with family and friends! Located minutes from NASCC, North Padre Island Beaches, Texas A&MCC and great hospitals, shopping, restaurants, and schools.',
  propertyType: 'Detached',
  pricePerSqft: '$171',
  lotSize: '2.0 Acres',
  daysOnMarket: '0',
  yearBuilt: '1964',
  ac: 'Central Air',
  foundation: 'Slab Foundation',
  heat: 'Central | Electric',
  floor: 'Laminate',
  photoId: 'sandalWood'
}, {
  _id: 6,
  address: '429 Skipper Ln.',
  zip_code: 'Lakeside, CA 92072',
  price: '$294,000',
  beds: '2 Bed',
  baths: '1 Bath',
  sq: '1026 Sqft',
  time: 'NEW Today',
  coverPhoto: _cover5["default"].src,
  description: "LOCATION, LOCATION!! This Flour Bluff Gem is just down the street from THE LAGUNA MADRE! Bluff Bay Marina and the Philip Dimitt Municipal Fishing Pier are a few short blocks away! This beautiful home has an open floor plan. French doors off the dining area open up to a large partially shaded deck to enjoy the Bay breeze & a cool drink. The upper level also has 2 bedrooms each w/2 large closets, a bathroom & laundry. The lower level features a bedroom, bathroom w/tiled shower, bonus room & large enclosed storage room w/optional second laundry. The kitchen & both bathrooms have been recently updated & kitchen includes the stainless refrigerator. The main level could serve as guest quarters or mother-in-law suite. There is a massive fully fenced back yard. New roof added in 2018 as well as new AC in 2017. Ample parking with 2 covered spaces. It's only minutes to the Island beaches & all the beauty North Padre Island has to offer.",
  propertyType: 'Detached',
  pricePerSqft: '$192',
  lotSize: '0.14 Acres',
  daysOnMarket: '3',
  yearBuilt: '1970',
  ac: 'Central Air / Window Units',
  foundation: 'Slab Foundation',
  heat: 'Central | Electric',
  floor: 'Laminate',
  photoId: 'skipperLane'
}, {
  _id: 7,
  address: '4465 Naples St.',
  zip_code: 'El Cajon, CA 91901',
  price: '$345,500',
  beds: '2 Bed',
  baths: '2 Bath',
  sq: '1,306 Sqft',
  time: 'NEW Today',
  coverPhoto: _cover6["default"].src,
  description: "Beautiful home recently updated! Don't miss out on this spacious 3 bedroom, 2 bathroom, with washer and dryer hook ups, new interior paint, new LVT flooring, new lighting fixtures, crown molding, completely updated bathrooms with tiled showers,ceiling fans in all bedrooms. Kitchen features new custom cabinets, new counters, new appliances and gas/oven range. Spacious back yard.",
  propertyType: 'Detached',
  pricePerSqft: '$188',
  lotSize: '0.14 Acres',
  daysOnMarket: '0',
  yearBuilt: '1950',
  ac: 'Window Units',
  foundation: 'Slab Foundation',
  heat: 'Window Unit',
  floor: 'Vinyl',
  photoId: 'naples'
}, {
  _id: 8,
  address: '4247 Barracuda Pl.',
  zip_code: 'Corpus Christi, TX 78412',
  price: '$599,900',
  beds: '4 Bed',
  baths: '4 Bath',
  sq: '3,137 Sqft',
  time: 'NEW Today',
  coverPhoto: _coverNine["default"].src,
  description: "Located in one of Corpus Christi's most sought-after neighborhoods, this beautifully maintained home is open, bright and designed for the family. Large formal living area with French doors leading to the backyard. Well designed kitchen featuring plenty of granite countertops, tiled backsplash, rich dark oak cabinets, and an island. The pantry is a room onto itself. The spacious family room provides multiple areas for entertaining and fun family activities. Main house has three bedroom each with an ensuite bath. Additional square footage in the 439 SF guest quarters featuring its own full bath. Outside enjoy the large open patio off the kitchen/living room area or the quiet sitting area off the guest quarters. Mature landscaping.",
  propertyType: 'Detached',
  pricePerSqft: '$191',
  lotSize: '0.27 Acres',
  daysOnMarket: '0',
  yearBuilt: '1955',
  ac: 'Central Air',
  foundation: 'Slab Foundation',
  heat: 'Gas',
  floor: 'Carpet | Hardwood | Tile',
  photoId: 'barracudaba'
}];
exports.listingData = listingData;