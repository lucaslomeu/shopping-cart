import React, { useState } from 'react';
import './CartList.scss';
import SelectSize from '../SelectSize/SelectSize';
import InputQuantity from '../InputQuantity/InputQuantity';
import { useGetCartItems } from '../../services/cartService';
import Button from '../Button/Button';

const CartList = () => {
  const cartItems = useGetCartItems();
  const [quantity, setQuantity] = useState(1);

  const cartItemPrice = () => {
    let price = cartItems
      .map((item) => item.price * quantity)
      .reduce((total, price) => total + price);
    return price;
  };

  const transformCurrency = (currency) => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="cart">
      <div className="cart-display">
        <div className="cart-list">
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>PRODUTO</th>
                <th>QUANTIDADE</th>
                <th>TAMANHO</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, keyId) => (
                <tr key={keyId}>
                  <td>
                    <img
                      className="cart-image"
                      src={item.image}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <InputQuantity
                      quantity={(e) => {
                        setQuantity(e.target.value);
                      }}
                      value={quantity}
                    />
                  </td>
                  <td>
                    <SelectSize size={(e) => console.log(e.target.value)} />
                  </td>
                  <td>{transformCurrency(item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="cart-subtotal">
        <div className="subtotal-info">
          <div className="subtotal-title">Total no carrinho</div>
          <div className="subtotal-price">
            <div className="subtotal-price-text">Subtotal:</div>
            <div className="subtotal-price-total">
              {transformCurrency(cartItemPrice())}
            </div>
          </div>
        </div>
        <div className="subtotal-adress">
          <input
            type="text"
            className="zip-code"
            placeholder="Digite seu CEP"
          />
          <Button textBtn="Atualizar" onClick={() => alert('FOI')} />
        </div>
        <div className="subtotal-final">
          <div className="subtotal-final-total">
            <div className="total-text">Total:</div>
            <div className="total-price">
              <div className="price">{transformCurrency(cartItemPrice())}</div>
              <div className="price-portion">
                ou até 3x de
                {transformCurrency(cartItemPrice() / 3)}
              </div>
            </div>
          </div>
          <Button textBtn="Finalizar compra" onClick={() => alert('comprou')} />
        </div>
      </div>
    </div>
  );
};

export default CartList;
