import React from 'react';
import './InputQuantity.scss';

const InputQuantity = ({ quantity, value }) => {
  return (
    <input
      className="product-quantity"
      value={value}
      type="number"
      onChange={quantity}
    />
  );
};

export default InputQuantity;
