'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loadings/Loading';

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const SubmitHandler = () => {};
  const handleClick = () => {
    try {
      setIsLoading(true);
      router.push('/home');
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-28">
      <form class="max-w-sm mx-auto " onSubmit={handleSubmit(SubmitHandler)}>
        <div className="flex text-2xl justify-center items-center">
          <Image
            src="/gmflogo.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div
          id="space"
          className=" relative mb-5 md:space-x-6  flex justify-center items-center"
        >
          <div className="      absolute inset-y-0 start-4 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <div className="flex flex-col md:w-80">
            <input
              type="email"
              id="email-address-icon"
              {...register('email', {
                required: 'Please enter a valid email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email',
                },
              })}
              class="bg-gray-50 text-sm w-80 md:w-full ps-10 p-2.5  "
              placeholder="Email"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
        </div>
        {/* password */}
        <div
          id="space"
          class="relative mb-5 md:space-x-6  flex justify-center items-center"
        >
          <div class="   absolute inset-y-0 start-4 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="flex flex-col md:w-80 ">
            <input
              type="password"
              id="email-address-icon"
              class="bg-gray-50 text-sm w-80 md:w-full ps-10 p-2.5  "
              placeholder="Password"
              {...register('password', {
                required: 'Please enter password',
                minLength: {
                  value: 6,
                  message: 'password is less than 5 chars',
                },
              })}
            />
            {errors.password && (
              <div className="text-red-500 ">{errors.password.message}</div>
            )}
          </div>
        </div>
        {/* password2 */}
        <div
          id="space"
          class="relative mb-5 md:space-x-6  flex justify-center items-center"
        >
          <div class="   absolute inset-y-0 start-4 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="flex flex-col md:w-80 ">
            <input
              type="password"
              id="email-address-icon"
              class="bg-gray-50 text-sm w-80 md:w-full ps-10 p-2.5  "
              placeholder="Password"
              {...register('password2', {
                required: 'Please enter password',
                minLength: {
                  value: 6,
                  message: 'password is less than 5 chars',
                },
              })}
            />
            {errors.password2 && (
              <div className="text-red-500 ">{errors.password2.message}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleClick}
            className="bg-gray-800 text-gray-100 p-2 w-80   md:w-full rounded text-lg mt-28 mb-28"
          >
            Sign Up
          </button>
          <div className="flex relative -right-22">
            <p className="text-gray-800">Already have an account?</p>
            <Link href="/">
              <p className="text-orange-600 font-extrabold">Sign In</p>
            </Link>
          </div>
        </div>
        {isLoading && <Loading />}
      </form>
    </div>
  );
};

export default Signup;
