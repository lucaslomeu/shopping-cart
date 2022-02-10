import React from 'react';
import './SelectSize.scss';

const SelectSize = ({ option, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <select
      className="product-size"
      defaultValue={option}
      onChange={handleChange}
    >
      <option value="tam">TAM</option>
      <option value="p">P</option>
      <option value="m">M</option>
      <option value="g">G</option>
      <option value="gg">GG</option>
    </select>
  );
};

export default SelectSize;
