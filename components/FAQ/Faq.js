import React from 'react';
import QuestionSection from './QuestionSection';
import {
  buyingQuestions,
  creditQuestions,
  mortgageQuestions,
  rentingQuestions,
  sellingQuestions,
} from '../../data/faqData';
import FaqNavbar from './FaqNavbar';

const Faq = () => {
  return (
    <div className="mx-auto w-[95%] max-w-6xl flex items-start relative">
      <div className="hidden lg:block w-1/5 relative lg:h-[200vh]">
        <div className="lg:sticky lg:top-40">
          <aside className="">
            <ul className="flex flex-col gap-y-2">
              <FaqNavbar />
            </ul>
          </aside>
        </div>
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
