import React from 'react';
import Link from 'next/link';

const Annual = () => {
  return (
    <>
      <div>
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900"
            >
              Amount
            </label>
            <input
              type="number"
              id="number"
              className="shadow-sm bg-gray-600 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="10,000"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900"
            >
              Founding date
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm bg-gray-600 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="12th of every september"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900"
            >
              Source of funds
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm bg-gray-600 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="main account"
              required
            />
          </div>

          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900"
            >
              Funding type
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm bg-gray-600 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Automated"
              required
            />
          </div>
          <div className="flex items-center justify-center mt-64">
            <button
              type="submit"
              class="text-white   bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-600"
            >
              <Link href="/created">Create account</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Annual;
