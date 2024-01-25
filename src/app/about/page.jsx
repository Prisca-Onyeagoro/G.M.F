'use client';

import About from '@/components/Abouts/About';
import React, { useState } from 'react';

const about = () => {
  const [one, setOne] = useState(1);

  return (
    <>
      {one}
      <About />
    </>
  );
};

export default about;
