import React from 'react';
import './CartList.scss';
import SelectSize from '../SelectSize/SelectSize';
import InputQuantity from '../InputQuantity/InputQuantity';
import { useGetCartItems } from '../../services/cartService';

const CartList = () => {
  const cartItems = useGetCartItems();

  return (
    <div className="cart-display">
      {cartItems.map((item, keyId) => (
        <div key={keyId} className="cart-list">
          <img className="cart-image" src={item.image} alt={item.name} />
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>PREÇO</th>
                <th>QUANTIDADE</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>R${item.price}</td>
                <td>
                  <InputQuantity />
                </td>
                <td>
                  <SelectSize />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <div className="cart-subtotal">
        <h1>Total no carrinho</h1>
      </div>
    </div>
  );
};

export default CartList;
