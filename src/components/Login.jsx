'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Loading from '@/components/Loadings/Loading';
import { useRouter } from 'next/navigation';

const Login = () => {
  const route = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const SubmitHandler = () => {};
  const handleClick = () => {
    route.push('/home');
  };
  return (
    <div>
      <div className="mt-28 ">
        <form class="max-w-sm mx-auto " onSubmit={handleSubmit(SubmitHandler)}>
          <div className="flex text-2xl justify-center items-center">
            <p className="font-extrabold text-gray-800 mb-10 select-none">
              Welcome
            </p>
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
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                  clipRule="evenodd"
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
          <p id="forgot" className="text-gray-800 relative -right-56">
            Forgot Password?
          </p>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleClick}
              className="bg-gray-800 text-gray-100 p-2 w-80   md:w-full rounded text-lg mt-28 mb-28"
            >
              Sign In
            </button>
            <div className="flex relative -right-22">
              <p className="text-gray-800">Don't have an account?</p>
              <Link href="/signup">
                <p className="text-orange-600 font-extrabold">Sign Up</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
