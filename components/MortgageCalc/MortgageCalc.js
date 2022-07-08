import React, { useState } from 'react';

const MortgageCalc = () => {
  const [loan, setLoan] = useState({
    salePrice: 200000,
    downPmnt: 10000,
    term: 30,
    interest: 3.9,
  });

  // Calculate loan amount //
  const totalLoan = loan.salePrice - loan.downPmnt;

  // Calculate percentage of downpayment //
  const downPercent = (loan.downPmnt / loan.salePrice) * 100;

  // Total months for the loan length //
  const termMonths = loan.term * 12;

  // calculate interest to decimal //
  const percentageInt = loan.interest / 100;

  //calculate the monthly payment w/out interest //
  const monthly = totalLoan / termMonths;

  // total interest amount before dividing monthly //
  const interestAmount = totalLoan * percentageInt;

  // monthly interest to be added to each monthly payment //
  const monthlyInterest = interestAmount / 12;

  // Final monthly price with interest //
  const monthlyWithInterest = monthly + monthlyInterest;

  return (
    <section className="grid grid-cols-12 w-full md:max-w-3xl gap-y-12 lg:gap-10 mx-auto min-h-[50vh] px-6 lg:px-0 ">
      <div className="col-span-12  flex flex-col">
        <h2 className="font-extrabold text-4xl pb-4">Mortgage Calculator</h2>
        <p className="text-[1rem] pb-8 font-bold text-accent dark:text-[#7c8b94]">
          Find Your Comfortable Price Range
        </p>
        <div className="grid grid-cols-12 w-full gap-x-4 gap-y-14">
          <div className="col-span-6 flex flex-col">
            <p className="font-medium pb-6 text-sm">
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
            <p className="font-medium pb-6 text-sm">
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
            <p className="font-medium pb-6 text-sm">
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
            <p className="font-medium pb-6 text-sm">
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
      <div className="col-span-12 ">
        <div className="flex flex-col w-full border-2 justify-center items-center border-black dark:border-white/80 rounded-lg h-[300px] py-8 gap-y-4">
          <h2 className="text-center text-6xl md:text-7xl font-extrabold">
            ${monthlyWithInterest.toFixed(0)}/mo.
          </h2>
          <p className="text-center text-lg font-medium text-[#4a5359] dark:text-white/50">
            Monthly payment based on{' '}
            <span className="font-extrabold text-accent dark:text-[#7c8b94] ">
              {downPercent.toFixed(0)}%
            </span>{' '}
            down payment
          </p>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalc;
