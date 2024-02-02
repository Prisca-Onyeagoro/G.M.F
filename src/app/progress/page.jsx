'use client';

import Date from '@/components/Datepicker/Date';
import Sidebar from '@/components/Transfer/Sidebar';
import React, { useState } from 'react';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowRoundUp, IoMdArrowRoundUp } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const progress = () => {
  const [sidebar, setSidebar] = useState(false);

  const SubmitHandler = () => {};
  return (
    <div className="flex flex-col gap-28  p-8">
      <div className="font-bold flex justify-center items-center text-2xl mt-10 ">
        <p>Progress</p>
        <div className="relative left-32">
          <div>
            <RxHamburgerMenu
              className="inline text-2xl"
              onClick={() => setSidebar(true)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-44">
        <div className="flex">
          <p className="text-lg font-bold ">Progress</p>
          <FaArrowUpWideShort className="text-green-600 font-bold" />
        </div>
        <form className="flex">
          <label for="cars" className="font-bold textlg">
            Account:
          </label>

          <select id="target" name="target" className="bg-white">
            <option value="volvo">Target</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>

          <input type="submit" className="text-white bg-white" />
        </form>

        <div className="flex">
          <label className="font-bold text-lg "> From:</label>
          <input type="date" className="bg-white" />
        </div>

        <div className="flex">
          <label className="font-bold text-lg"> To:</label>
          <input type="date" className="bg-white" />
        </div>
      </div>

      <div className="font-bold text-lg">Graphical Display</div>

      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </div>
  );
};

export default progress;
