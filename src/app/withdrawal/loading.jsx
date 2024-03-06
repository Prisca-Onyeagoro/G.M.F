import React from 'react';
import Image from 'next/image';

const loading = () => {
  return (
    <div className="flex justify-center items-center mt-48">
      <Image src="/loader.svg" alt="loader" height={300} width={300} />
    </div>
  );
};

export default loading;
