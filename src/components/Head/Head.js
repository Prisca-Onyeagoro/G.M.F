import React from 'react';

const Head = () => {
  return (
    <div className="flex flex-col justify-center md:items-center ">
      <div className="flex justify-around items-center">
        <div className="w-64 md:relative md:right-44 ">
          <div className="font-extrabold text-blue-950 text-2xl ">
            Hello username,
          </div>
          <div className="">
            <p className=" text-start text-sm tracking-tighter font-light text-blue-950">
              welcome, lets save more for rainy days.
            </p>
          </div>
        </div>
        {/* nav bar */}
        <div className="font-extrabold stroke-blue-950   md:relative md:left-44">
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
    </div>
  );
};

export default Head;
