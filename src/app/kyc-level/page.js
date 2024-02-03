import React from 'react';
import Link from 'next/link';
const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-6">
        <div className="text-2xl font-bold text-blue-900">KYC</div>

        <p className="text-orange-500 font-bold">
          Upload a valid image of your id. e.g passport, voters card
        </p>
        <Link href="/cardinput">
          <div className="max-w-md  p-5 border-4 bg-gray-400 border-gray-400  rounded-3xl">
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
        </Link>
        <div>
          <label
            for="input-group-1"
            class="block text-sm font-medium text-blue-900"
          >
            current address
          </label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
            <input
              type="number"
              id="input-group-1"
              class="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg  block w-full p-5  dark:bg-gray-300 dark:border-gray-300 dark:text-black "
              placeholder="1 kunle street, apapa lagos"
            />
          </div>
          <label
            for="input-group-1"
            class="block text-sm font-medium text-blue-900"
          >
            password
          </label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
            <input
              type="[assword"
              id="input-group-1"
              class="bg-gray-300 border  border-gray-300 text-black text-sm rounded-lg  block w-full p-5  dark:bg-gray-300 dark:border-gray-300 dark:text-black "
              placeholder="******"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href={'/created'}>
            <button className=" bg-orange-500 text-white px-20 pt-2 pb-2 mt-60 rounded-full">
              Update
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
