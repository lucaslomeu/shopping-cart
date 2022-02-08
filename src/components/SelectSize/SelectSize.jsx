import React, { useState } from 'react';
import './SelectSize.scss';

const SelectSize = ({ option }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    let options = e.target.value;
    setSelectedOption(options);
  };

  return (
    <select className="product-size" onChange={handleChange} value={option}>
      <option value="tam">TAM</option>
      <option value="p">P</option>
      <option value="m">M</option>
      <option value="g">G</option>
      <option value="gg">GG</option>
    </select>
  );
};

export default SelectSize;
