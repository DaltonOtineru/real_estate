import React from 'react';
import {
  AdjustmentsIcon,
  CalculatorIcon,
  MapIcon,
  OfficeBuildingIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/outline';
import FaqLink from './FaqLink';

const FaqNavbar = ({ mobile }) => {
  return (
    <>
      <FaqLink
        text="Buying"
        Icon={MapIcon}
        path="#buying"
        mobile={mobile && true}
      />
      <FaqLink
        text="Selling"
        Icon={PresentationChartLineIcon}
        path="#selling"
        mobile={mobile && true}
      />
      <FaqLink
        text="Renting"
        Icon={OfficeBuildingIcon}
        path="#renting"
        mobile={mobile && true}
      />
      <FaqLink
        text="Mortgages"
        Icon={CalculatorIcon}
        path="#mortgage"
        mobile={mobile && true}
      />
      <FaqLink
        text="Credit"
        Icon={AdjustmentsIcon}
        path="#credit"
        mobile={mobile && true}
      />
    </>
  );
};

export default FaqNavbar;
