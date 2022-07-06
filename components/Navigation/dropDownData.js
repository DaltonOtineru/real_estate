import {
  UserGroupIcon,
  CalculatorIcon,
  KeyIcon,
  MapIcon,
  ShoppingBagIcon,
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  PuzzleIcon,
} from '@heroicons/react/outline';

export const servicesDrop = [
  {
    title: 'Buy',
    text: 'Browse Coastal Bend Listings',
    Icon: MapIcon,
    path: '/',
  },
  {
    title: 'Sell',
    text: 'List Your Home With Berkshire Hathaway',
    Icon: ShoppingBagIcon,
    path: '/',
  },
  {
    title: 'Rent',
    text: 'Find Your Next Rental and Start An Application',
    Icon: KeyIcon,
    path: '/',
  },
  {
    title: 'Mortgage Calculator',
    text: 'Crunch the numbers | Determine your home budget',
    Icon: CalculatorIcon,
    path: '/',
  },
];
export const teamDrop = [
  {
    title: 'Our Team',
    text: 'Meet the realtors and office behind Berkshire Hathaway',
    Icon: UserGroupIcon,
    path: '/',
  },
  {
    title: 'Become A Realtor',
    text: 'Join the Berkshire Hathaway family',
    Icon: SparklesIcon,
    path: '/careers',
  },
];
export const learnDrop = [
  {
    title: 'First-Time Home Buyer Guide',
    text: 'Our guide for first time home buyers',
    Icon: AcademicCapIcon,
    path: '/buyersguide',
  },
  {
    title: 'Home Marketing Guide',
    text: 'Learn what makes our marketing so dynamic',
    Icon: BeakerIcon,
    path: '/marketingguide',
  },
  {
    title: 'Frequently Asked Questions',
    text: 'Get answers for the questions we are asked the most',
    Icon: PuzzleIcon,
    path: '/',
  },
];
