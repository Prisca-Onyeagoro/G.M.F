'use client';
import Display from '@/components/Carddisplay/Display';
import Head from '@/components/Head/Head';
import Slides from '@/components/Slides/Slides';
import React from 'react';

const page = () => {
  return (
    <div className="mt-6 mr-4  ml-4  ">
      <div className="flex flex-col justify-center md:items-center">
        <Head />
      </div>
      <div className="md:ml-96">
        <Slides />
      </div>
      <div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
};

export default page;
