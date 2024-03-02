import React from 'react';
import ReactDOM from 'react-dom/client';
import Slides from '../Slides/Slides';

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const whole = () => {
  return <Slides slides={SLIDES} options={OPTIONS} />;
};

export default whole;
