import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartList.scss';

import { useLocation } from 'react-router-dom';

const CartList = ({ cartItem = 0, onClick }) => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="cart-list">
        <img
          className="cart-image"
          src={location.state.image}
          alt={location.state.name}
        />
        <div>{location.state.name}</div>
        <div>R${location.state.price}</div>
      </div>
    </div>
  );
};

export default CartList;
