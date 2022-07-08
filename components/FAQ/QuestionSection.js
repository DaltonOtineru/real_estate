import React from 'react';

const QuestionSection = ({ questions, header, id }) => {
  return (
    <section id={id} className="flex flex-col gap-y-4">
      <h2 className="w-full lg:w-[80%] text-2xl lg:text-3xl dark:opacity-100 border-b-2 border-black dark:border-white/20 pb-4 font-extrabold">
        {header}
      </h2>
      <div className="flex flex-col gap-y-8">
        {questions.map(({ title, text }) => (
          <div key={title} className="flex flex-col">
            <h4 className="font-bold text-xl dark:opacity-90">{title}</h4>
            <p className="font-medium dark:opacity-50 lg:text-[14px] opacity-[.8]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionSection;
