'use client';

import React, { useEffect, useState } from 'react';

const About = ({ setOne, one }) => {
  const [image, setImage] = useState('image1');

  //   useEffect(() => {
  //     switch ({ one }) {
  //       case 1:
  //         setImage(image);
  //         break;
  //       case 2:
  //     }
  //   });
  return (
    <>
      <button onClick={() => setOne((prev) => prev + 1)}>click</button>
    </>
  );
};

export default About;
