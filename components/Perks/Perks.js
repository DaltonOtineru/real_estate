import React from 'react';
import PerkItem from './PerkItem';
import {
  AdjustmentsIcon,
  GiftIcon,
  ChatIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';

const Perks = () => {
  const perkData = [
    {
      title: 'Exceptional Service',
      text: 'We take care of you like family. Our team of agents and staff are always available for you throughout the entire process.',
      id: '1',
      Icon: GiftIcon,
    },
    {
      title: 'Skilled Negotiation',
      text: 'Whether representing you as a buying or selling agent, we get you the best number, relative to the market and your situation.',
      id: '2',
      Icon: AdjustmentsIcon,
    },
    {
      title: 'Clear Communication',
      text: 'We pride ourselves as being great communicators. You are never left in the dark, or left on read.',
      id: '3',
      Icon: ChatIcon,
    },
    {
      title: 'Willingness To Teach',
      text: 'The real estate process can have a lot of moving parts, and can be intimidating. We give you the info to make sound real estate decisions.',
      id: '4',
      Icon: AcademicCapIcon,
    },
  ];

  const renderPerks = () => {
    console.log('hiiiii');
    return perkData.map((perk) => {
      return (
        <PerkItem
          title={perk.title}
          text={perk.text}
          key={perk.id}
          Icon={perk.Icon}
        />
      );
    });
  };

  return (
    <div className="max-w-[1400px] grid grid-cols-12 px-4 py-20 mx-auto">
      {renderPerks()}
    </div>
  );
};

export default Perks;
