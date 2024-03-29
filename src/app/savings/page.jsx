'use client';
import Link from 'next/link';
import React from 'react';
import { GoPlus } from 'react-icons/go';

const savings = () => {
  const SubmitHandler = () => {};
  return (
    <div className="flex flex-col  p-8">
      <div className="font-bold flex justify-center items-center text-2xl mt-10 ">
        <p>Savings</p>
      </div>
      <div>
        <p className="font-bold text-2xl mt-11">Balance</p>
        <div>
          <form className="max-w-md mx-auto" onSubmit={SubmitHandler}>
            <div class="relative z-0 w-full mb-5 group">
              <div className="flex  items-center gap-1">
                <input
                  type="number"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                  placeholder="50, 341.23 NGN"
                  required
                />{' '}
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-lg text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {/* 50, 341.23 NGN */}
                </label>
                <GoPlus className="font-black text-lg" />
              </div>

              <p className="text-gray-600 text-xs mt-0">
                Interest rate: <span className="text-orange-400"> 10%p.a </span>{' '}
              </p>
            </div>

            {/* house rent */}
            <div className="flex flex-col mb-6">
              <p className="text-gray-900 mb-7 font-bold">Description</p>

              <div class="relative z-0 w-full mb-5 group">
                <div className="flex  items-center gap-1">
                  <input
                    type="text"
                    name="floating_email"
                    id="floating_email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                    placeholder=" House rent "
                    required
                  />{' '}
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-lg tracking-tighter font-bold text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-800 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {/* House rent */}
                  </label>
                  <p className="text-xs font-bold text-black">change</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Link href="/transfer">
                <button className="border border-orange-500 px-4 pt-1 rounded-full">
                  Transfer
                </button>
              </Link>
              <Link href="/withdraw">
                <button className="bg-orange-500  px-4 pt-1 text-white rounded-full">
                  Withdraw
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default savings;
