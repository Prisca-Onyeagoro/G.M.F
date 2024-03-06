'use client';
import React from 'react';
import { BsBank2, BsLayoutSidebarInset } from 'react-icons/bs';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { GoCreditCard } from 'react-icons/go';

const page = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-6  text-2xl font-bold text-blue-900">
        Manage Bank & Cards
      </div>

      <div class="flex flex-col justify-center items-center">
        <Menu>
          <Menu.Button className="bg-gray-300 w-80 p-5 mt-14 flex gap-3  items-center">
            <span class="inline-flex items-center px-3 text-sm text-black bg-gray-200   dark:bg-gray-300 dark:text-black ">
              <GoCreditCard className="w-7 h-7" />
            </span>{' '}
            <p className="flex flex-start font-bold text-lg ">Debit card</p>
          </Menu.Button>
          <Menu.Items className="flex flex-col gap-5 border border-r-0 border-b-0 border-l-0 border-t-4 border-blue-900 justify-center items-center bg-gray-300 w-80">
            <Menu.Item className="mt-4">
              {({ active }) => (
                <a className={`${active && 'bg-blue-500'}`} href="/cardinfo">
                  Debit Card
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && 'bg-blue-500'}`} href="/cardinfo">
                  Credit Card
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        <Menu>
          <Menu.Button className="bg-gray-300 w-80 p-5 mt-14 flex gap-3  items-center">
            <span class="inline-flex items-center px-3 text-sm text-black bg-gray-200   dark:bg-gray-300 dark:text-black ">
              <BsBank2 className="w-7 h-7" />
            </span>{' '}
            <Link href="/withdrawal">
              <p className="flex flex-start text-lg font-bold ">
                Withdrawal bank
              </p>
            </Link>
          </Menu.Button>
          <Menu.Items className="flex flex-col gap-5 w-80 border border-r-0 border-b-0 border-l-0 border-t-4 border-blue-900 justify-center items-center bg-gray-300">
            {/* <Menu.Item className="mt-4">
              {({ active }) => (
                <a className={`${active && 'bg-blue-500'}`} href="/cardinfo">
                  Debit Card
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && 'bg-blue-500'}`} href="/cardinfo">
                  Credit Card
                </a>
              )}
            </Menu.Item> */}
          </Menu.Items>
        </Menu>
        <div className="flex justify-center items-center gap-4">
          <Link href={'/created'}>
            <button className=" bg-orange-500 text-white px-20 pt-2 pb-2 mt-80 rounded-full">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
