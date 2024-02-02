'use client';
import React, { useState } from 'react';
import Datepicker from 'react-datepicker';

function CustomInput({ value, onClick }) {
  return (
    <div>
      <input type="text" value={value} onClick={onClick} readOnly />F
    </div>
  );
}
const Date = () => {
  const [selectedDate, setDate] = useState(null);

  return <div></div>;
};

export default Date;
