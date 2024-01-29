import React from 'react';
import Svg from '../Pigsvg/pig';
import Target from '../TargetIcon/Traget';

const Display = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-5">
      <div className="max-w-md bg-orange-400 border-2 border-orange-400 ">
        <div>
          <Svg />
          <p>Saving</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
