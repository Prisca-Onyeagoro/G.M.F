import React from 'react';
import Link from 'next/link';
import Svg from '../Pigsvg/pig';
import Target from '../TargetIcon/Traget';
import Vault from '../VaultIcon/Vault';
import Monthly from '../MonthlyIcon/Monthly';
import Progress from '../ProgressIcon/Progress';

const Display = () => {
  return (
    <div class="grid grid-cols-2 gap-4  mt-5">
      <Link href={'/savings'}>
        <div className="max-w-md  p-5 border-4 bg-orange-300 border-orange-400 rounded-3xl">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Svg />

              <p className="font-bold">Savings</p>
            </div>
            <div className="">
              <p className="font-light text-xs">
                A flexible account designed for everyday savings, offering
                competitive interest rates and easy access to your funds.
              </p>
            </div>

            <p className="text-orange-500 font-bold">
              50, 341.23 <span className="font-light">NGN</span>
            </p>
          </div>
        </div>
      </Link>

      <div className="max-w-md  p-5 border-4 bg-blue-200 border-blue-400 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Vault />
            <p className="font-bold">Vault</p>
          </div>
          <div className="">
            <p className="font-light text-xs">
              Automate ypur regular savings with regular monthly contributions
              perfect for steady, consistent savings growth.
            </p>
          </div>

          <p className="text-blue-600 font-bold ">
            50, 000.00 <span className="font-light">NGN</span>
          </p>
        </div>
      </div>

      <div className="max-w-md  p-5 border-4 bg-green-300 border-green-400 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Target />
            <p className="font-bold">Target</p>
          </div>
          <div className="">
            <p className="font-light text-xs">
              Set specific savings target and track your progress towards
              achieving them, ideal for achieving milestone goals.
            </p>
          </div>

          <p className="text-green-800 font-bold">
            200, 000 <span className="font-light">NGN</span>
          </p>
        </div>
      </div>

      <div className="max-w-md  p-5 border-4 bg-pink-200 border-pink-500 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Monthly />
            <p className="font-bold">Monthly</p>
          </div>
          <div className="">
            <p className="font-light text-xs">
              Automate ypur regular savings with regular monthly contributions
              perfect for steady, consistent savings growth.
            </p>
          </div>

          <p className="text-pink-600 font-bold">
            50:34:23<span className="font-light">NGN</span>
          </p>
        </div>
      </div>
      <div className="max-w-md  p-5  border-4 bg-blue-200 border-blue-400 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Progress />
            <p className="font-bold">Progress</p>
          </div>
          <div className="">
            <p className="font-light text-xs">
              Automate your regular savings with regular monthly contributions
              perfect for steady, consistent savings growth.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 font-extrabold md:hidden"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-md  p-5 border-4 bg-green-300 border-green-400 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center relative font-extralight top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-40 h-40  font-extralight"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
