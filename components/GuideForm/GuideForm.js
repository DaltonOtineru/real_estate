import React from 'react';

const GuideForm = ({ inputLabel }) => {
  return (
    <div className="lg:sticky lg:top-40 lg:mt-0 mt-10 w-full col-span-12 lg:col-span-5 flex flex-col ">
      <div className="w-full  rounded-lg shadow-2xl hover:shadow-2xl border-[1px] dark:border-white/10 dark:hover:border-white/20 duration-200 my-4 lg:my-0 dark:bg-[#141414]">
        <form className="px-6 py-10 flex flex-col">
          <h3 className="text-lg dark:text-[#dfdede] font-extrabold">
            Request More Info
          </h3>
          <p className="mb-2 opacity-80">
            We will get back with you within 24hrs
          </p>
          <label className="text-sm dark:text-white/50">Full Name</label>
          <input className="bg-black bg-opacity-[0.07] dark:bg-opacity-100 dark:bg-[#282828] rounded border-none outline-none py-1 mb-2 px-2" />
          <label className="text-sm dark:text-white/50">Email</label>
          <input className="bg-black bg-opacity-[0.07] dark:bg-opacity-100 dark:bg-[#282828] rounded border-none outline-none py-1 mb-2 px-2" />
          <label className="text-sm dark:text-white/50">{inputLabel}</label>
          <input className="bg-black bg-opacity-[0.07] dark:bg-opacity-100 dark:bg-[#282828] rounded border-none outline-none py-1 mb-2 px-2" />

          <button
            type="submit"
            className="bg-black dark:bg-white dark:text-black rounded border-none outline-none text-white py-3 hover:bg-opacity-80  duration-200"
          >
            Get More Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuideForm;
