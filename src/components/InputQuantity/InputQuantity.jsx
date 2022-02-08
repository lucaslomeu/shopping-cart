import { findByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import './InputQuantity.scss';

const InputQuantity = ({ onClick, val }) => {
  const [value, setValue] = useState(val);

  const handleChange = () => {
    setValue(value + 1);
    console.log('oi');
  };

  const addel = (e) => {
    // if (e.innerText == '+') {
    //   console.log(value);
    // } else {
    //   setValue(value - 1);
    //   console.log(value);
    // }
  };

  return (
    <div>
      <button onClick={() => onClick(handleChange())}>-</button>
      <div>{value}</div>
      <button onClick={() => onClick(handleChange())}>+</button>
    </div>
  );
};

export default InputQuantity;
