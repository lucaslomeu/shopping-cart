import React from 'react';
import './InputQuantity.scss';

const InputQuantity = ({ quantity, value }) => {
  return (
    <input
      className="product-quantity"
      type="number"
      min="0"
      onChange={quantity}
      defaultValue={value}
    />
  );
};

export default InputQuantity;
