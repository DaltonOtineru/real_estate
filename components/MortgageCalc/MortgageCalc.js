import React, { useState } from 'react';

const MortgageCalc = () => {
  const [loan, setLoan] = useState({
    salePrice: 200000,
    downPmnt: 10000,
    term: 30,
    interest: 3.9,
  });

  const downPercent = (loan.downPmnt / loan.salePrice) * 100;

  const totalLoan = loan.salePrice - loan.downPmnt;
  const int = (totalLoan * loan.interest) / 100;

  const monthly = totalLoan / (loan.term * 12);

  const monthlyWithInterest = int + monthly;

  console.log(monthly);

  return (
    <section className="grid grid-cols-12 w-full lg:max-w-5xl gap-4 mx-auto min-h-[50vh]">
      <div className="col-span-12 lg:col-span-6 flex flex-col">
        <h2 className="font-extrabold text-[2rem] pb-4">Mortgage Calculator</h2>
        <p className="text-[1rem] pb-8 font-bold text-[#4a5359] dark:text-[#7c8b94]">
          Find Your Comfortable Price Range
        </p>
        <div className="grid grid-cols-12 w-full gap-x-4 gap-y-10">
          <div className="col-span-6 flex flex-col">
            <p className="font-light pb-6 text-sm">
              Sale Price |{' '}
              <span className="font-extrabold">${loan.salePrice / 1000}k</span>
            </p>
            <input
              type="range"
              min="50000"
              max="999999"
              step="1000"
              value={loan.salePrice}
              className="calc__input"
              onChange={(e) => setLoan({ ...loan, salePrice: e.target.value })}
            />
          </div>
          <div className="col-span-6 flex flex-col">
            <p className="font-light pb-6 text-sm">
              Down Pmnt. |{' '}
              <span className="font-extrabold">${loan.downPmnt / 1000}k</span>
            </p>
            <input
              type="range"
              min="0"
              max={loan.salePrice}
              step="500"
              value={loan.downPmnt}
              className="calc__input"
              onChange={(e) => setLoan({ ...loan, downPmnt: e.target.value })}
            />
          </div>
          <div className="col-span-6 flex flex-col">
            <p className="font-light pb-6 text-sm">
              Term | <span className="font-extrabold">{loan.term}yrs</span>
            </p>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={loan.term}
              className="calc__input"
              onChange={(e) => setLoan({ ...loan, term: e.target.value })}
            />
          </div>
          <div className="col-span-6 flex flex-col">
            <p className="font-light pb-6 text-sm">
              Interest |{' '}
              <span className="font-extrabold">{loan.interest}%</span>
            </p>
            <input
              type="range"
              min="0.1"
              max="8"
              step="0.1"
              value={loan.interest}
              className="calc__input"
              onChange={(e) => setLoan({ ...loan, interest: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="flex flex-col w-full border-2 dark:border-white rounded-lg h-[500px] py-8">
          <h2 className="text-center text-6xl font-extrabold">
            ${monthlyWithInterest.toFixed(0)}/mo.
          </h2>
          <p className="text-center">
            Monthly payment based on {downPercent.toFixed(0)}% down payment
          </p>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalc;
