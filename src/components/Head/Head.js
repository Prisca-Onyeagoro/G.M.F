import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Sidebar from '../Transfer/Sidebar';

const Head = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex flex-col justify-center md:items-center">
      <div className="flex justify-around items-center">
        <div className="w-64 md:relative md:right-44 ">
          <div className="font-extrabold text-blue-950 text-2xl ">
            Hello username,
          </div>
          <div className="">
            <p className=" text-start text-sm tracking-tighter font-light text-blue-950">
              welcome, lets save more for rainy days.
            </p>
          </div>
        </div>
        {/* nav bar */}
        <div className="font-extrabold stroke-blue-950   md:relative md:left-44">
          <div>
            <RxHamburgerMenu
              className="inline text-2xl"
              onClick={() => setSidebar(true)}
            />
          </div>
        </div>
      </div>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </div>
  );
};

export default Head;
