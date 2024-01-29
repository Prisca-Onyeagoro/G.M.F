import * as React from 'react';
const Progress = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 512 512"
    className="text-blue-500"
    {...props}
  >
    <path
      fill="currentColor"
      d="M463 20.3 315.6 75.65 368.5 109C274 228 137.3 301.3 21.8 329.2l32.72 59.6C184.3 346.5 321.7 270.2 410.2 135.4l40.3 25.4zm7.7 116.7-4.8 54.8-51.3-32.4c-1.8 2.7-3.7 5.3-5.6 8V487h78V137zM320.1 265c-12.7 11-25.8 21.4-39.1 31.2V487h78V265zm-123.7 84c-14.4 7.6-28.8 14.6-43.4 21.2V487h78V349zM25 393v94h78v-94h-5.68c-14.82 5.5-29.63 10.6-44.35 15.3l-7.06 2.2-9.6-17.5z"
    />
  </svg>
);
export default Progress;
