import React from 'react';
import './InputQuantity.scss';

const InputQuantity = ({ quantity }) => {
  return (
    <input
      className="product-quantity"
      type="number"
      min="1"
      placeholder="0"
      onChange={quantity}
    />
  );
};

export default InputQuantity;
