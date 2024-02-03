'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const SubmitHandler = () => {};
  return (
    <div className="mt-28 p-5">
      <form class="max-w-sm mx-auto " onSubmit={handleSubmit(SubmitHandler)}>
        <div className="flex text-2xl justify-center items-center flex-start">
          <p className="font-bold text-sm text-orange-500 mb-7">
            make sure the cards belongs to you!!!
          </p>
        </div>

        <div class="mb-6">
          <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-blue-900 "
          >
            Card number
          </label>
          <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-300 sm:text-md dark:bg-gray-300 dark:border-gray-300  dark:text-black "
            placeholder="0000-0000-0000-0000"
          />
        </div>

        <div className="flex gap-4">
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-blue-900 "
            >
              Expiry date
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-40 p-4 text-black border border-gray-300 rounded-lg bg-gray-300 sm:text-md dark:bg-gray-300 dark:border-gray-300  dark:text-black "
              placeholder="MM/YY"
            />
          </div>
          {/* second */}
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-blue-900 "
            >
              CVV
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-40 p-4 text-black border border-gray-300 rounded-lg bg-gray-300 sm:text-md dark:bg-gray-300 dark:border-gray-300  dark:text-black "
              placeholder="123"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link href={'/created'}>
            <button className=" bg-orange-500 text-white px-20 pt-2 pb-2 mt-80 rounded-full">
              Add
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
