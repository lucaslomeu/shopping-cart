import React from 'react';

const Cart = ({ cartItem }) => {
  return (
    <div>
      <h2>Cart</h2>
      <div>{cartItem.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItem.length}
    </div>
  );
};

export default Cart;
