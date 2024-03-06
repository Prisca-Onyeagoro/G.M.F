import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaInstagramSquare } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 font-bold text-blue-950 text-2xl">
        <p>Card</p>
      </div>
      <form class="max-w-sm mx-auto flex flex-col mt-20">
        <label
          for="text"
          class="relative left-14 block mb-2 text-sm font-medium text-black"
        >
          Telephone
        </label>
        <div
          id="space"
          className=" relative mb-5 md:space-x-6  flex justify-center items-center"
        >
          <div className="flex flex-col md:w-80">
            <input
              type="text"
              id=""
              class="bg-slate-400  placeholder-black text-sm w-80 md:w-full ps-10 p-3 rounded-lg  border-none "
              placeholder="2987324207"
              disabled
            />
          </div>
        </div>

        <div
          id="space"
          className=" relative mb-5 md:space-x-6  flex justify-center items-center"
        >
          <div className="flex flex-col md:w-80">
            <input
              type="text"
              id=""
              class="bg-slate-400 placeholder-black text-sm w-80 md:w-full ps-10 p-3 rounded-lg  border-none "
              placeholder="Gmf@gmail.com"
              disabled
            />
          </div>
          <div className="absolute   inset-y-0 end-10 flex items-center ps-3.5 pointer-events-none">
            <div className="h-6 border-r w-1 border-gray-600 mr-6"></div>
            <p className="font-bold text-xl ">
              <MdArrowForwardIos />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <p className="flex justify-center tracking-tighter text-blue-950">
            You can also reach us through the following
          </p>
          <div className="flex gap-4 justify-center">
            <div className="rounded-full h-14 w-14  border-2 border-blue-950">
              <div className="flex justify-center text-center mt-4">
                <ImFacebook2 className="text-2xl text-orange-600 font-extrabold" />
              </div>
            </div>
            <div className="rounded-full h-14 w-14  border-2 border-blue-950">
              <div className="flex justify-center text-center mt-4">
                <IoLogoWhatsapp className="text-2xl text-orange-600 font-extrabold" />
              </div>
            </div>
            <div className="rounded-full h-14 w-14  border-2 border-blue-950">
              <div className="flex justify-center text-center mt-4">
                <FaInstagramSquare className="text-2xl text-orange-600 font-extrabold" />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center flex">
          <Link href="/created">
            <button className="bg-orange-600 rounded-lg text-gray-100 p-2 w-80 md:w-full text-lg mt-28 mb-28">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
