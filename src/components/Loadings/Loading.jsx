import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-52">
      <Image
        src="/Gear.svg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Loading;
