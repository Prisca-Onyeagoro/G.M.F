import React from 'react';
import Link from 'next/link';
import { MdExpandMore } from 'react-icons/md';

const page = () => {
  return (
    <>
      <div className="flex justify-center mt-10 font-bold text-blue-950 text-2xl">
        <p>Withdraw</p>
      </div>
      <form class="max-w-sm mx-auto flex flex-col mt-20">
        <div class="mb-5 flex flex-col justify-center">
          <label
            for="text"
            class="relative left-14 block mb-2 text-sm font-medium text-black"
          >
            Amount
          </label>
          <div
            id="space"
            className=" relative mb-5 md:space-x-6  flex justify-center items-center"
          >
            <div className="flex flex-col md:w-80">
              <input
                type="text"
                id=""
                class="bg-slate-400 placeholder-black text-sm w-80 md:w-full ps-10 p-3 rounded-lg  border-none "
                placeholder="5, 000.00"
              />
            </div>
            <div className="absolute   inset-y-0 end-10 flex items-center ps-3.5 pointer-events-none">
              <div className="h-6 border-r w-1 border-gray-600 mr-6"></div>
              <p className="font-bold text-orange-500 ">MAX</p>
            </div>
          </div>
          <label
            for="text"
            class="relative left-14 block mb-2 text-sm font-medium text-black"
          >
            From
          </label>
          <div
            id="space"
            className=" relative mb-5 md:space-x-6  flex justify-center items-center"
          >
            <div className="flex flex-col md:w-80">
              <input
                type="text"
                id=""
                class="bg-slate-400 placeholder-black text-sm w-80 md:w-full ps-10 p-3 rounded-lg  border-none "
                placeholder="Savings"
              />
            </div>
            <div className="absolute   inset-y-0 end-10 flex items-center ps-3.5 pointer-events-none">
              <div className="h-6 border-r w-1 border-gray-600 mr-6"></div>
              <MdExpandMore />
            </div>
          </div>
          <label
            for="text"
            class="relative left-14 block mb-2 text-sm font-medium text-black"
          >
            To
          </label>
          <div
            id="space"
            className=" relative mb-5 md:space-x-6  flex justify-center items-center"
          >
            <div className="flex flex-col md:w-80">
              <input
                type="text"
                id=""
                class="bg-slate-400 placeholder-black text-sm w-80 md:w-full ps-10 p-3 rounded-lg  border-none "
                placeholder="Main balance"
              />
            </div>
            <div className="absolute   inset-y-0 end-10 flex items-center ps-3.5 pointer-events-none">
              <div className="h-6 border-r w-1 border-gray-600 mr-6"></div>
              <MdExpandMore />
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <Link href="/home">
            <button className="bg-orange-600 rounded-lg text-gray-100 p-2 w-80 md:w-full text-lg mt-28 mb-28">
              Withdraw
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default page;
