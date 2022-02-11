import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartCount.scss';

const CartCount = ({ cartCount }) => {
  return (
    <div className="cartCount">
      <AiOutlineShoppingCart />
      {cartCount > 0 ? <div className="cart-quantity">{cartCount}</div> : ''}
    </div>
  );
};

export default CartCount;
