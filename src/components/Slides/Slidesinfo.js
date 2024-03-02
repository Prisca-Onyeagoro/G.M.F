import React, { useState } from 'react';

const Slidesinfo = () => {
  const [isHidden, setisHidden] = useState(true);
  const Handle = () => {
    setisHidden((prevValue) => !prevValue);
  };
  return (
    <div className="flex flex-col px-3">
      <div className="font-bold flex justify-center mt-2">Total balance</div>
      <div className="flex justify-between relative top-2">
        <p className="font-bold tracking-tighter">
          {isHidden ? (
            <p>*********</p>
          ) : (
            <p>
              115,341.23 <span className="font-light">NGN</span>
            </p>
          )}
        </p>
        <div onClick={Handle}>
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
      <div className="pt-4   relative -bottom-2">
        <p className="font-thin tracking-tighter text-xs">Avail. Balance</p>
        <p className="font-bold tracking-tighter">
          {isHidden ? (
            <p>*********</p>
          ) : (
            <p>
              115,341.23 <span className="font-light">NGN</span>
            </p>
          )}
        </p>
        <div className="flex gap-4 mt-6 ml-30 tracking-tight ">
          <button className="border border-orange-500 px-4 pt-1 rounded-full">
            Withdraw
          </button>
          <button className="bg-orange-500  px-4 pt-1 rounded-full">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slidesinfo;
