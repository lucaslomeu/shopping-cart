import React, { useState } from 'react';
import './InputQuantity.scss';

const InputQuantity = ({ value, onClick, onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = () => {
    onClick(quantity);
    console.log(quantity);
  };

  const handleClick = (e) => {
    let valueHtml = e.target.innerHTML;
    if (valueHtml == '-') {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="inputQnt">
      <div className="div" onClick={handleClick}>
        -
      </div>
      <input
        className="product-quantity"
        type="number"
        value={quantity}
        onChange={handleChange}
      />
      <div className="div" onClick={handleClick}>
        +
      </div>
    </div>
  );
};

export default InputQuantity;
