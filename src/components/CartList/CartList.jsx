import React, { useState } from 'react';
import './CartList.scss';
import SelectSize from '../SelectSize/SelectSize';
import InputQuantity from '../InputQuantity/InputQuantity';
import { useGetCartItems, useDeleteCartItem } from '../../services/cartService';
import Button from '../Button/Button';

import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const CartList = () => {
  let navigate = useNavigate();
  const cartItems = useGetCartItems();
  const [_, deleteCartItem] = useDeleteCartItem();
  const [quantity, setQuantity] = useState(1);

  const cartItemPrice = () => {
    let price = cartItems
      .map((item) => item.price * quantity)
      .reduce((total, price) => total + price);
    return price;
  };

  const DeletToCart = () => {
    deleteCartItem(cartItems);
  };

  const attQuantity = (item) => {
    setQuantity(quantity + 1);
    if (item == 0) {
      if (window.confirm('Você realmente deseja remover esse item?')) {
        return DeletToCart();
      } else {
        return;
      }
    }
  };

  const handleContinueToCart = () => {
    navigate('/');
  };

  const transformCurrency = (currency) => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="cart-container">
      {cartItems.length !== 0 ? (
        <div className="cart">
          <div className="cart-display">
            <div className="cart-list">
              <div className="cart-table">
                <table>
                  <thead>
                    <tr className="trtr">
                      <th scope="col"></th>
                      <th scope="col">PRODUTO</th>
                      <th scope="col">QUANTIDADE</th>
                      <th scope="col">TAMANHO</th>
                      <th scope="col">SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, keyId) => (
                      <tr key={keyId} className="trtr">
                        <td scope="row">
                          <img
                            className="cart-image"
                            src={item.image}
                            alt={item.name}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <InputQuantity
                            quantity={attQuantity}
                            value={quantity}
                          />
                        </td>
                        <td>
                          <SelectSize value="m" />
                        </td>
                        <td>{transformCurrency(item.price)}</td>
                        <td className="delete-section">
                          <IoMdClose
                            className="delete-btn"
                            onClick={() => DeletToCart()}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                  <div className="price">
                    {transformCurrency(cartItemPrice())}
                  </div>
                  <div className="price-portion">
                    ou até 3x de
                    {transformCurrency(cartItemPrice() / 3)}
                  </div>
                </div>
              </div>
              <Button
                textBtn="Finalizar compra"
                onClick={() => alert('comprou')}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="cart-warning">O seu carrinho está vazio.</div>
          <div className="cart-sugestion">
            Deseja olhar outros produtos similares?
          </div>
          <Button
            textBtn="CONTINUAR COMPRANDO"
            onClick={handleContinueToCart}
          />
        </div>
      )}
    </div>
  );
};

export default CartList;
