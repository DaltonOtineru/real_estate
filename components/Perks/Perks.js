import React from 'react';
import PerkItem from './PerkItem';
import { perkData } from '../../data/perksData';

const Perks = () => {
  const renderPerks = () => {
    return perkData.map((perk) => {
      const { title, text, id, Icon } = perk;
      return <PerkItem title={title} text={text} key={id} Icon={Icon} />;
    });
  };

  return (
    <section className="max-w-[1400px] grid grid-cols-12 px-4 py-20 mx-auto">
      {renderPerks()}
    </section>
  );
};

export default Perks;
