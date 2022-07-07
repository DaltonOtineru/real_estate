import React from 'react';
import {
  AdjustmentsIcon,
  CalculatorIcon,
  MapIcon,
  OfficeBuildingIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/outline';
import FaqLink from './FaqLink';
import QuestionSection from './QuestionSection';
import {
  buyingQuestions,
  creditQuestions,
  mortgageQuestions,
  rentingQuestions,
  sellingQuestions,
} from '../../data/faqData';

const Faq = () => {
  return (
    <div className="mx-auto w-[95%] max-w-6xl flex items-start relative h-full">
      <div className="w-1/5 hidden lg:block relative">
        <aside className="sticky top-0">
          <ul className="flex flex-col gap-y-2">
            <FaqLink text="Buying" Icon={MapIcon} path="#buying" />
            <FaqLink
              text="Selling"
              Icon={PresentationChartLineIcon}
              path="#selling"
            />
            <FaqLink text="Renting" Icon={OfficeBuildingIcon} path="#renting" />
            <FaqLink text="Mortgages" Icon={CalculatorIcon} path="#mortgage" />
            <FaqLink
              text="Credit Repair"
              Icon={AdjustmentsIcon}
              path="#credit"
            />
          </ul>
        </aside>
      </div>
      <main className="w-full lg:w-4/5 flex flex-col gap-y-12 justify-center">
        <QuestionSection
          header="Buying Questions"
          questions={buyingQuestions}
          id="buying"
        />
        <QuestionSection
          header="Selling Questions"
          questions={sellingQuestions}
          id="selling"
        />
        <QuestionSection
          header="Renting Questions"
          questions={rentingQuestions}
          id="renting"
        />
        <QuestionSection
          header="Mortgage Questions"
          questions={mortgageQuestions}
          id="mortgage"
        />
        <QuestionSection
          header="Credit Repair Questions"
          questions={creditQuestions}
          id="credit"
        />
      </main>
    </div>
  );
};

export default Faq;
