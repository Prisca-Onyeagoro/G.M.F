import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col justify-center md:items-center mt-6 mr-4  ml-4">
      <div className="flex justify-around  md:ju items-center">
        <div className="w-64">
          <div className="font-extrabold text-blue-950 text-2xl ">
            Hello username,
          </div>
          <div className="">
            <p className=" text-start text-sm tracking-tighter">
              welcome, lets save more for rainy days
            </p>
          </div>
        </div>
        {/* nav bar */}
        <div className="font-extrabold stroke-blue-950">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* cards */}
      <div className="max-w-full md:w-11/12 p-4 mt-9 text-white rounded-3xl overflow-hidden shadow-lg bg-blue-950">
        <div className="flex justify-center items-center mt-3  font-extrabold text-lg">
          Total balance
        </div>
        <div className="px-6 mt-4">
          <div className="flex justify-between">
            <p className="font-bold">
              115, 341.23 <span className="font-light">NGN</span>
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <p className="font-extralight text-xs">Avail Balance</p>
            <p className="font-bold">
              10, 341.00 <span className="font-light">NGN</span>{' '}
            </p>
          </div>
          <div className="flex justify-between p-5">
            <div></div>
            <button className="-mr-20 md:ml-72 bg-transparent font-bold border border-orange-400 px-4 pt-2 rounded-full">
              Withdraw
            </button>
            <button className="-mr-12 bg-orange-400 font-bold border border-orange-400 px-4 pt-2 rounded-full">
              Transfer
            </button>
          </div>
        </div>
      </div>

      <div>card contents</div>
    </div>
  );
};

export default page;
