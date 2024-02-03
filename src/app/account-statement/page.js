'use client';

import Date from '@/components/Datepicker/Date';
import Sidebar from '@/components/Transfer/Sidebar';
import React, { useState } from 'react';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowRoundUp, IoMdArrowRoundUp } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';

const page = () => {
  const [sidebar, setSidebar] = useState(false);

  const SubmitHandler = () => {};
  return (
    <div className="flex flex-col justify-center items-center gap-28  p-8">
      <div className="font-bold flex justify-center items-center text-2xl mt-10 ">
        <p>Account Statement</p>
        <div className="relative left-32">
          <div>
            <RxHamburgerMenu
              className="inline text-2xl"
              onClick={() => setSidebar(true)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-10 w-44">
        <div className="flex items-center">
          <label className="font-bold text-lg "> From:</label>
          <input
            type="date"
            className=" p-5 bg-gray-300 w-40"
            placeholder="2/2023"
          />
        </div>

        <div className="flex items-center ">
          <label className="font-bold text-lg"> To:</label>
          <input
            type="date"
            className="bg-gray-300  p-5 w-40"
            placeholder="2/2023"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link href={'/created'}>
          <button className=" bg-orange-500 text-white px-20 pt-2 pb-2 mt-80 rounded-full">
            Generate
          </button>
        </Link>
      </div>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </div>
  );
};

export default page;
