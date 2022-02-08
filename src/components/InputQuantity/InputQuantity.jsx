import React from 'react';
import './InputQuantity.scss';

const InputQuantity = ({ quantity }) => {
  return (
    <input
      className="product-quantity"
      type="number"
      min="0"
      defaultValue={quantity}
    />
  );
};

export default InputQuantity;
