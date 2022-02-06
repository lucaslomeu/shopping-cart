import React from 'react';
import './SelectSize.scss';

const SelectSize = ({ size }) => {
  return (
    <select
      name="size"
      id="size"
      className="product-size"
      onChange={size}
      defaultValue="P"
    >
      <option value="" disabled>
        TAM
      </option>
      <option value="p">P</option>
      <option value="m">M</option>
      <option value="g">G</option>
      <option value="gg">GG</option>
    </select>
  );
};

export default SelectSize;
