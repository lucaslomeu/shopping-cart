import React from 'react';
import './SelectSize.scss';

const SelectSize = ({ value }) => {
  const handleChange = (e) => {
    value = e.target.value;
    console.log(value);
  };
  return (
    <select className="product-size" onChange={handleChange}>
      <option value="tam">TAM</option>
      <option value="p">P</option>
      <option value="m">M</option>
      <option value="g">G</option>
      <option value="gg">GG</option>
    </select>
  );
};

export default SelectSize;
