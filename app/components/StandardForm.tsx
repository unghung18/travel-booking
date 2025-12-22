"use client";

import { useState } from "react";

const StandardForm = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);

  return (
    <form className="px-5 pt-5">
      {/* MAIN FORM */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4.5 mb-4.25">
        {/* Destination */}
        <div className="relative bg-white rounded-[5px] min-w-30.75 ">
          <input
            type="text"
            placeholder="Destination, city"
            className="w-full p-2.5 bg-transparent text-[#555555]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3.75 h-3.75 text-black opacity-50 cursor-pointer absolute top-4 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        {/* Month */}
        <div className="relative bg-white rounded-[5px] min-w-30.75">
          <select className="w-full p-2.5 text-[#555555] bg-transparent">
            <option>Any Month</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.75 h-3.75 text-black opacity-50 absolute top-4 right-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3.75 h-3.75 text-black opacity-50 absolute top-4 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        </div>

        {/* Sort */}
        <div className="relative bg-white rounded-[5px] min-w-30.7">
          <select className="w-full p-2.5 text-[#555555] bg-transparent">
            <option>Price Low to High</option>
          </select>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3.75 h-3.75 text-black opacity-50 absolute top-4 right-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>

        {/* Search button */}
        <div className="bg-[#FF4A52] rounded-[5px] transition-colorshover:bg-[#1EC6B6]">
          <div className="p-2.5 text-white text-center cursor-pointer">
            Search
          </div>
        </div>
      </div>

      {/* ADVANCED SEARCH */}
      {advancedSearch && (
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4.5 mb-4.25">
          {["All Categorys", "Any Destinations"].map((label, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[5px] min-w-30.75"
            >
              <select className="w-full p-2.5 text-[#555555] bg-transparent">
                <option>{label}</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3.75 h-3.75 text-black opacity-50 absolute top-4 right-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          ))}

          {/* Max budget */}
          <div className="relative bg-white rounded-[5px] min-w-30.75">
            <input
              type="text"
              placeholder="Max budget ex. 500"
              className="w-full p-2.5 bg-transparent text-[#555555]"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3.75 h-3.75 text-black opacity-50 absolute top-4 right-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="min-w-30.75"></div>
        </div>
      )}

      {/* TOGGLE */}
      <div
        onClick={() => setAdvancedSearch(!advancedSearch)}
        className="flex items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.75 h-3.75"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              advancedSearch
                ? "M4.5 15.75l7.5-7.5 7.5 7.5"
                : "M19.5 8.25l-7.5 7.5-7.5-7.5"
            }
          />
        </svg>
        <span className="ml-1.5 text-[13px]">Advanced Search</span>
      </div>
    </form>
  );
};

export default StandardForm;
