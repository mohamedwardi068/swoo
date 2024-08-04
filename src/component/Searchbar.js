import React from 'react';

function Searchbar() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-green-500 p-4 justify-between">
      <div className="w-full lg:w-1/2 flex mb-4 lg:mb-0">
        <div className="flex items-center bg-white p-2 rounded-full w-full lg:w-3/4">
          <select className="border-none outline-none p-2 font-bold bg-white rounded-l-full">
            <option value="all-categories">All Categories</option>
          </select>
          <input
            type="text"
            placeholder="Search anything..."
            className="border-none outline-none p-2 flex-grow"
          />
          <button className="bg-transparent border-none cursor-pointer p-2">
            <i className="fa fa-search text-black"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-around text-white text-center lg:text-left">
        <span className="mb-2 lg:mb-0">FREE SHIPPING OVER $199</span>
        <span className="mb-2 lg:mb-0">30 DAYS MONEY BACK</span>
        <span className="mb-2 lg:mb-0">100% SECURE PAYMENT</span>
      </div>
    </div>
  );
}

export default Searchbar;
