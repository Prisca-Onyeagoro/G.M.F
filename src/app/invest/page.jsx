"use client";

import { useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa6";

import Card from "@/components/Transfer/Card";
import Sidebar from "@/components/Transfer/Sidebar";

function App() {
  const [nav, setNav] = useState("all");
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="bg-white min-h-screen px-4 md:px-8">
      <div className="flex justify-between items-center">
        <div className="py-4">
          <h1 className="text-2xl font-bold text-gray-800">Hello Samuel,</h1>
          <p className="text-gray-600">
            Welcome, let&apos;s save more for rainy days.
          </p>
        </div>

        <div>
          <RxHamburgerMenu
            className="inline text-2xl"
            onClick={() => setSidebar(true)}
          />
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-lg shadow-lg p-4 mt-4">
        <h3 className="text-xl text-center">
          Total balance
        </h3>
        <div className="mt-4 flex justify-between items-center">
          <p className="">
            30,000.00 <span className="text-gray-400">NGN</span>
          </p>
          <p>
            <FaRegEye className="inline text-2xl" />
          </p>
        </div>
        <div className="">
          <p className="text-gray-500 text-sm mt-4">Avail. Balance</p>
          <h3 className="text-white text-2xl">3</h3>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-lg">
            Transfer
          </button>
          <div>
            <MdOutlineInfo className="text-2xl inline" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between px-4 py-2 border border-gray-300 text-gray-500">
          <button
            className={`${nav === "all" && "text-black font-semibold border-b-2 border-orange-500"} pb-1 mr-4`}
            onClick={() => setNav("all")}
          >
            All
          </button>
          <button
            className={`${nav === "investment" && "text-black font-semibold border-b-2 border-orange-500"} pb-1 mr-4`}
            onClick={() => setNav("investment")}
          >
            My Investment
          </button>
          <button
            className={`${nav === "completed" && "text-black font-semibold border-b-2 border-orange-500"} pb-1 mr-4`}
            onClick={() => setNav("completed")}
          >
            Completed
          </button>
        </div>
        <div className="flex items-center mt-4">
          <h4 className="font-semibold text-lg">Category:</h4>
          <select className="block border-b border-gray-400 text-gray-600 appearance-none bg-transparent hover:border-gray-500 px-1 ml-3 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline">
            <option>Farm Produce</option>
            <option>Real Estate</option>
            <option>Stocks</option>
          </select>
          <div className="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-gray-700 h-full">
            <RxCaretDown className="inline text-xl" />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="Groceries Production"
          percent={15}
          amount="10,000.00"
          investors={150}
          img="/images/1.jpg"
        />

        <Card
          title="Floating Berries Production"
          percent={15}
          amount="10,000.00"
          investors={150}
          img="/images/2.jpg"
        />

        <Card
          title="Pablo's Sugar Refinery"
          percent={15}
          amount="10,000.00"
          investors={150}
          img="/images/3.jpg"
        />
      </div>

      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </div>
  );
}

export default App;
