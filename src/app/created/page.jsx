import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FaToggleOn } from 'react-icons/fa';
import { MdCopyAll } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Link from 'next/link';

const page = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-10 p-5">
        {/* Account */}
        <div className="text-2xl font-bold text-blue-900">Account</div>
        {/* profile */}
        <div>
          <div className="flex justify-center mt-7 p-4">
            <RxAvatar className="w-16 h-16" />
          </div>
          <div>
            <p className="text-lg font-bold text-blue-900 ">Adegoke Samuel</p>
            <p className="text-blue-900 font-light text-sm flex justify-center">
              Samuel@gmail.com
            </p>
          </div>
        </div>
        {/*  */}
        <div className="p-5">
          <div className="flex gap-48 mt-4 ">
            <div>
              <p className="text-lg font-light text-blue-900 ">Account No.</p>
              <p className="text-lg font-bold text-blue-900 ">3284910576</p>
            </div>
            <MdCopyAll className="w-8 h-8 text-blue-900" />
          </div>
          <div className="flex gap-48 mt-4 ">
            <div>
              <Link
                href="/add-account"
                className="text-lg font-bold text-blue-900 "
              >
                Add Account
              </Link>
              <p className="tracking-tighter font-light text-xs text-blue-900 ">
                create a new account to improve savings
              </p>
            </div>
            <FaPlus className="w-8 h-8 text-blue-900" />
          </div>
          <div className="flex gap-48 mt-4 ">
            <div>
              <Link
                href={'/addbank'}
                className="text-lg tracking-tighter font-bold text-blue-900  "
              >
                Add Bank/Card
              </Link>
              <p className="tracking-tighter font-light text-xs text-blue-900 ">
                link your bank or credit/debit card
              </p>
            </div>
            <FaPlus className="w-8 h-8 text-blue-900" />
          </div>
          <div className="flex gap-48 mt-4 ">
            <div>
              <p className="text-lg font-bold text-blue-900 ">Auto-Debit</p>
              <p className="tracking-tighter font-light text-xs text-blue-900 ">
                Auomatically deduct contributions from your bank account
              </p>
            </div>
            <FaToggleOn className="w-16 h-16 text-blue-900" />
          </div>
          {/* profile */}
          <div className="mt-4 text-lg font-bold text-blue-900 ">
            <Link href="/profile">Profile</Link>
          </div>
          {/* Account Statement */}
          <div className="mt-4 text-lg font-bold text-blue-900 ">
            <Link href="/account-statement">Account Statement</Link>
          </div>{' '}
          {/* kyc level*/}
          <div className="flex gap-52 mt-4 ">
            <div>
              <p className="text-lg tracking-tighter font-bold text-blue-900  ">
                <Link href="/kyc-level">Kyc level</Link>
              </p>
            </div>
            <p className="mt-4 text-sm font-light text-blue-900">Level 2</p>
          </div>
          {/* security */}
          <div className="mt-4 text-lg font-bold text-blue-900 ">
            <Link href="/security">Security</Link>
          </div>
          {/* security */}
          <div className="mt-4 text-lg font-bold text-blue-900 ">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="mt-4 text-lg flex items-center text-orange-500 font-bold  ">
            <BsBoxArrowInLeft />
            <Link href="/">Log out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
