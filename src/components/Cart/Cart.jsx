import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = ({ cartItem = 0 }) => {
  const attCard = () => {
    cartItem += 1;
  };

  return (
    <div className="nav-subitem nav-cart">
      <AiOutlineShoppingCart />({cartItem})
    </div>
  );
};

export default Cart;
