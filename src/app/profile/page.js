import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import Link from 'next/link';

const page = () => {
  return (
    <div className="p-5 flex flex-col ">
      <div className="text-2xl font-bold text-blue-900 flex justify-center items-center mb-5">
        Profile
      </div>
      <div className="flex flex-start">
        <div className="flex flex-col gap-3 flex-start text-lg font-light text-blue-900">
          <p>change your picture</p>
          <div className="flex items-center gap-4">
            <RxAvatar className="w-16 h-16" />
            <p>Tap to change</p>
          </div>
        </div>
      </div>
      {/* form */}
      <form action="#" className="mt-8">
        <label
          for="input-group-1"
          class="block mb-2 text-sm font-medium text-blue-900 "
        >
          First Name
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg  block w-full p-5  dark:bg-gray-300 dark:border-gray-300 dark:text-black "
            placeholder="Emmanuel"
          />
        </div>
        <label
          for="input-group-1"
          class="block mb-2 text-sm font-medium text-blue-900 "
        >
          Last Name
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg  block w-full p-5  dark:bg-gray-300 dark:border-gray-300 dark:text-black "
            placeholder="Adegoke"
          />
        </div>
        <label
          for="input-group-1"
          class="block mb-2 text-sm font-medium text-blue-900"
        >
          Your Email
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
          <input
            type="email"
            id="input-group-1"
            class="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg  block w-full p-5  dark:bg-gray-300 dark:border-gray-300 dark:text-black "
            placeholder="samuel@gmail.com"
          />
        </div>
        <label
          for="input-group-1"
          class="block mb-2 text-sm font-medium text-blue-900"
        >
          phone number
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
          <input
            type="number"
            id="input-group-1"
            class="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg  block w-full p-5  dark:bg-gray-300 dark:border-gray-300 dark:text-black "
            placeholder="07015468921"
          />
        </div>
        <p className="text-sm font-light text-blue-900 flex flex-col  items-center mb-5">
          You can only change your profile picture. To change your information
          contact our custormer service at{' '}
          <span className="text-orange-500 font-bold">GMF@gmail.com</span>
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link href={'/created'}>
            <button className=" bg-orange-500 text-white px-20 pt-2 pb-2 mt-80 rounded-full">
              Update
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
